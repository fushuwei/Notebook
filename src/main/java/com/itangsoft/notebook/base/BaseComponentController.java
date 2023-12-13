package com.itangsoft.notebook.base;

import com.github.nalukit.nalu.client.component.AbstractComponentController;
import com.github.nalukit.nalu.client.component.IsComponent;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.Routes;
import elemental2.dom.HTMLElement;

/**
 * Base Component Controller
 *
 * @author fushuwei
 */
public class BaseComponentController<V extends IsComponent<?, HTMLElement>>
    extends AbstractComponentController<AppContext, V, HTMLElement>
    implements IsComponent.Controller {

    protected void checkToken(ControllerLoader loader) {
        if (this.context.getUserId() == null) {
            this.router.route(Routes.ROUTE_LOGIN);
        } else {
            loader.continueLoading();
        }
    }
}
