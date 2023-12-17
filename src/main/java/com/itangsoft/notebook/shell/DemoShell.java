package com.itangsoft.notebook.shell;

import com.github.nalukit.nalu.client.component.AbstractShell;
import com.github.nalukit.nalu.client.component.annotation.Shell;
import com.itangsoft.notebook.AppContext;
import org.dominokit.domino.ui.layout.Layout;

/**
 * Demo Shell
 *
 * @author fushuwei
 */
@Shell("demo")
public class DemoShell extends AbstractShell<AppContext> {

    Layout layout = Layout.create("Demo 管理系统").show();

    @Override
    public void attachShell() {
    }

    @Override
    public void detachShell() {
        layout.remove();
    }
}
