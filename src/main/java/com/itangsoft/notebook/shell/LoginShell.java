package com.itangsoft.notebook.shell;

import com.github.nalukit.nalu.client.component.AbstractShell;
import com.github.nalukit.nalu.client.component.annotation.Shell;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import elemental2.dom.HTMLDivElement;
import org.dominokit.domino.ui.elements.AnchorElement;
import org.dominokit.domino.ui.elements.DivElement;
import org.dominokit.domino.ui.elements.SectionElement;
import org.dominokit.domino.ui.menu.direction.DropDirection;
import org.dominokit.domino.ui.popover.Tooltip;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * Login Shell
 *
 * @author fushuwei
 */
@Shell(Routes.SHELL_LOGIN)
public class LoginShell extends AbstractShell<AppContext> {

    DivElement content = DominoElement.elements.div().css("login-page");

    @Override
    public void attachShell() {
        DominoElement.elements.body()
            .appendChild(content.appendChild(getHeader()).appendChild(getContent()).appendChild(getFooter()))
            .style().setOverFlow("auto");
    }

    public SectionElement getHeader() {
        return DominoElement.elements.section()
            .appendChild(DominoElement.elements.a()
                .appendChild(DominoElement.elements.img("images/logo_full.png")))
            .css("login-header");
    }

    public DivElement getContent() {
        return DominoElement.elements.div().setId(Slots.SELECTOR_LOGIN_CONTENT);
    }

    public SectionElement getFooter() {
        AnchorElement versionAnchor = DominoElement.elements.a().textContent("软件版本");
        // Define a tooltip on version anchor
        Tooltip.create(versionAnchor, DominoElement.elements.div()
                .appendChild(DominoElement.elements.div().textContent("软件版本：" + context.getApplicationVersion()))
                .appendChild(DominoElement.elements.div().textContent("发布日期：" + context.getApplicationBuildTimeStr()))
                .setCssProperty("text-align", "left")
                .element())
            .setPosition(DropDirection.RIGHT_MIDDLE);

        DivElement links = DominoElement.elements.div()
            .appendChild(DominoElement.elements.a("#", "_blank").textContent("公司简介"))
            .appendChild(DominoElement.elements.span().textContent("|"))
            .appendChild(DominoElement.elements.a("#", "_blank").textContent("诚聘英才"))
            .appendChild(DominoElement.elements.span().textContent("|"))
            .appendChild(DominoElement.elements.a("#", "_blank").textContent("联系我们"))
            .appendChild(DominoElement.elements.span().textContent("|"))
            .appendChild(DominoElement.elements.a("#", "_blank").textContent("意见反馈"))
            .appendChild(DominoElement.elements.span().textContent("|"))
            .appendChild(DominoElement.elements.a("#", "_blank").textContent("帮助中心"))
            .appendChild(DominoElement.elements.span().textContent("|"))
            .appendChild(versionAnchor)
            .css("login-footer-links");

        DivElement copyright = DominoElement.elements.div()
            .textContent("Copyright © 2024 樹 版权所有")
            .css("login-footer-copyright");

        return DominoElement.elements.section()
            .appendChild(links)
            .appendChild(copyright)
            .css("login-footer");
    }

    @Override
    public void detachShell() {
        content.remove();
    }
}
