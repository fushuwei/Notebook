package com.itangsoft.notebook.views.login;

import com.github.nalukit.nalu.client.component.annotation.Controller;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.base.BaseComponentController;
import org.dominokit.domino.ui.notifications.Notification;

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
        if ("admin".equals(username) && "admin.123".equals(password)) {
            this.context.setUserId(username);
            this.context.setRealName(username);

            this.router.route(Routes.ROUTE_HOME);

            return;
        }

        Notification.create("用户名或密码错误")
            .setPosition(Notification.TOP_CENTER)
            .setClosable(false)
            .show();
    }
}
