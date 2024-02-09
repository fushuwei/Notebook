package com.itangsoft.notebook.views.layout.composite.workspace;

import com.github.nalukit.nalu.client.component.IsCompositeComponent;
import elemental2.dom.HTMLElement;

/**
 * Workspace Component
 *
 * @author fushuwei
 */
public interface IWorkspaceComponent
    extends IsCompositeComponent<IWorkspaceComponent.Controller, HTMLElement> {

    void loadFile(String content);

    interface Controller extends IsCompositeComponent.Controller {
    }
}
