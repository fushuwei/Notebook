package com.itangsoft.notebook.views.layout.leftpanel;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.dominokit.domino.ui.icons.Icons;
import org.dominokit.domino.ui.tree.Tree;
import org.dominokit.domino.ui.tree.TreeItem;
import org.dominokit.domino.ui.utils.DominoElement;

/**
 * LeftPanel Component
 *
 * @author fushuwei
 */
public class LeftPanelComponent
    extends AbstractComponent<ILeftPanelComponent.Controller, HTMLElement>
    implements ILeftPanelComponent {

    public LeftPanelComponent() {
        super();
    }

    @Override
    public void render() {
        DominoElement<HTMLDivElement> navigatePanel = DominoElement.div().css("aaaaaaaaaaaa");

        Tree<String> foldersExpand = Tree.create("我的文件夹")
            .appendChild(TreeItem.create("Folder 1", Icons.ALL.folder())
                    .setExpandIcon(Icons.ALL.folder_open())
                .appendChild(TreeItem.create("Folder 1-1", Icons.ALL.folder())
                    .setExpandIcon(Icons.ALL.folder_open())
                    .appendChild(TreeItem.create("File 1", Icons.ALL.insert_drive_file())
                        .setActiveIcon(Icons.ALL.description()))
                    .appendChild(TreeItem.create("File 2", Icons.ALL.insert_drive_file())
                        .setActiveIcon(Icons.ALL.description()))
                    .appendChild(TreeItem.create("File 3", Icons.ALL.insert_drive_file())
                        .setActiveIcon(Icons.ALL.description()))
                    .appendChild(TreeItem.create("File 4", Icons.ALL.insert_drive_file())
                        .setActiveIcon(Icons.ALL.description()))
                ).appendChild(TreeItem.create("Folder 1-2", Icons.ALL.folder())
                    .setExpandIcon(Icons.ALL.folder_open())
                    .appendChild(TreeItem.create("File 1", Icons.ALL.insert_drive_file())
                        .setActiveIcon(Icons.ALL.description()))
                    .appendChild(TreeItem.create("File 2", Icons.ALL.insert_drive_file())
                        .setActiveIcon(Icons.ALL.description()))
                    .appendChild(TreeItem.create("File 3", Icons.ALL.insert_drive_file())
                        .setActiveIcon(Icons.ALL.description()))
                    .appendChild(TreeItem.create("File 4", Icons.ALL.insert_drive_file())
                        .setActiveIcon(Icons.ALL.description()))
                )
            );

        navigatePanel.appendChild(foldersExpand);

        initElement(navigatePanel.element());
    }
}
