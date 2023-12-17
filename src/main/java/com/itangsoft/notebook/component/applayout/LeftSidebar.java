package com.itangsoft.notebook.component.applayout;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import org.dominokit.domino.ui.icons.Icons;
import org.dominokit.domino.ui.utils.BaseDominoElement;
import org.dominokit.domino.ui.utils.DominoElement;
import org.dominokit.domino.ui.utils.TextNode;
import org.jboss.elemento.Elements;

/**
 * Application Layout - LeftSidebar
 *
 * @author fushuwei
 */
public class LeftSidebar extends BaseDominoElement<HTMLElement, LeftSidebar> {

    DominoElement<HTMLElement> root = DominoElement.of(Elements.aside()).css("layout-left-sidebar");

    DominoElement<HTMLLIElement> navigateBtn = DominoElement.of(Elements.li());
    DominoElement<HTMLLIElement> favoriteBtn = DominoElement.of(Elements.li());

    private LeftSidebar() {
        init(this);

        // 初始化操作按钮
        navigateBtn.appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("航")))
            .appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("导")))
            .appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("统")))
            .appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("系")))
            .appendChild(Icons.ALL.navigation())
            .css("selected");
        favoriteBtn.appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("藏")))
            .appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("收")))
            .appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("的")))
            .appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("我")))
            .appendChild(Icons.ALL.collections());

        root.appendChild(
                DominoElement.of(Elements.ul())
                    .appendChild(navigateBtn)
                    .appendChild(favoriteBtn))
            .css("unable-select");
    }

    public static LeftSidebar create() {
        return new LeftSidebar();
    }

    @Override
    public HTMLElement element() {
        return root.element();
    }
}
