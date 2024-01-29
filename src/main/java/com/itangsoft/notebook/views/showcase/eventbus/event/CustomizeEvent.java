package com.itangsoft.notebook.views.showcase.eventbus.event;

import org.gwtproject.event.shared.Event;

/**
 * 事件类, 用于模拟自定义 Event 和 Handler 类的示例
 *
 * @author fushuwei
 */
public class CustomizeEvent extends Event<CustomizeEvent.CustomizeEventHandler> {

    public static final Type<CustomizeEventHandler> TYPE = new Type<>();

    private String name;
    private String message;

    private CustomizeEvent() {
        super();
    }

    private CustomizeEvent(String name, String message) {
        super();
        this.name = name;
        this.message = message;
    }

    public static CustomizeEvent create() {
        return new CustomizeEvent();
    }

    public static CustomizeEvent create(String name, String message) {
        return new CustomizeEvent(name, message);
    }

    @Override
    public Type<CustomizeEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(CustomizeEventHandler handler) {
        handler.fireEvent(this);
    }

    public interface CustomizeEventHandler {
        void fireEvent(CustomizeEvent event);
    }

    public String getName() {
        return name;
    }

    public String getMessage() {
        return message;
    }
}
