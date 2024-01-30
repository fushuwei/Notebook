package com.itangsoft.notebook.shell;

import com.github.nalukit.nalu.client.component.AbstractShell;
import com.github.nalukit.nalu.client.component.annotation.Shell;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.layout.AppLayout;
import org.dominokit.domino.ui.utils.DominoElement;
import org.jboss.elemento.Elements;

/**
 * Layout Shell
 *
 * @author fushuwei
 */
@Shell(Routes.SHELL_LAYOUT)
public class LayoutShell extends AbstractShell<AppContext> {

    AppLayout layout = AppLayout.create().show();

    @Override
    public void attachShell() {
        // 设置页眉
        layout.setLogo(Elements.img("images/logo.png?ts=" + System.currentTimeMillis()).css().element());
        layout.setTitle("云笔记");
        layout.setAvatar(this.context.getRealName());
        layout.setVersion(this.context.getApplicationVersion());
        layout.getToolbar()
            .appendChild(DominoElement.of(Elements.li())
                .appendChild(DominoElement.of(Elements.a("#showcase/eventbus", "_blank")).textContent("事件总线")))
            .appendChild(DominoElement.of(Elements.li()).textContent("常用工具包"));

        // 设置左侧面板
        layout.getLeftPanel().setId(Slots.SELECTOR_LAYOUT_LEFT_PANEL);

        // 设置主面板
        layout.getContent().setId(Slots.SELECTOR_LAYOUT_CONTENT);
    }

    @Override
    public void detachShell() {
        layout.remove();
    }
}
