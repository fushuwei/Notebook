package com.itangsoft.notebook.views.showcase.eventbus2;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.button.Button;
import org.dominokit.domino.ui.forms.TextArea;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * EventBus Component
 *
 * @author fushuwei
 */
public class EventBusComponent extends AbstractComponent<IEventBusComponent.Controller, HTMLElement> implements IEventBusComponent {

    DominoElement<HTMLDivElement> root = DominoElement.div().css("eventbus");

    Button eventBtn = Button.create("测试事件总线");
    Button clearBtn = Button.create("清空日志");
    TextArea textArea = TextArea.create().setReadOnly(true);

    public EventBusComponent() {
        super();
    }

    @Override
    public void render() {
        eventBtn.addClickListener(evt -> this.getController().fireEvent());

        clearBtn.addClickListener(evt -> this.getController().clear());

        initElement(root.appendChild(eventBtn).appendChild(clearBtn).appendChild(textArea).element());
    }

    @Override
    public Button getEventBtn() {
        return eventBtn;
    }

    @Override
    public TextArea getTextArea() {
        return textArea;
    }
}
