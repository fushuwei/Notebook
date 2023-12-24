package com.itangsoft.notebook.layout;

import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.utils.BaseDominoElement;
import org.dominokit.domino.ui.utils.DominoElement;
import org.jboss.elemento.Elements;

/**
 * Application Layout - Body
 *
 * @author fushuwei
 */
public class Body extends BaseDominoElement<HTMLElement, Body> {

    DominoElement<HTMLElement> root = DominoElement.of(Elements.section()).css("layout-body");

    DominoElement<HTMLElement> mainContainer = DominoElement.of(Elements.section()).css("layout-body-main");

    LeftPanel leftPanel = LeftPanel.create();
    Content content = Content.create();
    RightPanel rightPanel = RightPanel.create();


    private Body() {
        init(this);

        root.appendChild(mainContainer
            .appendChild(DominoElement.div()
                .appendChild(leftPanel)
                .appendChild(content)
                .appendChild(rightPanel)
                .css("layout-middle-container")));
    }

    public static Body create() {
        return new Body();
    }

    @Override
    public HTMLElement element() {
        return root.element();
    }
}
