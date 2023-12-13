package com.itangsoft.notebook.views.login;

import com.github.nalukit.nalu.client.component.annotation.Controller;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.base.BaseComponentController;

/**
 * Login Controller
 *
 * @author fushuwei
 */
@Controller(route = Routes.ROUTE_LOGIN,
    selector = Slots.SELECTOR_LOGIN_CONTENT,
    componentInterface = ILoginComponent.class,
    component = LoginComponent.class)
public class LoginController
    extends BaseComponentController<ILoginComponent>
    implements ILoginComponent.Controller {

    public LoginController() {
    }

    @Override
    public void login(String username, String password, String captcha) {
        this.context.setUserId(username);
        this.context.setRealName(username);

        this.router.route(Routes.ROUTE_HOME);
    }
}
