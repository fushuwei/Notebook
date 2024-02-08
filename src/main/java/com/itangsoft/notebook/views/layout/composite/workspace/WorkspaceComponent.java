package com.itangsoft.notebook.views.layout.composite.workspace;

import com.github.nalukit.nalu.client.component.AbstractCompositeComponent;
import com.itangsoft.notebook.service.FileServiceFactory;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.utils.DominoElement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Workspace Component
 *
 * @author fushuwei
 */
public class WorkspaceComponent
    extends AbstractCompositeComponent<IWorkspaceComponent.Controller, HTMLElement>
    implements IWorkspaceComponent {

    private static final Logger logger = LoggerFactory.getLogger(WorkspaceComponent.class);

    public WorkspaceComponent() {
        super();
    }

    @Override
    public void render() {
        DominoElement<HTMLDivElement> contentDiv = DominoElement.div().css("markdown-body");

        initElement(DominoElement.div().appendChild(contentDiv).element());
    }

    public void temp() {
        // FileServiceFactory.INSTANCE.getFileContent(getController().getFileName())
        FileServiceFactory.INSTANCE.getFileContent("")
            .onSuccess(s -> {
                try {
                    String convertedHtml = markdown2Html(s);
                    // contentDiv.setInnerHtml(convertedHtml);
                } catch (Exception e) {
                    logger.error("Markdown笔记渲染失败", e);
                }
            })
            .onFailed(failedResponseBean -> {
                logger.error("Error: " + failedResponseBean.getStatusCode() + " - " +
                    failedResponseBean.getStatusText() + " - ", failedResponseBean.getThrowable());
            })
            .send();
    }

    public native String markdown2Html(String text) /*-{
        return $wnd.marked.parse(text);
    }-*/;
}
