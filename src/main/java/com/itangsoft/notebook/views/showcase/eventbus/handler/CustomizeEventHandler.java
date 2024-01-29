package com.itangsoft.notebook.views.showcase.eventbus.handler;

import com.github.nalukit.nalu.client.handler.AbstractHandler;
import com.github.nalukit.nalu.client.handler.annotation.Handler;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.views.showcase.eventbus.event.CustomizeEvent;

/**
 * 事件处理程序类
 * <p>
 * 该类用于注册 {@link com.itangsoft.notebook.views.showcase.eventbus.event.CustomizeEvent} 事件的处理程序
 *
 * @author fushuwei
 */
@Handler
public class CustomizeEventHandler extends AbstractHandler<AppContext> {

    public CustomizeEventHandler() {
    }

    @Override
    public void bind() {
        // 注册事件的处理程序
        this.eventBus.addHandler(CustomizeEvent.TYPE, e -> {
            String message = "我是" + e.getName() + "，" + e.getMessage() + "，第 " + this.context.getCounter2() + " 次触发";

            String currentValue = this.context.getTextArea2().getValue();
            if (currentValue != null && !currentValue.isEmpty()) {
                message = currentValue + "\r\n" + message;
            }

            this.context.getTextArea2().setValue(message);

            this.context.setCounter2(this.context.getCounter2() + 1);
        });
    }
}
