package com.itangsoft.notebook.views.layout;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.layout.AppLayout;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.utils.DominoElement;
import org.jboss.elemento.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Layout Component
 *
 * @author fushuwei
 */
public class LayoutComponent
    extends AbstractComponent<ILayoutComponent.Controller, HTMLElement>
    implements ILayoutComponent {

    private static final Logger logger = LoggerFactory.getLogger(LayoutComponent.class);

    public LayoutComponent() {
        super();
    }

    @Override
    public void render() {
        AppLayout layout = AppLayout.create().show();

        // 设置页眉
        layout.setLogo(Elements.img("images/logo.png?ts=" + System.currentTimeMillis()).css().element());
        layout.setTitle("云笔记");
        // layout.setAvatar(this.context.getRealName());
        // layout.setVersion(this.context.getApplicationVersion());
        layout.getToolbar()
            .appendChild(DominoElement.of(Elements.li())
                .appendChild(DominoElement.of(Elements.a("#example/eventbus", "_blank")).textContent("事件总线")))
            .appendChild(DominoElement.of(Elements.li()).textContent("常用工具包"));

        // 设置左侧面板
        layout.getLeftPanel().setId(Slots.SELECTOR_LAYOUT_NAVIGATION);

        // 设置主面板
        layout.getContent().setId(Slots.SELECTOR_LAYOUT_WORKSPACE);

        initElement(layout.element());
    }
}
