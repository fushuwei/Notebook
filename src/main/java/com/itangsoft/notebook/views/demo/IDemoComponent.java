package com.itangsoft.notebook.views.demo;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;

/**
 * Demo Component
 *
 * @author fushuwei
 */
public interface IDemoComponent extends IsComponent<IDemoComponent.Controller, HTMLElement> {

    interface Controller extends IsComponent.Controller {
    }
}
