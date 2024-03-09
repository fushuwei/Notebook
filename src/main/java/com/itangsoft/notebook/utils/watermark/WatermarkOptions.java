package com.itangsoft.notebook.utils.watermark;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;

/**
 * 水印配置项
 *
 * @author fushuwei
 */
public class WatermarkOptions {

    /**
     * 需要显示水印的容器, 默认值: HTMLBodyElement
     */
    HTMLElement container = DomGlobal.document.body;

    /**
     * 图片地址, 当配置项中同时存在图片和文字时, 优先使用图片做水印
     */
    String imageUrl;

    /**
     * 文字内容, 数组类型表示支持多行水印
     */
    String[] texts = new String[]{};

    /**
     * 水印层级, 默认值: 99999
     */
    int zIndex = 99999;

    /**
     * 单个水印宽度, 默认值: 150
     */
    double width = 150;

    /**
     * 单个水印高度, 默认值: 100
     */
    double height = 100;

    /**
     * 水印透明度, 默认值: 0.15
     */
    double opacity = 0.15;

    /**
     * 旋转的角度, 默认值: -22
     */
    double rotate = -22;

    /**
     * 设置字体大小, 默认值: 16
     */
    int fontSize = 16;

    /**
     * 设置字体粗细
     */
    String fontWeight;

    /**
     * 设置字体样式, 可选值: normal | italic, 默认值: normal
     */
    String fontStyle = "normal";

    /**
     * 设置字体变体, 可选值: normal | small-caps, 默认值: normal
     */
    String fontVariant = "normal";

    /**
     * 设置字体颜色, 默认值: #000 (黑色)
     */
    String fontColor = "#000";

    /**
     * 设置水印文字的字体, 默认值: AlibabaPuHuiTi-3-55-Regular
     */
    String fontFamily = "AlibabaPuHuiTi-3-55-Regular";

    /**
     * 设置文字对齐方式, 默认值: center
     */
    String textAlign = "center";

    /**
     * 设置文本基线, 默认值: alphabetic
     */
    String textBaseline = "alphabetic";

    /**
     * 盲水印文本
     */
    String blindText;

    /**
     * 设置盲水印字体, 默认值: 16px normal
     */
    String blindFont = "16px normal";

    /**
     * 盲水印透明度, 默认值: 0.005
     */
    double blindOpacity = 0.005;

    /**
     * 水印之间的水平间距, 默认值: 100
     */
    double gapX = 100;

    /**
     * 水印之间的垂直间距, 默认值: 100
     */
    double gapY = 100;

    /**
     * 水印在画布上绘制的水平偏移量, 默认值: 0
     */
    double offsetX = 0;

    /**
     * 水印在画布上绘制的垂直偏移量, 默认值: 0
     */
    double offsetY = 0;

    /**
     * 显示模式, 可选值: repeat | interval, 默认值: interval
     */
    String showMode = "interval";

    /**
     * 是否开启保护模式, 默认值: true
     */
    boolean monitor = true;

    public WatermarkOptions() {
    }

    public WatermarkOptions(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public WatermarkOptions(String[] texts) {
        this.texts = texts;
    }
}
