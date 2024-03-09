package com.itangsoft.notebook.utils.watermark;

/**
 * 常量类
 *
 * @author fushuwei
 */
public class Constant {

    /**
     * 带有 MONITORED_ATTRIBUTE_NAME 属性的元素将被 MutationObserver 监视
     */
    public static final String MONITORED_ATTRIBUTE_NAME = "watermark-uuid";
    public static final String MONITORED_ATTRIBUTE_VALUE = WatermarkUtils.getRandomId();
}
