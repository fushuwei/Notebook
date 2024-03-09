package com.itangsoft.notebook.utils.watermark;

/**
 * 绘制图案信息
 *
 * @author fushuwei
 */
public class DrawPattern {

    /**
     * 绘制图案的地址
     */
    String url;

    /**
     * 绘制图案的宽度
     */
    double width;

    /**
     * 绘制图案的高度
     */
    double height;

    public DrawPattern(String url, double width, double height) {
        this.url = url;
        this.width = width;
        this.height = height;
    }
}
