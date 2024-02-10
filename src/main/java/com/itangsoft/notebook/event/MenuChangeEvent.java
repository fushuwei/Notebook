package com.itangsoft.notebook.event;

import com.itangsoft.notebook.model.Menu;
import org.gwtproject.event.shared.Event;

/**
 * 切换菜单事件
 *
 * @author fushuwei
 */
public class MenuChangeEvent extends Event<MenuChangeEvent.MenuChangeEventHandler> {

    public static final Type<MenuChangeEvent.MenuChangeEventHandler> TYPE = new Type<>();

    private Menu oldMenu;
    private Menu newMenu;

    private MenuChangeEvent() {
        super();
    }

    private MenuChangeEvent(Menu oldMenu, Menu newMenu) {
        super();
        this.oldMenu = oldMenu;
        this.newMenu = newMenu;
    }

    public static MenuChangeEvent create() {
        return new MenuChangeEvent();
    }

    public static MenuChangeEvent create(Menu oldMenu, Menu newMenu) {
        return new MenuChangeEvent(oldMenu, newMenu);
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

    public Menu getOldMenu() {
        return oldMenu;
    }

    public Menu getNewMenu() {
        return newMenu;
    }
}
