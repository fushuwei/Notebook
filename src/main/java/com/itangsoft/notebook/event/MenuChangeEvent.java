package com.itangsoft.notebook.event;

import org.gwtproject.event.shared.Event;

/**
 * 切换菜单事件
 *
 * @author fushuwei
 */
public class MenuChangeEvent extends Event<MenuChangeEvent.MenuChangeEventHandler> {

    public static final Type<MenuChangeEvent.MenuChangeEventHandler> TYPE = new Type<>();

    private String oldFileName;
    private String newFileName;

    private MenuChangeEvent() {
        super();
    }

    private MenuChangeEvent(String oldFileName, String newFileName) {
        super();
        this.oldFileName = oldFileName;
        this.newFileName = newFileName;
    }

    public static MenuChangeEvent create() {
        return new MenuChangeEvent();
    }

    public static MenuChangeEvent create(String oldFileName, String newFileName) {
        return new MenuChangeEvent(oldFileName, newFileName);
    }

    @Override
    public Type<MenuChangeEvent.MenuChangeEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(MenuChangeEvent.MenuChangeEventHandler handler) {
        handler.fireEvent(this);
    }

    public interface MenuChangeEventHandler {
        void fireEvent(MenuChangeEvent event);
    }

    public String getOldFileName() {
        return oldFileName;
    }

    public String getNewFileName() {
        return newFileName;
    }
}
