package com.itangsoft.notebook;

import com.github.nalukit.nalu.client.context.AbstractModuleContext;
import com.google.gwt.storage.client.Storage;
import com.itangsoft.notebook.model.Menu;
import com.itangsoft.notebook.model.Menu_MapperImpl;
import org.dominokit.domino.ui.forms.TextArea;
import org.gwtproject.i18n.client.DateTimeFormat;

import java.util.Objects;

/**
 * App Context
 *
 * @author fushuwei
 */
public class AppContext extends AbstractModuleContext {

    public String getUserId() {
        String userId = (String) super.getApplicationContext().get("userId");
        if (Objects.isNull(userId) || userId.isEmpty()) {
            userId = Storage.getSessionStorageIfSupported().getItem("userId");
        }
        return userId;
    }

    public void setUserId(String userId) {
        super.getApplicationContext().put("userId", userId);
        Storage.getSessionStorageIfSupported().setItem("userId", userId);
    }

    public String getUserName() {
        String username = (String) super.getApplicationContext().get("username");
        if (Objects.isNull(username) || username.isEmpty()) {
            username = Storage.getSessionStorageIfSupported().getItem("username");
        }
        return username;
    }

    public void setUserName(String username) {
        super.getApplicationContext().put("username", username);
        Storage.getSessionStorageIfSupported().setItem("username", username);
    }

    public String getRealName() {
        String realName = (String) super.getApplicationContext().get("realName");
        if (Objects.isNull(realName) || realName.isEmpty()) {
            realName = Storage.getSessionStorageIfSupported().getItem("realName");
        }
        return realName;
    }

    public void setRealName(String realName) {
        super.getApplicationContext().put("realName", realName);
        Storage.getSessionStorageIfSupported().setItem("realName", realName);
    }

    public TextArea getTextArea2() {
        return (TextArea) super.getApplicationContext().get("textArea2");
    }

    public void setTextArea2(TextArea textArea) {
        super.getApplicationContext().put("textArea2", textArea);
    }

    public int getCounter2() {
        return (int) super.getApplicationContext().get("counter2");
    }

    public void setCounter2(int counter) {
        super.getApplicationContext().put("counter2", counter);
    }

    public String getApplicationBuildTimeStr() {
        return DateTimeFormat.getFormat("yyyy-MM-dd HH:mm:ss").format(this.getApplicationBuildTime());
    }

    public Menu getCurrentMenu() {
        Object obj = super.getApplicationContext().get("currentMenu");
        if (Objects.nonNull(obj)) {
            return (Menu) obj;
        }
        String s = Storage.getSessionStorageIfSupported().getItem("currentMenu");
        if (Objects.nonNull(s)) {
            return Menu_MapperImpl.INSTANCE.read(s);
        }
        return null;
    }

    public void setCurrentMenu(Menu menu) {
        super.getApplicationContext().put("currentMenu", menu);
        Storage.getSessionStorageIfSupported().setItem("currentMenu", Menu_MapperImpl.INSTANCE.write(menu));
    }
}
