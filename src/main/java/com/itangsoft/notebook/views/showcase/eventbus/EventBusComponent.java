package com.itangsoft.notebook.views.showcase.eventbus;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.button.Button;
import org.dominokit.domino.ui.forms.TextArea;
import org.dominokit.domino.ui.utils.DominoElement;
import org.jboss.elemento.Elements;

/**
 * EventBus Component
 *
 * @author fushuwei
 */
public class EventBusComponent extends AbstractComponent<IEventBusComponent.Controller, HTMLElement> implements IEventBusComponent {

    DominoElement<HTMLDivElement> root = DominoElement.div().css("eventbus");

    Button clickBtn1 = Button.create("触发事件按钮");
    Button clearBtn1 = Button.create("清空");
    TextArea textArea1 = TextArea.create().setReadOnly(true);

    Button clickBtn2 = Button.create("触发事件按钮");
    Button clearBtn2 = Button.create("清空");
    TextArea textArea2 = TextArea.create().setReadOnly(true);

    Button clickBtn3 = Button.create("触发事件按钮");
    Button clearBtn3 = Button.create("清空");
    TextArea textArea3 = TextArea.create().setReadOnly(true);

    public EventBusComponent() {
        super();
    }

    @Override
    public void render() {
        clickBtn1.addClickListener(evt -> this.getController().fireEvent1());
        clearBtn1.addClickListener(evt -> this.getController().clear1());

        clickBtn2.addClickListener(evt -> this.getController().fireEvent2());
        clearBtn2.addClickListener(evt -> this.getController().clear2());

        clickBtn3.addClickListener(evt -> this.getController().fireEvent3());
        clearBtn3.addClickListener(evt -> this.getController().clear3());

        root.appendChild(Elements.h(1, "事件总线"))
            .appendChild(DominoElement.div()
                .appendChild(DominoElement.div()
                    .appendChild(Elements.h(2, "使用 Nalu 框架默认事件"))
                    .appendChild(clickBtn1)
                    .appendChild(clearBtn1)
                    .appendChild(textArea1))
                .appendChild(DominoElement.div()
                    .appendChild(Elements.h(2, "自定义 Event 和 Handler 类"))
                    .appendChild(clickBtn2)
                    .appendChild(clearBtn2)
                    .appendChild(textArea2))
                .appendChild(DominoElement.div()
                    .appendChild(Elements.h(2, "使用 @EventHandler 注解"))
                    .appendChild(clickBtn3)
                    .appendChild(clearBtn3)
                    .appendChild(textArea3))
                .setDisplay("flex"));

        initElement(root.element());
    }

    public TextArea getTextArea1() {
        return textArea1;
    }

    public TextArea getTextArea2() {
        return textArea2;
    }

    public TextArea getTextArea3() {
        return textArea3;
    }
}
