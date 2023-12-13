package com.itangsoft.notebook.views.login;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLElement;
import elemental2.dom.KeyboardEvent;
import org.dominokit.domino.ui.button.Button;
import org.dominokit.domino.ui.carousel.Carousel;
import org.dominokit.domino.ui.carousel.Slide;
import org.dominokit.domino.ui.elements.DivElement;
import org.dominokit.domino.ui.forms.CheckBox;
import org.dominokit.domino.ui.forms.FieldsGrouping;
import org.dominokit.domino.ui.forms.PasswordBox;
import org.dominokit.domino.ui.forms.TextBox;
import org.dominokit.domino.ui.style.Color;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * Login Component
 *
 * @author fushuwei
 */
public class LoginComponent
    extends AbstractComponent<ILoginComponent.Controller, HTMLElement>
    implements ILoginComponent {

    public LoginComponent() {
        super();
    }

    @Override
    public void render() {
        DivElement content = DominoElement.elements.div()
            .appendChild(getCarousel())
            .appendChild(getForm())
            .css("login-content")
            .css("clearfix");

        initElement(content.element());
    }

    public DivElement getCarousel() {
        Carousel carousel = Carousel.create()
            .appendChild(Slide.create("https://user-images.githubusercontent.com/4270380/103492828-a06d1200-4e68-11eb-9287-ef830f575d3e.png"))
            .appendChild(Slide.create("https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-industry-light.png"))
            .startAutoSlide(5000);

        return DominoElement.elements.div().appendChild(carousel).css("login-carousel");
    }

    public DivElement getForm() {
        FieldsGrouping grouping = new FieldsGrouping();

        TextBox username = TextBox.create()
            .setPlaceholder("用户名/邮箱/手机号")
            .setRequiredErrorMessage("请输入用户名、邮箱或手机号")
            .groupBy(grouping)
            .setRequired(true)
            .setAutoValidation(true)
            .css("login-form-username");

        PasswordBox password = PasswordBox.create()
            .setPlaceholder("密码")
            .setRequiredErrorMessage("请输入密码")
            .groupBy(grouping)
            .setRequired(true)
            .setAutoValidation(true)
            .css("login-form-password");

        TextBox captcha = TextBox.create()
            .setPlaceholder("验证码")
            .setRequiredErrorMessage("请输入验证码")
            .groupBy(grouping)
            .setRequired(true)
            .setAutoValidation(true)
            .setMaxLength(4)
            .css("login-form-captcha");

        DivElement captchaDiv = DominoElement.elements.div()
            .appendChild(captcha)
            .appendChild(
                DominoElement.elements.img("https://auth.huaweicloud.com/authui/verifycode?index=1&alt=0.9009870104059011"))
            .css("login-form-captcha-img")
            .css("login-form-captcha-box");

        CheckBox rememberMe = CheckBox.create("记住我")
            .setColor(Color.BLUE.getName())
            .uncheck()
            .filledIn()
            .css("login-form-remember-me");

        DivElement rememberMeAndForgetPassword = DominoElement.elements.div()
            .appendChild(rememberMe)
            .appendChild(DominoElement.elements.a())
            .textContent("忘记密码")
            .css("login-form-forget-password")
            .css("login-form-remember-forget");

        Button okButton = Button.create("登 录")
            // .block()
            .addClickListener(e -> {
                if (grouping.validate().isValid()) {
                    getController().login(username.getValue(), password.getValue(), captcha.getValue());
                }
            }).css("login-form-submit");

        // Bind carriage return event
        username.addEventListener("keyup", e -> {
            if (e instanceof KeyboardEvent && "Enter".equalsIgnoreCase(((KeyboardEvent) e).code)) {
                if (grouping.validate().isValid()) {
                    getController().login(username.getValue(), password.getValue(), captcha.getValue());
                }
            }
        });
        password.addEventListener("keyup", e -> {
            if (e instanceof KeyboardEvent && "Enter".equalsIgnoreCase(((KeyboardEvent) e).code)) {
                if (grouping.validate().isValid()) {
                    getController().login(username.getValue(), password.getValue(), captcha.getValue());
                }
            }
        });
        captcha.addEventListener("keyup", e -> {
            if (e instanceof KeyboardEvent && "Enter".equalsIgnoreCase(((KeyboardEvent) e).code)) {
                if (grouping.validate().isValid()) {
                    getController().login(username.getValue(), password.getValue(), captcha.getValue());
                }
            }
        });

        return DominoElement.elements.div()
            .appendChild(DominoElement.elements.div()
                .appendChild(DominoElement.elements.h(1).textContent("用户登录"))
                .appendChild(DominoElement.elements.div()
                    .appendChild(username)
                    .appendChild(password)
                    .appendChild(captchaDiv)
                    .appendChild(rememberMeAndForgetPassword)
                    .appendChild(okButton)))
            .css("login-form");
    }
}
