package com.itangsoft.notebook.views.layout;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;

/**
 * Layout Component
 *
 * @author fushuwei
 */
public interface ILayoutComponent extends IsComponent<ILayoutComponent.Controller, HTMLElement> {

    void setRealName(String realName);

    void setApplicationVersion(String applicationVersion);

    interface Controller extends IsComponent.Controller {
    }
}
