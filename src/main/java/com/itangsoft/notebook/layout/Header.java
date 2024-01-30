package com.itangsoft.notebook.layout;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;
import org.dominokit.domino.ui.grid.flex.FlexItem;
import org.dominokit.domino.ui.grid.flex.FlexLayout;
import org.dominokit.domino.ui.utils.BaseDominoElement;
import org.dominokit.domino.ui.utils.DominoElement;
import org.jboss.elemento.Elements;

/**
 * Application Layout - Header
 *
 * @author fushuwei
 */
public class Header extends BaseDominoElement<HTMLElement, Header> {

    DominoElement<HTMLElement> root = DominoElement.of(Elements.header()).css("layout-header");

    DominoElement<HTMLAnchorElement> logo = DominoElement.of(Elements.a()).css("layout-header-logo");
    DominoElement<HTMLAnchorElement> title = DominoElement.of(Elements.a().css("layout-header-title"));
    DominoElement<HTMLUListElement> toolbar = DominoElement.of(Elements.ul()).css("layout-header-toolbar");
    DominoElement<HTMLDivElement> avatar = DominoElement.div().css("layout-header-avatar");

    private Header() {
        init(this);

        root.appendChild(
            FlexLayout.create()
                .appendChild(FlexItem.create().appendChild(logo))
                .appendChild(FlexItem.create().appendChild(title)
                    .setFlex("1")
                    .setDisplay("flex")
                    .setAlignItems("center"))
                .appendChild(FlexItem.create().appendChild(toolbar).setMarginRight("30px"))
                .appendChild(FlexItem.create().appendChild(avatar))
                .css("layout-header-container"));
    }

    public static Header create() {
        return new Header();
    }

    @Override
    public HTMLElement element() {
        return root.element();
    }

    public DominoElement<HTMLAnchorElement> getLogo() {
        return logo;
    }

    public DominoElement<HTMLAnchorElement> getTitle() {
        return title;
    }

    public DominoElement<HTMLUListElement> getToolbar() {
        return toolbar;
    }

    public DominoElement<HTMLDivElement> getAvatar() {
        return avatar;
    }
}
