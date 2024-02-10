package com.itangsoft.notebook.views.layout;

import com.github.nalukit.nalu.client.component.annotation.Composite;
import com.github.nalukit.nalu.client.component.annotation.Composites;
import com.github.nalukit.nalu.client.component.annotation.Controller;
import com.github.nalukit.nalu.client.event.annotation.EventHandler;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.base.BaseComponentController;
import com.itangsoft.notebook.event.MenuClickEvent;
import com.itangsoft.notebook.views.layout.composite.navigation.NavigationComposite;
import com.itangsoft.notebook.views.layout.composite.workspace.WorkspaceComposite;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Layout Controller
 *
 * @author fushuwei
 */
@Controller(route = Routes.ROUTE_HOME,
    selector = Slots.SELECTOR_LAYOUT_PAGE,
    componentInterface = ILayoutComponent.class,
    component = LayoutComponent.class)
@Composites({
    @Composite(
        name = "navigationComposite",
        compositeController = NavigationComposite.class,
        selector = Slots.SELECTOR_LAYOUT_NAVIGATION),
    @Composite(
        name = "workspaceComposite",
        compositeController = WorkspaceComposite.class,
        selector = Slots.SELECTOR_LAYOUT_WORKSPACE)})
public class LayoutController
    extends BaseComponentController<ILayoutComponent>
    implements ILayoutComponent.Controller {

    private static final Logger logger = LoggerFactory.getLogger(LayoutController.class);

    public LayoutController() {
    }

    @Override
    public void start() {
        this.component.setRealName(this.context.getRealName());
        this.component.setApplicationVersion(this.context.getApplicationVersion());
    }

    /**
     * 已弃用, 此代码快与 WorkspaceComposite.java 的 start() 方法作用一样
     * <p>
     * 弃用原因: this.eventBus.addHandler() 方式注册事件的代码比 @EventHandler 先执行
     *
     * @param event MenuClickEvent事件对象
     */
    @EventHandler
    public void registerMenuClickEvent(MenuClickEvent event) {
        if (false) {
            String oldFileName = event.getOldMenu() != null ? event.getOldMenu().getMarkdown() : null;
            String newFileName = event.getNewMenu() != null ? event.getNewMenu().getMarkdown() : null;
            if (newFileName != null && !newFileName.equals(oldFileName)) {
                super.<WorkspaceComposite>getComposite("workspaceComposite").openFile(newFileName);
                this.context.setCurrentMenu(event.getNewMenu());
            }
        }
    }
}
