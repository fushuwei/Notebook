package com.itangsoft.notebook.views.layout.composite.workspace;

import com.github.nalukit.nalu.client.component.AbstractCompositeComponent;
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

    DominoElement<HTMLDivElement> contentDiv;

    public WorkspaceComponent() {
        super();
    }

    @Override
    public void render() {
        contentDiv = DominoElement.div().css("markdown-body");
        initElement(DominoElement.div().appendChild(contentDiv).element());
    }

    @Override
    public void loadFile(String content) {
        String convertedHtml = markdown2Html(content);
        contentDiv.setInnerHtml(convertedHtml);
    }

    public native String markdown2Html(String text) /*-{
        return $wnd.marked.parse(text);
    }-*/;
}
