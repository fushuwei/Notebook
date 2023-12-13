package com.itangsoft.notebook.shell;

import com.github.nalukit.nalu.client.component.AbstractShell;
import com.github.nalukit.nalu.client.component.annotation.Shell;
import com.itangsoft.notebook.AppContext;
import org.dominokit.domino.ui.layout.AppLayout;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * Demo Shell
 *
 * @author fushuwei
 */
@Shell("demo")
public class DemoShell extends AbstractShell<AppContext> {

    AppLayout layout = AppLayout.create("Demo 管理系统");

    @Override
    public void attachShell() {
        DominoElement.elements.body().appendChild(layout);
    }

    @Override
    public void detachShell() {
        layout.remove();
    }
}
