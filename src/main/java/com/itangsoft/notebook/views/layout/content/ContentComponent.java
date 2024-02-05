package com.itangsoft.notebook.views.layout.content;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import com.itangsoft.notebook.service.FileServiceFactory;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.utils.DominoElement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Content Component
 *
 * @author fushuwei
 */
public class ContentComponent
    extends AbstractComponent<IContentComponent.Controller, HTMLElement>
    implements IContentComponent {

    private static final Logger logger = LoggerFactory.getLogger(ContentComponent.class);

    public ContentComponent() {
        super();
    }

    @Override
    public void render() {
        DominoElement<HTMLDivElement> contentDiv = DominoElement.div().css("markdown-body");

        FileServiceFactory.INSTANCE.getFileContent(getController().getFileName())
            .onSuccess(s -> {
                try {
                    logger.info(s);

                    String convertedHtml = markdown2Html(s);
                    contentDiv.setInnerHtml(convertedHtml);
                } catch (Exception e) {
                    logger.error("Markdown笔记渲染失败", e);
                }
            })
            .onFailed(failedResponseBean -> {
                logger.error("Error: ", failedResponseBean.getThrowable());
            })
            .send();

        initElement(DominoElement.div().appendChild(contentDiv).element());
    }

    public native String markdown2Html(String text) /*-{
        return $wnd.marked.parse(text);
    }-*/;
}
