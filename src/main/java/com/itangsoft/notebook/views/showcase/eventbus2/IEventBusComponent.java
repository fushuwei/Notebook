package com.itangsoft.notebook.views.showcase.eventbus2;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.button.Button;
import org.dominokit.domino.ui.forms.TextArea;

/**
 * EventBus Component
 *
 * @author fushuwei
 */
public interface IEventBusComponent extends IsComponent<IEventBusComponent.Controller, HTMLElement> {

    interface Controller extends IsComponent.Controller {
        void fireEvent();

        void clear();
    }

    Button getEventBtn();

    TextArea getTextArea();
}
