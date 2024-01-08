package com.itangsoft.notebook.views.layout.leftpanel;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import com.google.gwt.core.client.GWT;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.Response;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.itangsoft.notebook.utils.HttpClient;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.icons.Icons;
import org.dominokit.domino.ui.tree.Tree;
import org.dominokit.domino.ui.tree.TreeItem;
import org.dominokit.domino.ui.utils.DominoElement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * LeftPanel Component
 *
 * @author fushuwei
 */
public class LeftPanelComponent extends AbstractComponent<ILeftPanelComponent.Controller, HTMLElement> implements ILeftPanelComponent {

    private static final Logger logger = LoggerFactory.getLogger(LeftPanelComponent.class);

    public LeftPanelComponent() {
        super();
    }

    @Override
    public void render() {
        Tree<String> menuTree = Tree.create("我的笔记")
            .setAutoCollapse(false)
            .enableSearch()
            .enableFolding();

        HttpClient.get(GWT.getHostPageBaseURL() + "data/menu.json", null, new RequestCallback() {
            @Override
            public void onResponseReceived(Request request, Response response) {
                if (response.getStatusCode() != Response.SC_OK) {
                    logger.error("Error: " + response.getStatusCode() + " -> " + response.getStatusText());
                    return;
                }

                try {
                    buildMenuTree(menuTree, response.getText());
                } catch (Exception e) {
                    logger.error("菜单渲染失败", e);
                }
            }

            @Override
            public void onError(Request request, Throwable throwable) {
                logger.error("Error: ", throwable);
            }
        });

        initElement(DominoElement.div().appendChild(menuTree).element());
    }

    public void buildMenuTree(Tree<String> menuTree, String menuData) {
        JSONArray jMenuArray = JSONParser.parseStrict(menuData).isArray();

        // 将菜单数据转成 parentId 和 subMenuList 的键值对
        JSONObject jMapping = new JSONObject();
        for (int i = 0; i < jMenuArray.size(); i++) {
            JSONObject jMenu = jMenuArray.get(i).isObject();
            // 一级菜单不需要转换，因为其parentId为空
            if ("null".equals(String.valueOf(jMenu.get("parentId")))) {
                continue;
            }
            if ("null".equals(String.valueOf(jMapping.get(jMenu.get("parentId").isString().stringValue())))) {
                JSONArray jTempArray = new JSONArray();
                jTempArray.set(0, jMenu);
                jMapping.put(jMenu.get("parentId").isString().stringValue(), jTempArray);
            } else {
                JSONArray jTempArray = jMapping.get(jMenu.get("parentId").isString().stringValue()).isArray();
                jTempArray.set(jTempArray.size(), jMenu);
                jMapping.put(jMenu.get("parentId").isString().stringValue(), jTempArray);
            }
        }

        // 递归所有菜单，封装树结构
        for (int i = 0; i < jMenuArray.size(); i++) {
            JSONObject jMenu = jMenuArray.get(i).isObject();
            // 只递归一级菜单
            if ("null".equals(String.valueOf(jMenu.get("parentId")))) {
                TreeItem<String> treeItem = buildMenuItem(jMenu, jMapping);
                menuTree.appendChild(treeItem);
            }
        }
    }

    public TreeItem<String> buildMenuItem(JSONObject jMenu, JSONObject jMapping) {
        TreeItem<String> treeItem;

        // 判断是目录还是文件
        if (jMenu.get("folder").isBoolean().booleanValue()) {
            treeItem = TreeItem.create(jMenu.get("name").isString().stringValue(),
                Icons.ALL.folder()).setExpandIcon(Icons.ALL.folder_open());
        } else {
            treeItem = TreeItem.create(jMenu.get("name").isString().stringValue(),
                Icons.ALL.insert_drive_file()).setActiveIcon(Icons.ALL.file_check_outline_mdi());

            // 对文件节点添加点击事件
            treeItem.addClickListener(evt -> getController().openFile(jMenu.get("markdown").isString().stringValue()));
        }

        // 判断是否存在子菜单
        String currMenuId = jMenu.get("id").isString().stringValue();
        if (!"null".equals(String.valueOf(jMapping.get(currMenuId))) && jMapping.get(currMenuId).isArray().size() > 0) {
            JSONArray jSubMenuArray = jMapping.get(currMenuId).isArray();
            for (int j = 0; j < jSubMenuArray.size(); j++) {
                JSONObject jSubMenu = jSubMenuArray.get(j).isObject();
                TreeItem<String> subTreeItem = buildMenuItem(jSubMenu, jMapping);
                treeItem.appendChild(subTreeItem);
            }
        }

        // 判断当前目录是否展开状态
        if (jMenu.get("expand").isBoolean().booleanValue()) {
            treeItem.expand();
        }

        return treeItem;
    }
}
