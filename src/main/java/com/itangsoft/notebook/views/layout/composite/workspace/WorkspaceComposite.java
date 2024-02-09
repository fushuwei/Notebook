package com.itangsoft.notebook.views.layout.composite.workspace;

import com.github.nalukit.nalu.client.component.annotation.CompositeController;
import com.itangsoft.notebook.base.BaseCompositeController;
import com.itangsoft.notebook.service.FileServiceFactory;
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

    public WorkspaceComposite() {
    }

    public void showFile(String fileName) {
        FileServiceFactory.INSTANCE.getFileContent(fileName).onSuccess(response -> {
            try {
                this.component.loadFile(response);
            } catch (Exception e) {
                logger.error("Markdown文档加载失败", e);
            }
        }).onFailed(failedResponse -> {
            logger.error("Error: " + failedResponse.getStatusCode() + " - " +
                failedResponse.getStatusText() + " - ", failedResponse.getThrowable());
        }).send();
    }
}
