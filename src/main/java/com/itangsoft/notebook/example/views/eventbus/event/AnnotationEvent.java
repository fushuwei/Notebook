package com.itangsoft.notebook.example.views.eventbus.event;

import org.gwtproject.event.shared.Event;

/**
 * 事件类, 用于模拟使用 @EventHandler 注解的示例
 *
 * @author fushuwei
 */
public class AnnotationEvent extends Event<AnnotationEvent.AnnotationEventHandler> {

    public static final Type<AnnotationEventHandler> TYPE = new Type<>();

    private String name;
    private String message;

    private AnnotationEvent() {
        super();
    }

    private AnnotationEvent(String name, String message) {
        super();
        this.name = name;
        this.message = message;
    }

    public static AnnotationEvent create() {
        return new AnnotationEvent();
    }

    public static AnnotationEvent create(String name, String message) {
        return new AnnotationEvent(name, message);
    }

    @Override
    public Type<AnnotationEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(AnnotationEventHandler handler) {
        handler.fireEvent(this);
    }

    public interface AnnotationEventHandler {
        void fireEvent(AnnotationEvent event);
    }

    public String getName() {
        return name;
    }

    public String getMessage() {
        return message;
    }
}
