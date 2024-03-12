package com.itangsoft.notebook.example.views.watermark;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;

/**
 * Watermark Component
 *
 * @author fushuwei
 */
public interface IWatermarkComponent extends IsComponent<IWatermarkComponent.Controller, HTMLElement> {

    interface Controller extends IsComponent.Controller {
    }
}
