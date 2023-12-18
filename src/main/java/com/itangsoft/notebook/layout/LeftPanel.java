package com.itangsoft.notebook.layout;

import elemental2.dom.HTMLDivElement;
import org.dominokit.domino.ui.utils.BaseDominoElement;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * Application Layout - LeftPanel
 *
 * @author fushuwei
 */
public class LeftPanel extends BaseDominoElement<HTMLDivElement, LeftPanel> {

    DominoElement<HTMLDivElement> root = DominoElement.div().css("layout-left-panel");

    DominoElement<HTMLDivElement> navigatePanel = DominoElement.div();
    DominoElement<HTMLDivElement> favoritePanel = DominoElement.div();

    private LeftPanel() {
        init(this);

        // 设置 Navigate Panel
        navigatePanel.appendChild(DominoElement.div())
            .appendChild(DominoElement.div());

        // 设置 Favorite Panel
        favoritePanel.appendChild(DominoElement.div())
            .appendChild(DominoElement.div()).hide();

        root.appendChild(navigatePanel)
            .appendChild(favoritePanel);
    }

    public static LeftPanel create() {
        return new LeftPanel();
    }

    @Override
    public HTMLDivElement element() {
        return root.element();
    }
}
