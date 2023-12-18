package com.itangsoft.notebook.layout;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLImageElement;
import org.dominokit.domino.ui.style.ColorScheme;
import org.dominokit.domino.ui.style.Style;
import org.dominokit.domino.ui.themes.Theme;
import org.dominokit.domino.ui.utils.BaseDominoElement;
import org.dominokit.domino.ui.utils.DominoElement;
import org.dominokit.domino.ui.utils.TextNode;
import org.jboss.elemento.Elements;

import java.util.Objects;

/**
 * Application Layout
 *
 * @author fushuwei
 */
public class AppLayout extends BaseDominoElement<HTMLDivElement, AppLayout> {

    DominoElement<HTMLDivElement> root = DominoElement.div().css("app-layout");

    Header header = Header.create();
    Body body = Body.create();
    Footer footer = Footer.create();

    // 左侧面板打开风格
    private LeftPanelOpenStyle leftPanelOpenStyle = LeftPanelOpenStyle.OVERLAY;
    // 是否小屏幕, 默认否
    private boolean isSmallScreen = false;

    private AppLayout() {
        this(null, null);
    }

    private AppLayout(HTMLImageElement logo) {
        this(logo, null);
    }

    private AppLayout(String title) {
        this(null, title);
    }

    private AppLayout(HTMLImageElement logo, String title) {
        init(this);

        if (Objects.nonNull(logo)) {
            setLogo(logo);
        }
        if (Objects.nonNull(title)) {
            setTitle(title);
        }

        root.appendChild(
            DominoElement.div()
                .appendChild(header)
                .appendChild(body)
                .appendChild(footer));
    }

    public static AppLayout create() {
        return new AppLayout();
    }

    public static AppLayout create(HTMLImageElement logo) {
        return new AppLayout(logo);
    }

    public static AppLayout create(String title) {
        return new AppLayout(title);
    }

    public static AppLayout create(HTMLImageElement logo, String title) {
        return new AppLayout(logo, title);
    }

    @Override
    public HTMLDivElement element() {
        return root.element();
    }

    /**
     * 显示布局
     *
     * @return <code>AppLayout</code>
     */
    public AppLayout show() {
        return show(ColorScheme.INDIGO);
    }

    /**
     * 显示布局
     *
     * @param theme 主题皮肤
     * @return <code>AppLayout</code>
     */
    public AppLayout show(ColorScheme theme) {
        new Theme(theme).apply();
        if (!root.isAttached()) {
            DomGlobal.document.body.appendChild(root.element());
        }
        return this;
    }

    /**
     * 设置应用程序logo, 该设置可以与title同时出现在左上角的页面布局中
     *
     * @param image 应用程序logo
     */
    public void setLogo(HTMLImageElement image) {
        header.getLogo().clearElement().appendChild(image);
    }

    /**
     * 设置应用程序标题, 该设置可以与logo同时出现在左上角的页面布局中
     *
     * @param title 应用程序标题
     */
    public void setTitle(String title) {
        header.getTitle().clearElement().appendChild(TextNode.of(title));
    }

    /**
     * 设置当前登录用户的头像
     *
     * @param src 头像对应的图片src
     * @param alt 头像对应的图片alt
     */
    public void setAvatar(String src, String alt) {
        header.getAvatar().clearElement().appendChild(Elements.img().attr("src", src).attr("alt", alt));
    }

    /**
     * 设置当前登录用户的头像
     *
     * @param word 头像对应的文字
     */
    public void setAvatar(String word) {
        header.getAvatar().clearElement().appendChild(DominoElement.div().setAttribute("alt", word));
    }

    /**
     * 在页脚中显示软件版本
     *
     * @param version 版本号
     */
    public void setVersion(String version) {
        footer.getMiddleElement().clearElement().appendChild(TextNode.of("软件版本：" + version));
    }

    /**
     * 枚举, 列出左侧面板打开行为
     */
    public enum LeftPanelOpenStyle {
        /**
         * 左侧面板打开时, 内容面板尺寸不变, 左侧面板覆盖在内容面板之上
         */
        OVERLAY(
            layout -> {
                // layout.showOverlay();
            },
            layout -> {
                // layout.hideOverlay();
            }
        ),

        /**
         * 左侧面板打开时, 向右挤压内容面板, 内容面板的宽度缩小
         */
        SHRINK(
            layout -> {
                Style.bodyStyle().addCss("l-shrink");
                Style.bodyStyle().removeCss("ls-closed");
            },
            layout -> {
                Style.bodyStyle().removeCss("l-shrink");
                Style.bodyStyle().addCss("ls-closed");
            }
        );

        private final LayoutHandler openHandler;
        private final LayoutHandler closeHandler;

        LeftPanelOpenStyle(LayoutHandler openHandler, LayoutHandler closeHandler) {
            this.openHandler = openHandler;
            this.closeHandler = closeHandler;
        }

        public void onOpen(AppLayout layout) {
            // this.openHandler.handleLayout(layout);
        }

        public void onClose(AppLayout layout) {
            // closeHandler.handleLayout(layout);
        }
    }

    /**
     * 页面布局交互处理程序
     */
    @FunctionalInterface
    public interface LayoutHandler {
        void handle(AppLayout layout);
    }
}
