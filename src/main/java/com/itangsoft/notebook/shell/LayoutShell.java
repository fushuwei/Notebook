package com.itangsoft.notebook.shell;

import com.github.nalukit.nalu.client.component.AbstractShell;
import com.github.nalukit.nalu.client.component.annotation.Shell;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.Routes;
import org.dominokit.domino.ui.layout.AppLayout;

import java.util.Objects;

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
        // layout.setLogo(ElementsFactory.elements.img("images/logo.png?ts=" + System.currentTimeMillis()).css().element());
        // layout.setTitle("北京大学·数据中台");
        // layout.setAvatar("", Objects.nonNull(this.context.getRealName()) ? this.context.getRealName().substring(this.context.getRealName().length() - 1) : " ");
        // layout.setVersion(this.context.getApplicationVersion());
    }

    @Override
    public void detachShell() {
        layout.remove();
    }
}
