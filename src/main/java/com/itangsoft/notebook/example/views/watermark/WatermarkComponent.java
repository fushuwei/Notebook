package com.itangsoft.notebook.example.views.watermark;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.utils.DominoElement;

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
        initElement(root.element());
    }
}
