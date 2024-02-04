package com.itangsoft.notebook.service;

import com.itangsoft.notebook.model.Menu;
import org.dominokit.rest.shared.request.service.annotations.RequestFactory;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import java.util.List;

/**
 * Menu Service Class
 *
 * @author fushuwei
 */
@RequestFactory
public interface MenuService {

    @GET
    @Path("data/menu.json")
    List<Menu> queryMenus();
}
