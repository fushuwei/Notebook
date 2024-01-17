package com.itangsoft.notebook.views.showcase.eventbus2.event;

import org.gwtproject.event.shared.Event;

/**
 * MyEvent
 *
 * @author fushuwei
 */
public class MyEvent extends Event<MyEvent.MyEventHandler> {

    public static final Type<MyEventHandler> TYPE = new Type<>();

    private String name;
    private String message;

    private MyEvent() {
        super();
    }

    private MyEvent(String name, String message) {
        super();
        this.name = name;
        this.message = message;
    }

    public static MyEvent create() {
        return new MyEvent();
    }

    public static MyEvent create(String name, String message) {
        return new MyEvent(name, message);
    }

    @Override
    public Type<MyEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(MyEventHandler handler) {
        handler.onClick(this);
    }

    public interface MyEventHandler {
        void onClick(MyEvent event);
    }

    public String getName() {
        return name;
    }

    public String getMessage() {
        return message;
    }
}
