package com.itangsoft.notebook.example.views.watermark;

import com.github.nalukit.nalu.client.component.annotation.Controller;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.base.BaseComponentController;

/**
 * Watermark Controller
 *
 * @author fushuwei
 */
@Controller(route = Routes.ROUTE_EXAMPLE_WATERMARK,
    selector = Slots.SELECTOR_EXAMPLE_WATERMARK_PAGE,
    componentInterface = IWatermarkComponent.class,
    component = WatermarkComponent.class)
public class WatermarkController
    extends BaseComponentController<IWatermarkComponent>
    implements IWatermarkComponent.Controller {
}
