package com.itangsoft.notebook.filter;

import com.github.nalukit.nalu.client.filter.AbstractFilter;
import com.itangsoft.notebook.AppContext;
import com.itangsoft.notebook.Routes;

/**
 * Login Filter
 *
 * @author fushuwei
 */
public class LoginFilter extends AbstractFilter<AppContext> {

    @Override
    public boolean filter(String route, String... params) {
        return true;
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
