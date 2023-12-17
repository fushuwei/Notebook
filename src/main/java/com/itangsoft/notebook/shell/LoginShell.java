package com.itangsoft.notebook.shell;

import com.github.nalukit.nalu.client.component.AbstractShell;
import com.github.nalukit.nalu.client.component.annotation.Shell;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.popover.PopupPosition;
import org.dominokit.domino.ui.popover.Tooltip;
import org.dominokit.domino.ui.utils.DominoElement;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;

/**
 * Login Shell
 *
 * @author fushuwei
 */
@Shell(Routes.SHELL_LOGIN)
public class LoginShell extends AbstractShell<AppContext> {

    DominoElement<HTMLDivElement> content = DominoElement.div().css("login-page");

    @Override
    public void attachShell() {
        DominoElement.body().appendChild(
            content.appendChild(getHeader()).appendChild(getContent()).appendChild(getFooter()));
    }

    public DominoElement<HTMLElement> getHeader() {
        return DominoElement.of(Elements.section())
            .appendChild(DominoElement.of(Elements.a())
                .appendChild(DominoElement.of(Elements.img("images/logo_full.png"))))
            .css("login-header");
    }

    public DominoElement<HTMLDivElement> getContent() {
        return DominoElement.div().setId(Slots.SELECTOR_LOGIN_CONTENT);
    }

    public DominoElement<HTMLElement> getFooter() {
        HTMLContainerBuilder<HTMLAnchorElement> versionAnchor = Elements.a().textContent("软件版本");
        // Define a tooltip on version anchor
        Tooltip.create(versionAnchor, DominoElement.div()
                .appendChild(DominoElement.div().textContent("软件版本：" + context.getApplicationVersion()))
                .appendChild(DominoElement.div().textContent("发布日期：" + context.getApplicationBuildTimeStr()))
                .setCssProperty("text-align", "left")
                .element())
            .position(PopupPosition.RIGHT);

        DominoElement<HTMLDivElement> links = DominoElement.div()
            .appendChild(Elements.a("#", "_blank").textContent("公司简介"))
            .appendChild(Elements.span().textContent("|"))
            .appendChild(Elements.a("#", "_blank").textContent("诚聘英才"))
            .appendChild(Elements.span().textContent("|"))
            .appendChild(Elements.a("#", "_blank").textContent("联系我们"))
            .appendChild(Elements.span().textContent("|"))
            .appendChild(Elements.a("#", "_blank").textContent("意见反馈"))
            .appendChild(Elements.span().textContent("|"))
            .appendChild(Elements.a("#", "_blank").textContent("帮助中心"))
            .appendChild(Elements.span().textContent("|"))
            .appendChild(versionAnchor)
            .css("login-footer-links");

        DominoElement<HTMLDivElement> copyright = DominoElement.div()
            .textContent("Copyright © 2023 MOCHOUSOFT.COM 版权所有")
            .css("login-footer-copyright");

        return DominoElement.of(Elements.section())
            .appendChild(links)
            .appendChild(copyright)
            .css("login-footer");
    }

    @Override
    public void detachShell() {
        content.remove();
    }
}
