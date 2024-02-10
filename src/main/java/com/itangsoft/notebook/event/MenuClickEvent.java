package com.itangsoft.notebook.event;

import com.itangsoft.notebook.model.Menu;
import org.gwtproject.event.shared.Event;

/**
 * 菜单点击事件
 *
 * @author fushuwei
 */
public class MenuClickEvent extends Event<MenuClickEvent.MenuClickEventHandler> {

    public static final Type<MenuClickEvent.MenuClickEventHandler> TYPE = new Type<>();

    private Menu oldMenu;
    private Menu newMenu;

    private MenuClickEvent() {
        super();
    }

    private MenuClickEvent(Menu oldMenu, Menu newMenu) {
        super();
        this.oldMenu = oldMenu;
        this.newMenu = newMenu;
    }

    public static MenuClickEvent create() {
        return new MenuClickEvent();
    }

    public static MenuClickEvent create(Menu oldMenu, Menu newMenu) {
        return new MenuClickEvent(oldMenu, newMenu);
    }

    @Override
    public Type<MenuClickEvent.MenuClickEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(MenuClickEvent.MenuClickEventHandler handler) {
        handler.fireEvent(this);
    }

    public interface MenuClickEventHandler {
        void fireEvent(MenuClickEvent event);
    }

    public Menu getOldMenu() {
        return oldMenu;
    }

    public Menu getNewMenu() {
        return newMenu;
    }
}
