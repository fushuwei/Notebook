package com.itangsoft.notebook.views.layout.composite.workspace;

import com.github.nalukit.nalu.client.component.annotation.CompositeController;
import com.itangsoft.notebook.base.BaseCompositeController;
import com.itangsoft.notebook.event.MenuClickEvent;
import com.itangsoft.notebook.model.Menu;
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

    @Override
    public void start() {
        // 注册菜单点击事件
        this.eventBus.addHandler(MenuClickEvent.TYPE, event -> {
            String oldFileName = event.getOldMenu() != null ? event.getOldMenu().getMarkdown() : null;
            String newFileName = event.getNewMenu() != null ? event.getNewMenu().getMarkdown() : null;
            if (newFileName != null && !newFileName.equals(oldFileName)) {
                this.openFile(newFileName);
                this.context.setCurrentMenu(event.getNewMenu());
            }
        });
    }

    @Override
    public void activate() {
        // 重新加载页面时显示上一次访问的菜单
        Menu menu = this.context.getCurrentMenu();
        if (menu != null) {
            this.eventBus.fireEvent(MenuClickEvent.create(null, menu));
        }
    }

    public void openFile(String fileName) {
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
