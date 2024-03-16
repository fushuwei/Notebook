package com.itangsoft.notebook.example.views.watermark;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.forms.TextBox;
import org.dominokit.domino.ui.grid.Column;
import org.dominokit.domino.ui.grid.Row;
import org.dominokit.domino.ui.utils.DominoElement;
import org.jboss.elemento.Elements;

/**
 * Watermark Component
 *
 * @author fushuwei
 */
public class WatermarkComponent
    extends AbstractComponent<IWatermarkComponent.Controller, HTMLElement>
    implements IWatermarkComponent {

    DominoElement<HTMLDivElement> root = DominoElement.div().css("watermark");

    @Override
    public void render() {
        root.appendChild(Elements.h(1, "网页水印"))
            .appendChild(DominoElement.div().appendChild(getForm()));

        initElement(root.element());
    }

    public HTMLDivElement getForm() {
        TextBox text = TextBox.create("水印文字");
        TextBox imageUrl = TextBox.create("水印图片");

        DominoElement<HTMLDivElement> form = DominoElement.div();
        form.appendChild(Row.create()
            .appendChild(Column.span4().appendChild(text))
            .appendChild(Column.span4().appendChild(imageUrl))
        );
        return form.element();
    }
}
