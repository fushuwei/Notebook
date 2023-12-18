package com.itangsoft.notebook.layout;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import org.dominokit.domino.ui.icons.Icons;
import org.dominokit.domino.ui.utils.BaseDominoElement;
import org.dominokit.domino.ui.utils.DominoElement;
import org.dominokit.domino.ui.utils.TextNode;
import org.jboss.elemento.Elements;

/**
 * Application Layout - BottomToolbar
 *
 * @author fushuwei
 */
public class BottomToolbar extends BaseDominoElement<HTMLElement, BottomToolbar> {

    DominoElement<HTMLElement> root = DominoElement.of(Elements.section()).css("layout-bottom-toolbar");

    DominoElement<HTMLLIElement> faqBtn = DominoElement.of(Elements.li());
    DominoElement<HTMLLIElement> todoBtn = DominoElement.of(Elements.li());
    DominoElement<HTMLLIElement> terminalBtn = DominoElement.of(Elements.li());
    DominoElement<HTMLLIElement> logBtn = DominoElement.of(Elements.li());

    DominoElement<HTMLDivElement> faqPanel = DominoElement.div();
    DominoElement<HTMLDivElement> todoPanel = DominoElement.div();
    DominoElement<HTMLDivElement> terminalPanel = DominoElement.div();
    DominoElement<HTMLDivElement> logPanel = DominoElement.div();

    private BottomToolbar() {
        init(this);

        // 初始化操作按钮
        faqBtn.appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("常见问题")))
            .appendChild(Icons.ALL.list());
        todoBtn.appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("待办事项")))
            .appendChild(Icons.ALL.list());
        terminalBtn.appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("终端")))
            .appendChild(Icons.ALL.list());
        logBtn.appendChild(DominoElement.of(Elements.span()).appendChild(TextNode.of("日志")))
            .appendChild(Icons.ALL.list());

        // 初始化面板
        faqPanel.appendChild(DominoElement.div())
            .appendChild(DominoElement.div()).hide();
        todoPanel.appendChild(DominoElement.div())
            .appendChild(DominoElement.div()).hide();
        terminalPanel.appendChild(DominoElement.div())
            .appendChild(DominoElement.div()).hide();
        logPanel.appendChild(DominoElement.div())
            .appendChild(DominoElement.div()).hide();

        root.appendChild(DominoElement.div()
                .appendChild(DominoElement.div()
                    .appendChild(DominoElement.div()
                        .appendChild(DominoElement.of(Elements.ul())
                            .appendChild(faqBtn)
                            .appendChild(todoBtn)
                            .appendChild(terminalBtn)))
                    .appendChild(DominoElement.div()
                        .appendChild(DominoElement.of(Elements.ul())
                            .appendChild(logBtn)))
                    .css("lbt-toolbar"))
                .appendChild(DominoElement.div()
                    .appendChild(faqPanel)
                    .appendChild(todoPanel)
                    .appendChild(terminalPanel)
                    .appendChild(logPanel)
                    .css("lbt-panel"))
                .css("layout-bottom-toolbar-container"))
            .css("unable-select");
    }

    public static BottomToolbar create() {
        return new BottomToolbar();
    }

    @Override
    public HTMLElement element() {
        return root.element();
    }
}
