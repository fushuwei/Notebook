package com.itangsoft.notebook.layout;

import elemental2.dom.HTMLDivElement;
import org.dominokit.domino.ui.utils.BaseDominoElement;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * Application Layout - RightPanel
 *
 * @author fushuwei
 */
public class RightPanel extends BaseDominoElement<HTMLDivElement, RightPanel> {

    DominoElement<HTMLDivElement> root = DominoElement.div().css("layout-right-panel");

    DominoElement<HTMLDivElement> preferencePanel = DominoElement.div();
    DominoElement<HTMLDivElement> databasePanel = DominoElement.div();

    private RightPanel() {
        init(this);

        // 设置 Preference Panel
        preferencePanel.appendChild(DominoElement.div())
            .appendChild(DominoElement.div()).hide();

        // 设置 Database Panel
        databasePanel.appendChild(DominoElement.div())
            .appendChild(DominoElement.div()).hide();

        root.appendChild(preferencePanel)
            .appendChild(databasePanel);
    }

    public static RightPanel create() {
        return new RightPanel();
    }

    @Override
    public HTMLDivElement element() {
        return root.element();
    }
}
