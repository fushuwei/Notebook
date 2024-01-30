package com.itangsoft.notebook;

import com.github.nalukit.nalu.client.application.AbstractLoader;
import elemental2.dom.DomGlobal;
import elemental2.dom.Element;
import elemental2.dom.HTMLLinkElement;
import elemental2.dom.NodeList;

/**
 * App Loader
 *
 * @author fushuwei
 */
public class AppLoader extends AbstractLoader<AppContext> {

    @Override
    public void load(FinishLoadCommand finishLoadCommand) {
        // Set browser title and favicon.ico
        DomGlobal.document.title = "云笔记 - 欢迎来到我的世界";
        NodeList<Element> nodeList = DomGlobal.document.getElementsByTagName("link");
        for (Element element : nodeList.asList()) {
            if (element instanceof HTMLLinkElement) {
                HTMLLinkElement link = (HTMLLinkElement) element;
                if ("shortcut icon".equals(link.rel)) {
                    link.href = "images/favicon.ico";
                    break;
                }
            }
        }

        finishLoadCommand.finishLoading();
    }
}
