package com.itangsoft.notebook.views.showcase.eventbus;

import com.github.nalukit.nalu.client.component.annotation.Controller;
import com.github.nalukit.nalu.client.event.NaluApplicationEvent;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.base.BaseComponentController;

/**
 * EventBus Controller
 *
 * @author fushuwei
 */
@Controller(route = Routes.ROUTE_EVENTBUS,
    selector = Slots.SELECTOR_LAYOUT_CONTENT,
    componentInterface = IEventBusComponent.class,
    component = EventBusComponent.class)
public class EventBusController
    extends BaseComponentController<IEventBusComponent>
    implements IEventBusComponent.Controller {

    int counter = 1;

    public EventBusController() {
    }

    /**
     * 注册事件
     * <p>
     * 注意：在 new Controller() 时，this.eventBus尚未初始化，所以注册事件的代码不能放在Controller的构造函数中
     */
    @Override
    public void start() {
        this.eventBus.addHandler(NaluApplicationEvent.TYPE,
            e -> {
                if ("MyEvent".equals(e.getEvent())) {
                    String message = "Hi，我是自定义事件：" + e.getDataStore().get("name") + "，" +
                        e.getDataObjectStore().get("message") + " " + counter + " 次";

                    String currentValue = this.component.getTextArea1().getValue();
                    if (currentValue != null && !currentValue.isEmpty()) {
                        message = currentValue + "\r\n" + message;
                    }

                    this.component.getTextArea1().setValue(message);

                    counter++;
                }
            });
    }

    @Override
    public void fireEvent1() {
        // 创建事件
        NaluApplicationEvent myEvent = NaluApplicationEvent.create().event("MyEvent")
            .using("name", "MyEvent")
            .usingObject("message", "你能看到这条信息是因为你触发了该事件");

        // 触发事件
        this.eventBus.fireEvent(myEvent);
    }

    @Override
    public void clear1() {
        counter = 1;
        this.component.getTextArea1().setValue("");
    }

    @Override
    public void fireEvent2() {

    }

    @Override
    public void clear2() {

    }

    @Override
    public void fireEvent3() {

    }

    @Override
    public void clear3() {

    }
}
