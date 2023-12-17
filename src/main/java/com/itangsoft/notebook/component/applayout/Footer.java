package com.itangsoft.notebook.component.applayout;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.utils.BaseDominoElement;
import org.dominokit.domino.ui.utils.DominoElement;
import org.jboss.elemento.Elements;

/**
 * Application Layout - Footer
 *
 * @author fushuwei
 */
public class Footer extends BaseDominoElement<HTMLElement, Footer> {

    DominoElement<HTMLElement> root = DominoElement.of(Elements.footer()).css("layout-footer");

    DominoElement<HTMLDivElement> leftElement = DominoElement.div().css("layout-footer-left");
    DominoElement<HTMLDivElement> middleElement = DominoElement.div().css("layout-footer-middle");
    DominoElement<HTMLDivElement> rightElement = DominoElement.div().css("layout-footer-right");

    private Footer() {
        init(this);

        root.appendChild(
            DominoElement.div()
                .appendChild(leftElement)
                .appendChild(middleElement)
                .appendChild(rightElement)
                .css("layout-footer-container"));
    }

    public static Footer create() {
        return new Footer();
    }

    @Override
    public HTMLElement element() {
        return root.element();
    }

    public DominoElement<HTMLDivElement> getLeftElement() {
        return leftElement;
    }

    public DominoElement<HTMLDivElement> getMiddleElement() {
        return middleElement;
    }

    public DominoElement<HTMLDivElement> getRightElement() {
        return rightElement;
    }
}
