package com.itangsoft.notebook.shell;

import com.github.nalukit.nalu.client.component.AbstractShell;
import com.github.nalukit.nalu.client.component.annotation.Shell;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import elemental2.dom.HTMLDivElement;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * Showcase Shell
 *
 * @author fushuwei
 */
@Shell(Routes.SHELL_SHOWCASE)
public class ShowcaseShell extends AbstractShell<AppContext> {

    DominoElement<HTMLDivElement> root = DominoElement.div()
        .setId(Slots.SELECTOR_LAYOUT_CONTENT)
        .css("showcase");

    @Override
    public void attachShell() {
        DominoElement.body().appendChild(root.element());
    }

    @Override
    public void detachShell() {
        root.remove();
    }
}
