package com.itangsoft.notebook.shell;

import com.github.nalukit.nalu.client.component.AbstractShell;
import com.github.nalukit.nalu.client.component.annotation.Shell;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import elemental2.dom.HTMLDivElement;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * Layout Shell
 *
 * @author fushuwei
 */
@Shell(Routes.SHELL_LAYOUT)
public class LayoutShell extends AbstractShell<AppContext> {

    DominoElement<HTMLDivElement> root = DominoElement.div()
        .setId(Slots.SELECTOR_LAYOUT_PAGE).setWidth("100%").setHeight("100%");

    @Override
    public void attachShell() {
        DominoElement.body().appendChild(root);
    }

    @Override
    public void detachShell() {
        root.remove();
    }
}
