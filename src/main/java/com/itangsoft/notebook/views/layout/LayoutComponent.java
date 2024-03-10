package com.itangsoft.notebook.views.layout;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import com.itangsoft.notebook.Routes;
import com.itangsoft.notebook.Slots;
import com.itangsoft.notebook.layout.AppLayout;
import com.itangsoft.notebook.utils.watermark.Watermark;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.utils.DominoElement;
import org.jboss.elemento.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Layout Component
 *
 * @author fushuwei
 */
public class LayoutComponent
    extends AbstractComponent<ILayoutComponent.Controller, HTMLElement>
    implements ILayoutComponent {

    private static final Logger logger = LoggerFactory.getLogger(LayoutComponent.class);

    AppLayout layout = AppLayout.create();

    public LayoutComponent() {
        super();
    }

    @Override
    public void render() {
        // 设置页眉
        layout.setLogo(Elements.img("images/logo.png?ts=" + System.currentTimeMillis()).css().element());
        layout.setTitle("云笔记");
        layout.getToolbar()
            .appendChild(DominoElement.of(Elements.li())
                .appendChild(DominoElement.of(Elements.a()).textContent("网页水印").addClickListener(evt -> showWatermark())))
            .appendChild(DominoElement.of(Elements.li())
                .appendChild(DominoElement.of(Elements.a("#" + Routes.ROUTE_EXAMPLE_SINGLE_PAGE_LAYOUT_HOME, "_blank")).textContent("单页面布局")))
            .appendChild(DominoElement.of(Elements.li())
                .appendChild(DominoElement.of(Elements.a("#" + Routes.ROUTE_EXAMPLE_EVENTBUS, "_blank")).textContent("事件总线")))
            .appendChild(DominoElement.of(Elements.li())
                .appendChild(DominoElement.of(Elements.a("https://github.com/fushuwei/notebook", "_blank")).textContent("GitHub")));

        // 设置左侧面板
        layout.getLeftPanel().setId(Slots.SELECTOR_LAYOUT_NAVIGATION);

        // 设置主面板
        layout.getContent().setId(Slots.SELECTOR_LAYOUT_WORKSPACE);

        initElement(layout.show().element());
    }

    /**
     * 显示网页水印
     */
    public void showWatermark() {
        new Watermark(new String[]{"测试水印"}).render();
    }

    @Override
    public void setRealName(String realName) {
        layout.setAvatar(realName);
    }

    @Override
    public void setApplicationVersion(String applicationVersion) {
        layout.setVersion(applicationVersion);
    }
}
