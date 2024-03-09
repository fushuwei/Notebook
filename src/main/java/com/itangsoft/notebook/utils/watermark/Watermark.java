package com.itangsoft.notebook.utils.watermark;

import elemental2.core.JsObject;
import elemental2.dom.HTMLElement;
import elemental2.dom.ShadowRoot;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

/**
 * 水印类
 *
 * @author fushuwei
 */
public class Watermark {

    // 水印配置项，初始值为默认配置
    WatermarkOptions options = new WatermarkOptions();

    // 需要显示水印的容器
    HTMLElement container;
    // 包裹水印的元素
    HTMLElement watermarkWrapperElement;
    // 水印元素
    HTMLElement watermarkElement;

    // 水印元素所在的影子根
    ShadowRoot shadowRoot;

    // 水印样式
    JsPropertyMap<Object> watermarkStyle = JsPropertyMap.of();

    public Watermark() {
        this((WatermarkOptions) null);
    }

    public Watermark(String imageUrl) {
        this(new WatermarkOptions(imageUrl));
    }

    public Watermark(String[] texts) {
        this(new WatermarkOptions(texts));
    }

    public Watermark(WatermarkOptions customOptions) {
        if (customOptions != null) {
            this.options = Js.cast(JsObject.assign(this.options, customOptions));
        }

        this.watermarkStyle.set("position", "absolute");
        this.watermarkStyle.set("left", 0);
        this.watermarkStyle.set("top", 0);
        this.watermarkStyle.set("right", 0);
        this.watermarkStyle.set("bottom", 0);
        this.watermarkStyle.set("overflow", "hidden");
        this.watermarkStyle.set("pointer-events", "none");
        this.watermarkStyle.set("background-color", "transparent");
        this.watermarkStyle.set("background-repeat", "repeat");
        this.watermarkStyle.set("z-index", this.options.zIndex);

        this.container = WatermarkUtils.getContainer(this.options.container);

        this.watermarkWrapperElement = WatermarkUtils.getWatermarkWrapperElement();
        this.container.appendChild(this.watermarkWrapperElement);

        this.watermarkElement = WatermarkUtils.getWatermarkElement(this.options, this.watermarkStyle);
    }

    /**
     * 网页渲染水印
     */
    public void render() {
        HTMLElement.AttachShadowOptionsType shadowOptionsType = HTMLElement.AttachShadowOptionsType.create();
        shadowOptionsType.setMode("open");
        this.shadowRoot = this.watermarkWrapperElement.attachShadow(shadowOptionsType);
        if (this.shadowRoot != null) {
            this.shadowRoot.appendChild(this.watermarkElement);
        } else {
            this.watermarkWrapperElement.appendChild(this.watermarkElement);
        }
    }
}
