package com.itangsoft.notebook.views.showcase.eventbus2.event;

import org.gwtproject.event.shared.Event;

/**
 * Click Event
 *
 * @author fushuwei
 */
public class ClickEvent extends Event<ClickEvent.ClickEventHandler> {

    public static final Type<ClickEventHandler> TYPE = new Type<>();

    private ClickEvent() {
        super();
    }

    public static ClickEvent create() {
        return new ClickEvent();
    }

    @Override
    public Type<ClickEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(ClickEventHandler handler) {
        handler.onClick(this);
    }

    public interface ClickEventHandler {
        void onClick(ClickEvent clickEvent);
    }
}
