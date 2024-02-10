package com.itangsoft.notebook.views.layout.composite.navigation;

import com.github.nalukit.nalu.client.component.IsCompositeComponent;
import com.itangsoft.notebook.model.Menu;
import elemental2.dom.HTMLElement;

/**
 * Navigation Component
 *
 * @author fushuwei
 */
public interface INavigationComponent
    extends IsCompositeComponent<INavigationComponent.Controller, HTMLElement> {

    interface Controller extends IsCompositeComponent.Controller {
        void onMenuClick(Menu menu);

        Menu getLastClickMenu();
    }
}
