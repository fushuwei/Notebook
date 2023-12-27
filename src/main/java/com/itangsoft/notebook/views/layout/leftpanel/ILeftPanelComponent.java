package com.itangsoft.notebook.views.layout.leftpanel;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;

/**
 * LeftPanel Component
 *
 * @author fushuwei
 */
public interface ILeftPanelComponent extends IsComponent<ILeftPanelComponent.Controller, HTMLElement> {

    interface Controller extends IsComponent.Controller {

        void openFile(String fileName);
    }
}
