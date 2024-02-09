package com.itangsoft.notebook.views.layout.composite.navigation;

import com.github.nalukit.nalu.client.component.annotation.CompositeController;
import com.itangsoft.notebook.base.BaseCompositeController;
import com.itangsoft.notebook.event.MenuChangeEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Navigation Controller
 *
 * @author fushuwei
 */
@CompositeController(componentInterface = INavigationComponent.class,
    component = NavigationComponent.class)
public class NavigationComposite
    extends BaseCompositeController<INavigationComponent>
    implements INavigationComponent.Controller {

    private static final Logger logger = LoggerFactory.getLogger(NavigationComposite.class);

    public NavigationComposite() {
    }

    @Override
    public void onMenuClick(String fileName) {
        this.eventBus.fireEvent(MenuChangeEvent.create(null, fileName));
    }
}
