package com.itangsoft.notebook.views.layout.content;

import com.github.nalukit.nalu.client.component.annotation.AcceptParameter;
import com.github.nalukit.nalu.client.component.annotation.Controller;
import com.github.nalukit.nalu.client.exception.RoutingInterceptionException;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.base.BaseComponentController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Content Controller
 *
 * @author fushuwei
 */
@Controller(route = Routes.ROUTE_CONTENT,
    selector = Slots.SELECTOR_LAYOUT_CONTENT,
    componentInterface = IContentComponent.class,
    component = ContentComponent.class)
public class ContentController
    extends BaseComponentController<IContentComponent>
    implements IContentComponent.Controller {

    private static final Logger logger = LoggerFactory.getLogger(ContentController.class);

    String fileName;

    public ContentController() {
    }

    @AcceptParameter("fileName")
    public void setFileName(String fileName) throws RoutingInterceptionException {
        try {
            this.fileName = fileName;
        } catch (NumberFormatException e) {
            logger.error("参数 fileName 无效", e);
            throw new RoutingInterceptionException(this.getClass().getCanonicalName(), Routes.ROUTE_HOME);
        }
    }

    public String getFileName() {
        return fileName;
    }
}
