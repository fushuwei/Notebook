package com.itangsoft.notebook.example.views.eventbus;

import com.github.nalukit.nalu.client.component.annotation.Controller;
import com.github.nalukit.nalu.client.event.NaluApplicationEvent;
import com.github.nalukit.nalu.client.event.annotation.EventHandler;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.base.BaseComponentController;
import com.itangsoft.notebook.example.views.eventbus.event.AnnotationEvent;
import com.itangsoft.notebook.example.views.eventbus.event.CustomizeEvent;

/**
 * EventBus Controller
 *
 * @author fushuwei
 */
@Controller(route = Routes.ROUTE_EXAMPLE_EVENTBUS,
    selector = Slots.SELECTOR_EXAMPLE_EVENTBUS_PAGE,
    componentInterface = IEventBusComponent.class,
    component = EventBusComponent.class)
public class EventBusController
    extends BaseComponentController<IEventBusComponent>
    implements IEventBusComponent.Controller {

    int counter1 = 1, counter2 = 1, counter3 = 1;

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
                if ("MyEvent1".equals(e.getEvent())) {
                    String message = "我是" + e.getDataStore().get("name") + "，" +
                        e.getDataObjectStore().get("message") + "，第 " + counter1 + " 次触发";

                    String currentValue = this.component.getTextArea1().getValue();
                    if (currentValue != null && !currentValue.isEmpty()) {
                        message = currentValue + "\r\n" + message;
                    }

                    this.component.getTextArea1().setValue(message);

                    counter1++;
                }
            });

        this.context.setTextArea2(this.component.getTextArea2());
        this.context.setCounter2(counter2);
    }

    @Override
    public void fireEvent1() {
        // 创建事件
        NaluApplicationEvent event = NaluApplicationEvent.create().event("MyEvent1")
            .using("name", "MyEvent1")
            .usingObject("message", "基于 NaluApplicationEvent 创建");

        // 触发事件
        this.eventBus.fireEvent(event);
    }

    @Override
    public void clear1() {
        counter1 = 1;
        this.component.getTextArea1().setValue("");
    }

    @Override
    public void fireEvent2() {
        // 创建事件
        CustomizeEvent event = CustomizeEvent.create("MyEvent2", "你能看到这条信息是因为你触发了该事件");

        // 触发事件
        this.eventBus.fireEvent(event);
    }

    @Override
    public void clear2() {
        // counter2 = 1;
        this.context.setCounter2(1);
        this.component.getTextArea2().setValue("");
    }

    @EventHandler
    public void registerEvent(AnnotationEvent event) {
        String message = "我是" + event.getName() + "，" + event.getMessage() + "，第 " + counter3 + " 次触发";

        String currentValue = this.component.getTextArea3().getValue();
        if (currentValue != null && !currentValue.isEmpty()) {
            message = currentValue + "\r\n" + message;
        }

        this.component.getTextArea3().setValue(message);

        counter3++;
    }

    @Override
    public void fireEvent3() {
        // 创建事件
        AnnotationEvent event = AnnotationEvent.create("MyEvent3", "你能看到这条信息是因为你触发了该事件");

        // 触发事件
        this.eventBus.fireEvent(event);
    }

    @Override
    public void clear3() {
        counter3 = 1;
        this.component.getTextArea3().setValue("");
    }
}
