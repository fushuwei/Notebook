package com.itangsoft.notebook.views.layout;

import com.github.nalukit.nalu.client.component.annotation.Composite;
import com.github.nalukit.nalu.client.component.annotation.Composites;
import com.github.nalukit.nalu.client.component.annotation.Controller;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.base.BaseComponentController;
import com.itangsoft.notebook.views.layout.composite.navigation.NavigationComposite;
import com.itangsoft.notebook.views.layout.composite.workspace.WorkspaceComposite;

/**
 * Layout Controller
 *
 * @author fushuwei
 */
@Controller(route = Routes.ROUTE_HOME,
    selector = Slots.SELECTOR_LAYOUT_PAGE,
    componentInterface = ILayoutComponent.class,
    component = LayoutComponent.class)
@Composites({
    @Composite(
        name = "navigationComposite",
        compositeController = NavigationComposite.class,
        selector = Slots.SELECTOR_LAYOUT_NAVIGATION),
    @Composite(
        name = "workspaceComposite",
        compositeController = WorkspaceComposite.class,
        selector = Slots.SELECTOR_LAYOUT_WORKSPACE)})
public class LayoutController
    extends BaseComponentController<ILayoutComponent>
    implements ILayoutComponent.Controller {

    public LayoutController() {
    }
}
