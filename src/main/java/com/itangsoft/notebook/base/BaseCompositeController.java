package com.itangsoft.notebook.base;

import com.github.nalukit.nalu.client.component.AbstractCompositeController;
import com.github.nalukit.nalu.client.component.IsCompositeComponent;
import com.itangsoft.notebook.AppContext;
import elemental2.dom.HTMLElement;

/**
 * Base Composite Controller
 *
 * @author fushuwei
 */
public class BaseCompositeController<V extends IsCompositeComponent<?, HTMLElement>>
    extends AbstractCompositeController<AppContext, V, HTMLElement>
    implements IsCompositeComponent.Controller {
}
