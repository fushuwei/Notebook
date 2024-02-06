package com.itangsoft.notebook.views.layout;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;

/**
 * Layout Component
 *
 * @author fushuwei
 */
public interface ILayoutComponent extends IsComponent<ILayoutComponent.Controller, HTMLElement> {

    interface Controller extends IsComponent.Controller {
    }
}
