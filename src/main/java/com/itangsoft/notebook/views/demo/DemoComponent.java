package com.itangsoft.notebook.views.demo;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.button.Button;
import org.dominokit.domino.ui.forms.TextArea;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * Demo Component
 *
 * @author fushuwei
 */
public class DemoComponent
    extends AbstractComponent<IDemoComponent.Controller, HTMLElement>
    implements IDemoComponent {

    Button eventbus;
    TextArea textArea;

    public DemoComponent() {
        super();
    }

    @Override
    public void render() {
        eventbus = Button.create("EventBus");
        eventbus.addClickListener(evt -> {
            this.getController().eventbusOnClick();
        });

        textArea = TextArea.create().setReadOnly(true);

        initElement(DominoElement.div().appendChild(eventbus).appendChild(textArea).element());
    }

    @Override
    public Button getEventbus() {
        return eventbus;
    }

    @Override
    public TextArea getTextArea() {
        return textArea;
    }
}
