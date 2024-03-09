package com.itangsoft.notebook.utils.watermark;

import elemental2.core.Global;
import elemental2.core.JsMath;
import elemental2.core.JsObject;
import elemental2.dom.CanvasRenderingContext2D;
import elemental2.dom.DomGlobal;
import elemental2.dom.Element;
import elemental2.dom.HTMLCanvasElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.Image;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

import java.util.Arrays;
import java.util.Date;

/**
 * 水印工具类
 *
 * @author fushuwei
 */
public class WatermarkUtils {

    /**
     * 获取需要显示水印的容器
     *
     * @param containerId 需要显示水印的容器Id
     * @return HTMLElement
     */
    public static HTMLElement getContainer(String containerId) {
        return getContainer(DomGlobal.document.getElementById(containerId));
    }

    /**
     * 获取需要显示水印的容器
     *
     * @param container 需要显示水印的容器
     * @return HTMLElement
     */
    public static HTMLElement getContainer(Element container) {
        if (container == null) {
            container = DomGlobal.document.body;
        }
        container.setAttribute(Constant.MONITORED_ATTRIBUTE_NAME, Constant.MONITORED_ATTRIBUTE_VALUE);
        // container.setAttribute("style", "position: relative;");
        return (HTMLElement) container;
    }

    /**
     * 获取包裹水印的元素
     *
     * @return HTMLElement
     */
    public static HTMLElement getWatermarkWrapperElement() {
        HTMLElement element = (HTMLElement) DomGlobal.document.createElement("div");
        element.setAttribute("style", "pointer-events: none;");
        element.setAttribute(Constant.MONITORED_ATTRIBUTE_NAME, Constant.MONITORED_ATTRIBUTE_VALUE);
        return element;
    }

    /**
     * 获取水印元素
     *
     * @param options 水印配置项
     * @param style   水印元素样式
     * @return HTMLElement
     */
    public static HTMLElement getWatermarkElement(WatermarkOptions options, JsPropertyMap<Object> style) {
        HTMLElement element = (HTMLElement) DomGlobal.document.createElement("div");

        // style.set("height", "");

        DrawPattern drawPattern = getDrawPattern(options);
        if (drawPattern != null && drawPattern.url != null) {
            if ("repeat".equals(options.showMode)) {
                style.set("background-image", "url(" + drawPattern.url + ")");
            } else {
                style.set("background-image", "url(" + drawPattern.url + "), url(" + drawPattern.url + ")");
                style.set("background-repeat", "repeat, repeat");
                style.set("background-position", drawPattern.width / 2 + "px " + drawPattern.height / 2 + "px, 0 0");
            }
            element.setAttribute("style", getStyleStr(style));
        }

        element.setAttribute(Constant.MONITORED_ATTRIBUTE_NAME, Constant.MONITORED_ATTRIBUTE_VALUE);
        return element;
    }

    /**
     * 获取 Canvas 绘制的图案
     *
     * @param options 水印配置项
     * @return DrawPattern
     */
    public static DrawPattern getDrawPattern(WatermarkOptions options) {
        // 创建 canvas
        HTMLCanvasElement canvas = (HTMLCanvasElement) DomGlobal.document.createElement("canvas");
        JsObject jsObject = canvas.getContext("2d");
        if (jsObject == null) return null;
        CanvasRenderingContext2D ctx = Js.cast(jsObject);

        // 设置画布的 width 和 height
        double canvasWidth = options.width + options.gapX;
        double canvasHeight = options.height + options.gapY;
        canvas.setAttribute("width", canvasWidth + "px");
        canvas.setAttribute("height", canvasHeight + "px");

        // 平移画布坐标原点位置
        ctx.translate(options.offsetX >= 0 ? options.offsetX : options.gapX / 2,
            options.offsetY >= 0 ? options.offsetY : options.gapY / 2);

        // 设置画布旋转角度
        ctx.rotate(JsMath.PI / 180 * options.rotate);

        // 判断是否填充盲水印
        if (options.blindText != null && !options.blindText.isEmpty()) {
            ctx.globalAlpha = options.blindOpacity;
            ctx.font = options.blindFont;
            ctx.fillText(options.blindText, 0, 0);
        }

        // 设置可见水印的不透明度
        ctx.globalAlpha = options.opacity;

        // 判断是否图片水印
        if (options.imageUrl != null && !options.imageUrl.isEmpty()) {
            Image image = new Image();
            image.crossOrigin = "anonymous";  // 解决图片跨域问题
            image.src = options.imageUrl;
            image.addEventListener("load", evt -> ctx.drawImage(image, 0, 0, options.width, options.height));
            return new DrawPattern(ctx.canvas.toDataURL(), canvasWidth, canvasHeight);
        }

        // 设置文字水印样式
        ctx.textAlign = options.textAlign;
        ctx.textBaseline = options.textBaseline;
        ctx.fillColor = options.fontColor;
        ctx.font = options.fontStyle + " " + options.fontVariant + " " +
            options.fontWeight + " " + options.fontSize + " " + options.fontFamily;

        // 测量水印文字的最大宽度
        double maxWidth = JsMath.max(Arrays.stream(options.texts).map(s -> ctx.measureText(s).width));
        if (maxWidth > options.width) {
            ctx.font = options.fontStyle + " " + options.fontVariant + " " +
                options.fontWeight + " " + options.fontSize / 2 + " " + options.fontFamily;
        }

        // 计算水印在 Y 轴上的初始位置
        double initialPositionY = (options.height -
            (options.fontSize * options.texts.length + (options.texts.length - 1) * 5)) / 2;
        initialPositionY = initialPositionY < 0 ? 0 : initialPositionY;

        // 填充文字
        for (int i = 0; i < options.texts.length; i++) {
            ctx.fillText(options.texts[i] != null ? options.texts[i] : "",
                options.width / 2, initialPositionY + options.fontSize * i);
        }

        return new DrawPattern(ctx.canvas.toDataURL(), canvasWidth, canvasHeight);
    }

    /**
     * 获取随机字符串
     *
     * @return String
     */
    public static String getRandomId() {
        return encrypt("watermark") + "-" + new Date().getTime() + "-" +
            JsMath.floor(JsMath.random() * JsMath.pow(10, 8));
    }

    /**
     * 加密
     *
     * @param text 明文
     * @return 密文
     */
    public static String encrypt(String text) {
        return DomGlobal.btoa(Global.decodeURI(Global.encodeURIComponent(text)));
    }

    /**
     * 将键值对格式的样式转成字符串
     *
     * @param style 样式 Map
     * @return 样式字符串
     */
    public static String getStyleStr(JsPropertyMap<Object> style) {
        StringBuilder str = new StringBuilder();
        style.forEach(key -> str.append(key).append(":").append(style.get(key)).append(";"));
        return str.toString();
    }

    /**
     * 校验浏览器是否支持 HTMLCanvasElement
     *
     * @return true or false
     */
    public static boolean isSupportCanvas() {
        Element element = DomGlobal.document.createElement("canvas");
        if (element instanceof HTMLCanvasElement) {
            return ((HTMLCanvasElement) element).getContext("2d") != null;
        }
        return false;
    }
}
