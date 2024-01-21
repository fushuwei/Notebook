package com.itangsoft.notebook.views.showcase.eventbus.handler;

import com.github.nalukit.nalu.client.handler.AbstractHandler;
import com.github.nalukit.nalu.client.handler.annotation.Handler;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.views.showcase.eventbus.event.CustomizeEvent;
import elemental2.dom.DomGlobal;

/**
 * 自定义事件处理程序类
 * <p>
 * 该类用于处理 {@link com.itangsoft.notebook.views.showcase.eventbus.event.CustomizeEvent} 事件
 *
 * @author fushuwei
 */
@Handler
public class CustomizeEventHandler extends AbstractHandler<AppContext> {

    public CustomizeEventHandler() {
    }

    @Override
    public void bind() {
        this.eventBus.addHandler(CustomizeEvent.TYPE, e -> {
            String message = "Hi，我是自定义事件：" + e.getName() + "，" + e.getMessage();
            DomGlobal.alert(message);
        });
    }
}
