package com.itangsoft.notebook.example.views.eventbus;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.forms.TextArea;

/**
 * EventBus Component
 *
 * @author fushuwei
 */
public interface IEventBusComponent extends IsComponent<IEventBusComponent.Controller, HTMLElement> {

    interface Controller extends IsComponent.Controller {
        void fireEvent1();

        void clear1();

        void fireEvent2();

        void clear2();

        void fireEvent3();

        void clear3();
    }

    TextArea getTextArea1();

    TextArea getTextArea2();

    TextArea getTextArea3();
}
