package com.itangsoft.notebook.views.layout.composite.workspace;

import com.github.nalukit.nalu.client.component.annotation.AcceptParameter;
import com.github.nalukit.nalu.client.component.annotation.CompositeController;
import com.itangsoft.notebook.base.BaseCompositeController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Workspace Controller
 *
 * @author fushuwei
 */
@CompositeController(componentInterface = IWorkspaceComponent.class,
    component = WorkspaceComponent.class)
public class WorkspaceComposite
    extends BaseCompositeController<IWorkspaceComponent>
    implements IWorkspaceComponent.Controller {

    private static final Logger logger = LoggerFactory.getLogger(WorkspaceComposite.class);

    String fileName;

    public WorkspaceComposite() {
    }

    @AcceptParameter("fileName")
    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileName() {
        return fileName;
    }
}
