package com.itangsoft.notebook.utils.watermark;

import elemental2.dom.MutationObserver;

/**
 * Mutation Observer Factory
 *
 * @author fushuwei
 */
public class MutationObserverFactory {

    /**
     * 获取 MutationObserver
     *
     * @return MutationObserver
     */
    public static MutationObserver create(MutationObserver.MutationObserverCallbackFn callback) {
        return new MutationObserver(callback);
    }

    /**
     * 销毁 MutationObserver
     */
    public static void destroy(MutationObserver mutationObserver) {
        if (mutationObserver != null) {
            mutationObserver.takeRecords();
            mutationObserver.disconnect();
        }
    }
}
