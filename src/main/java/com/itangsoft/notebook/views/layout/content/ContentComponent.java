package com.itangsoft.notebook.views.layout.content;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import com.google.gwt.core.client.GWT;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.Response;
import com.itangsoft.notebook.utils.HttpClient;
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
        DominoElement<HTMLDivElement> contentDiv = DominoElement.div();

        String mdUrl = GWT.getHostPageBaseURL() + "files/" + getController().getFileName();
        HttpClient.get(mdUrl, null, new RequestCallback() {
            @Override
            public void onResponseReceived(Request request, Response response) {
                if (response.getStatusCode() != Response.SC_OK) {
                    logger.error("Error: " + response.getStatusCode() + " -> " + response.getStatusText());
                    return;
                }

                try {
                    contentDiv.setInnerHtml(response.getText());
                } catch (Exception e) {
                    logger.error("Markdown笔记渲染失败", e);
                }
            }

            @Override
            public void onError(Request request, Throwable throwable) {
                logger.error("Error: ", throwable);
            }
        });

        initElement(DominoElement.div().appendChild(contentDiv).element());
    }
}
