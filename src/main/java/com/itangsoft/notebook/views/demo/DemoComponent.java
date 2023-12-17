package com.itangsoft.notebook.views.demo;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * Demo Component
 *
 * @author fushuwei
 */
public class DemoComponent
    extends AbstractComponent<IDemoComponent.Controller, HTMLElement>
    implements IDemoComponent {

    public DemoComponent() {
        super();
    }

    @Override
    public void render() {
        initElement(DominoElement.div().element());
    }
}
