package com.itangsoft.notebook.views.showcase.eventbus.handler;

import com.github.nalukit.nalu.client.handler.AbstractHandler;
import com.github.nalukit.nalu.client.handler.annotation.Handler;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.views.showcase.eventbus2.event.MyEvent;
import elemental2.dom.DomGlobal;

/**
 * 应用程序事件处理程序类
 * <p>
 * 该类用于处理 {@link com.github.nalukit.nalu.client.event.NaluApplicationEvent} 事件
 *
 * @author fushuwei
 */
@Handler
public class ApplicationEventHandler extends AbstractHandler<AppContext> {

    public ApplicationEventHandler() {
    }

    @Override
    public void bind() {
        this.eventBus.addHandler(MyEvent.TYPE, e -> {
            String message = "Hi，我是自定义事件：" + e.getName() + "，" + e.getMessage();
            DomGlobal.alert(message);
        });
    }
}
