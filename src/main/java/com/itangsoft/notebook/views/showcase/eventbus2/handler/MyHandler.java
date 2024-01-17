package com.itangsoft.notebook.views.showcase.eventbus2.handler;

import com.github.nalukit.nalu.client.handler.AbstractHandler;
import com.github.nalukit.nalu.client.handler.annotation.Handler;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.views.showcase.eventbus2.event.MyEvent;
import elemental2.dom.DomGlobal;

/**
 * MyHandler
 *
 * @author fushuwei
 */
@Handler
public class MyHandler extends AbstractHandler<AppContext> {

    public MyHandler() {
    }

    @Override
    public void bind() {
        this.eventBus.addHandler(MyEvent.TYPE, e -> {
            String message = "Hi，我是自定义事件：" + e.getName() + "，" + e.getMessage();
            DomGlobal.console.log(message);
        });
    }
}
