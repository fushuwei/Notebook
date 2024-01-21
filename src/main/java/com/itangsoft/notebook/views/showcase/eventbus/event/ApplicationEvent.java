package com.itangsoft.notebook.views.showcase.eventbus.event;

import com.itangsoft.notebook.views.showcase.eventbus.handler.ApplicationEventHandler;
import org.gwtproject.event.shared.Event;

/**
 * 应用程序事件类
 *
 * @author fushuwei
 */
public class ApplicationEvent extends Event<ApplicationEventHandler> {

    @Override
    public Type<ApplicationEventHandler> getAssociatedType() {
        return null;
    }

    @Override
    protected void dispatch(ApplicationEventHandler handler) {

    }
}
