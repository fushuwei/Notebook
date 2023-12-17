/*
 * Copyright © 2019 Dominokit
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.itangsoft.notebook.component.layout;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;
import org.dominokit.domino.ui.grid.flex.FlexItem;
import org.dominokit.domino.ui.grid.flex.FlexLayout;
import org.dominokit.domino.ui.utils.BaseDominoElement;
import org.dominokit.domino.ui.utils.DominoElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.ul;

/**
 * A component that is part of the {@link Layout} header
 */
public class NavigationBar extends BaseDominoElement<HTMLElement, NavigationBar> {

    private DominoElement<HTMLElement> navBar = DominoElement.of(nav()).css("navbar").css("ls-closed");

    DominoElement<HTMLDivElement> navBarHeader = DominoElement.div().css("navbar-header");

    private FlexLayout container = FlexLayout.create().css("container-fluid");

    private final FlexItem<HTMLDivElement> menuToggleItem = FlexItem.create().css("menu-toggle");
    private final FlexItem<HTMLDivElement> logoItem = FlexItem.create();
    private final FlexItem<HTMLDivElement> titleItem = FlexItem.create();
    private final FlexItem<HTMLDivElement> actionBarItem= FlexItem.create();

    DominoElement<HTMLAnchorElement> menu = DominoElement.of(a()).css("bars");
    DominoElement<HTMLAnchorElement> title = DominoElement.of(a()).css("navbar-brand");
    DominoElement<HTMLUListElement> topBar = DominoElement.of(ul()).css("nav").css("navbar-nav").css("navbar-right");
    DominoElement<HTMLDivElement> topBarContainer = DominoElement.div().appendChild(topBar);

    public NavigationBar() {
        container
            .appendChild(menuToggleItem.appendChild(menu))
            .appendChild(logoItem)
            .appendChild(titleItem.setFlexGrow(1).appendChild(title))
            .appendChild(actionBarItem.appendChild(topBarContainer));

        navBar.appendChild(navBarHeader.appendChild(container));
        init();
    }

    void init() {
        init(this);
    }

    public static NavigationBar create() {
        return new NavigationBar();
    }

    @Override
    public HTMLElement element() {
        return navBar.element();
    }

    public FlexItem<HTMLDivElement> getMenuToggleItem() {
        return menuToggleItem;
    }

    public FlexItem<HTMLDivElement> getLogoItem() {
        return logoItem;
    }
}
