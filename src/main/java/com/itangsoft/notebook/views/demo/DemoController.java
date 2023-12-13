package com.itangsoft.notebook.views.demo;

import com.github.nalukit.nalu.client.component.annotation.Controller;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.base.BaseComponentController;

/**
 * Demo Controller
 *
 * @author fushuwei
 */
@Controller(route = "/demo",
    selector = Slots.SELECTOR_LAYOUT_CONTENT,
    componentInterface = IDemoComponent.class,
    component = DemoComponent.class)
public class DemoController
    extends BaseComponentController<IDemoComponent>
    implements IDemoComponent.Controller {

    public DemoController() {
    }
}
