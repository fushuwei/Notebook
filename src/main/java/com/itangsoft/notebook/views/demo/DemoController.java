package com.itangsoft.notebook.views.demo;

import com.github.nalukit.nalu.client.component.annotation.Controller;
import com.github.nalukit.nalu.client.event.NaluApplicationEvent;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.base.BaseComponentController;
import elemental2.dom.DomGlobal;

/**
 * Demo Controller
 *
 * @author fushuwei
 */
@Controller(route = Routes.ROUTE_DEMO,
    selector = Slots.SELECTOR_LAYOUT_CONTENT,
    componentInterface = IDemoComponent.class,
    component = DemoComponent.class)
public class DemoController
    extends BaseComponentController<IDemoComponent>
    implements IDemoComponent.Controller {

    NaluApplicationEvent myEvent;

    public DemoController() {
        // 创建事件
        myEvent = NaluApplicationEvent.create().event("MyEvent")
            .using("name", "MyEvent")
            .usingObject("remark", "你可以看到这条信息是因为你触发了该事件");
    }

    @Override
    public void eventbusOnClick() {
        // 注册事件
        // 注意：在 new Controller() 时，this.eventBus尚未初始化，所以注册事件的代码不能放在Controller的构造函数中
        this.eventBus.addHandler(NaluApplicationEvent.TYPE,
            e -> {
                if ("MyEvent".equals(e.getEvent())) {
                    String message = "我是自定义事件：" + e.getDataStore().get("name") + "，" +
                        e.getDataObjectStore().get("remark");
                    DomGlobal.alert(this.component.getTextArea().getValue());
                    this.component.getTextArea().setValue(this.component.getTextArea().getValue() + "\r\n" + message);
                }
            });

        // 触发事件
        this.eventBus.fireEvent(myEvent);
    }
}
