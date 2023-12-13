package com.itangsoft.notebook.views.layout.content;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * Content Component
 *
 * @author fushuwei
 */
public class ContentComponent
    extends AbstractComponent<IContentComponent.Controller, HTMLElement>
    implements IContentComponent {

    public ContentComponent() {
        super();
    }

    @Override
    public void render() {
        initElement(DominoElement.elements.div().element());
    }
}
