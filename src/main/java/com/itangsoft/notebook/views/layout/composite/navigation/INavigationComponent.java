package com.itangsoft.notebook.views.layout.composite.navigation;

import com.github.nalukit.nalu.client.component.IsCompositeComponent;
import elemental2.dom.HTMLElement;

/**
 * Navigation Component
 *
 * @author fushuwei
 */
public interface INavigationComponent
    extends IsCompositeComponent<INavigationComponent.Controller, HTMLElement> {

    interface Controller extends IsCompositeComponent.Controller {
        void onMenuClick(String fileName);
    }
}
