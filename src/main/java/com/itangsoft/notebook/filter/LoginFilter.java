package com.itangsoft.notebook.filter;

import com.github.nalukit.nalu.client.filter.AbstractFilter;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.Routes;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Login Filter
 *
 * @author fushuwei
 */
public class LoginFilter extends AbstractFilter<AppContext> {

    private static final Logger logger = LoggerFactory.getLogger(LoginFilter.class);

    @Override
    public boolean filter(String route, String... params) {
        return "admin".equals(this.context.getUserName())
            || Routes.ROUTE_LOGIN.equals(route)
            || route.startsWith("/example");
    }

    @Override
    public String redirectTo() {
        return Routes.ROUTE_LOGIN;
    }

    @Override
    public String[] parameters() {
        return new String[]{};
    }
}
