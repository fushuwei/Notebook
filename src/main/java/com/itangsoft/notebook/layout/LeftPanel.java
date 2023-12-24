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

    private LeftPanel() {
        init(this);
    }

    public static LeftPanel create() {
        return new LeftPanel();
    }

    @Override
    public HTMLDivElement element() {
        return root.element();
    }
}
