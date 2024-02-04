package com.itangsoft.notebook.request;

import com.itangsoft.notebook.service.MenuServiceFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * DominoRest Test
 *
 * @author fushuwei
 */
public class DominoRestTest {

    private static final Logger logger = LoggerFactory.getLogger(DominoRestTest.class);

    public static void main(String[] args) {
        MenuServiceFactory.INSTANCE.queryMenus()
            .onSuccess(response -> {
                try {
                    response.forEach(menu -> logger.info(menu.getName()));
                } catch (Exception e) {
                    logger.error("菜单渲染失败", e);
                }
            })
            .onFailed(failedResponse -> {
                logger.error("Error: ", failedResponse.getThrowable());
            })
            .send();
    }
}
