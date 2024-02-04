package com.itangsoft.notebook.model;

import org.dominokit.jackson.annotation.JSONMapper;

/**
 * 菜单实体类
 *
 * @author fushuwei
 */
@JSONMapper
public class Menu {

    private String id;
    private String name;
    private String parentId;
    private boolean folder;
    private boolean expand;
    private String markdown;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public boolean isFolder() {
        return folder;
    }

    public void setFolder(boolean folder) {
        this.folder = folder;
    }

    public boolean isExpand() {
        return expand;
    }

    public void setExpand(boolean expand) {
        this.expand = expand;
    }

    public String getMarkdown() {
        return markdown;
    }

    public void setMarkdown(String markdown) {
        this.markdown = markdown;
    }
}
