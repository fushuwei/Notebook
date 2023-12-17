package com.itangsoft.notebook.component.applayout;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import org.dominokit.domino.ui.icons.Icon;
import org.dominokit.domino.ui.icons.Icons;
import org.dominokit.domino.ui.utils.BaseDominoElement;
import org.dominokit.domino.ui.utils.DominoElement;
import org.dominokit.domino.ui.utils.TextNode;
import org.jboss.elemento.Elements;

/**
 * Application Layout - RightSidebar
 *
 * @author fushuwei
 */
public class RightSidebar extends BaseDominoElement<HTMLElement, RightSidebar> {

    DominoElement<HTMLElement> root = DominoElement.of(Elements.aside()).css("layout-right-sidebar");

    DominoElement<HTMLLIElement> preferenceBtn = DominoElement.of(Elements.li());
    DominoElement<HTMLLIElement> databaseBtn = DominoElement.of(Elements.li());

    private RightSidebar() {
        init(this);

        // 初始化操作按钮
        preferenceBtn.appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("项")))
            .appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("选")))
            .appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("首")))
            .appendChild(Icons.ALL.settings());
        databaseBtn.appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("库")))
            .appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("据")))
            .appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("数")))
            .appendChild(Icon.create("table_chart"));

        root.appendChild(
                DominoElement.of(Elements.ul())
                    .appendChild(preferenceBtn)
                    .appendChild(databaseBtn))
            .css("unable-select");
    }

    public static RightSidebar create() {
        return new RightSidebar();
    }

    @Override
    public HTMLElement element() {
        return root.element();
    }
}
