package com.itangsoft.notebook.views.showcase.eventbus2;

import com.github.nalukit.nalu.client.component.annotation.Controller;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.base.BaseComponentController;
import com.itangsoft.notebook.views.showcase.eventbus2.event.MyEvent;

/**
 * EventBus Controller
 *
 * @author fushuwei
 */
@Controller(route = "/showcase/eventbus2",
    selector = Slots.SELECTOR_LAYOUT_CONTENT,
    componentInterface = IEventBusComponent.class,
    component = EventBusComponent.class)
public class EventBusController
    extends BaseComponentController<IEventBusComponent>
    implements IEventBusComponent.Controller {

    int counter = 1;

    public EventBusController() {
    }

    @Override
    public void fireEvent() {
        // 触发事件
        this.eventBus.fireEvent(MyEvent.create("MyEvent", "你能看到这条信息是因为你触发了该事件"));
    }

    @Override
    public void clear() {
        counter = 1;
        this.component.getTextArea().setValue("");
    }
}
