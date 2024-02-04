package com.itangsoft.notebook.request;

import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.Response;
import com.itangsoft.notebook.model.Menu;
import com.itangsoft.notebook.model.Menu_MapperImpl;
import com.itangsoft.notebook.utils.HttpClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Arrays;

/**
 * HttpClient Test
 *
 * @author fushuwei
 */
public class HttpClientTest {

    private static final Logger logger = LoggerFactory.getLogger(HttpClientTest.class);

    public static void main(String[] args) {
        HttpClient.get("http://localhost:8080/data/menu.json", null, new RequestCallback() {
            @Override
            public void onResponseReceived(Request request, Response response) {
                if (response.getStatusCode() != Response.SC_OK) {
                    logger.error("Error: " + response.getStatusCode() + " -> " + response.getStatusText());
                    return;
                }

                try {
                    Menu[] menus = Menu_MapperImpl.INSTANCE.readArray(response.getText(), Menu[]::new);
                    Arrays.stream(menus).forEach(menu -> logger.info(menu.getName()));
                } catch (Exception e) {
                    logger.error("菜单渲染失败", e);
                }
            }

            @Override
            public void onError(Request request, Throwable throwable) {
                logger.error("Error: ", throwable);
            }
        });
    }
}
