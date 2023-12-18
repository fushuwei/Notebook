package com.itangsoft.notebook.layout;

import elemental2.dom.HTMLDivElement;
import org.dominokit.domino.ui.utils.BaseDominoElement;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * Application Layout - Content
 *
 * @author fushuwei
 */
public class Content extends BaseDominoElement<HTMLDivElement, Content> {

    DominoElement<HTMLDivElement> root = DominoElement.div().css("layout-content");

    private Content() {
        init(this);
    }

    public static Content create() {
        return new Content();
    }

    @Override
    public HTMLDivElement element() {
        return root.element();
    }
}
