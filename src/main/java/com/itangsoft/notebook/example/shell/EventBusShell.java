package com.itangsoft.notebook.example.shell;

import com.github.nalukit.nalu.client.component.AbstractShell;
import com.github.nalukit.nalu.client.component.annotation.Shell;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import elemental2.dom.HTMLDivElement;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * EventBus Shell
 *
 * @author fushuwei
 */
@Shell(Routes.SHELL_EXAMPLE_EVENTBUS)
public class EventBusShell extends AbstractShell<AppContext> {

    DominoElement<HTMLDivElement> root = DominoElement.div()
        .setId(Slots.SELECTOR_EXAMPLE_EVENTBUS_PAGE)
        .css("example");

    @Override
    public void attachShell() {
        DominoElement.body().appendChild(root.element());
    }

    @Override
    public void detachShell() {
        root.remove();
    }
}
