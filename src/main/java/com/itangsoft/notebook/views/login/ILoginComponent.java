package com.itangsoft.notebook.views.login;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;

/**
 * Login Component
 *
 * @author fushuwei
 */
public interface ILoginComponent extends IsComponent<ILoginComponent.Controller, HTMLElement> {

    interface Controller extends IsComponent.Controller {
        void login(String username, String password, String captcha);
    }
}
