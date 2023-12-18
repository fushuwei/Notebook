package com.itangsoft.notebook;

import com.github.nalukit.nalu.client.context.AbstractModuleContext;
import com.google.gwt.storage.client.Storage;
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

    public String getApplicationBuildTimeStr() {
        return DateTimeFormat.getFormat("yyyy-MM-dd HH:mm:ss").format(this.getApplicationBuildTime());
    }
}
