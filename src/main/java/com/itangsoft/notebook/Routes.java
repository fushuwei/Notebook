package com.itangsoft.notebook;

/**
 * Page Routing Address
 *
 * @author fushuwei
 */
public class Routes {

    /**
     * 登录
     */
    public static final String SHELL_LOGIN = "auth";
    public static final String ROUTE_LOGIN = "/" + Routes.SHELL_LOGIN + "/login";

    /**
     * 注册
     */
    public static final String SHELL_REGISTER = "user";
    public static final String ROUTE_REGISTER = "/" + Routes.SHELL_REGISTER + "/register";

    /**
     * 主界面
     */
    public static final String SHELL_LAYOUT = "layout";
    public static final String ROUTE_HOME = "/" + Routes.SHELL_LAYOUT + "/home";
    public static final String ROUTE_CONTENT = "/" + Routes.SHELL_LAYOUT + "/home/content/:fileName";
}
