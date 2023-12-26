package com.itangsoft.notebook.utils;

import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.user.client.Window;

/**
 * Utility class of the Http Client
 *
 * @author fushuwei
 */
public class HttpClient {

    public static void get(String url, JSONObject data) {
        try {
            request(RequestBuilder.GET, url, data);
        } catch (RequestException e) {
            throw new RuntimeException(e);
        }
    }

    public static void get(String url, JSONObject data, RequestCallback callback) {
        try {
            request(RequestBuilder.GET, url, data, callback);
        } catch (RequestException e) {
            throw new RuntimeException(e);
        }
    }

    public static void post(String url, JSONObject data) {
        try {
            request(RequestBuilder.POST, url, data);
        } catch (RequestException e) {
            throw new RuntimeException(e);
        }
    }

    public static void post(String url, JSONObject data, RequestCallback callback) {
        try {
            request(RequestBuilder.POST, url, data, callback);
        } catch (RequestException e) {
            throw new RuntimeException(e);
        }
    }

    private static void request(RequestBuilder.Method httpMethod, String url, JSONObject data) throws RequestException {
        RequestBuilder builder = new RequestBuilder(httpMethod, url);
        builder.setHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

        builder.sendRequest(data == null ? null : data.toString(), new RequestCallback() {
            @Override
            public void onResponseReceived(Request request, Response response) {
                if (response.getStatusCode() != Response.SC_OK) {
                    Window.alert("Error: " + response.getStatusCode() + " -> " + response.getStatusText());
                    return;
                }
                Window.alert(response.getText());
            }

            @Override
            public void onError(Request request, Throwable throwable) {
                Window.alert("Error: " + throwable);
            }
        });
    }

    private static void request(RequestBuilder.Method httpMethod, String url, JSONObject data, RequestCallback callback) throws RequestException {
        RequestBuilder builder = new RequestBuilder(httpMethod, url);
        builder.setHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

        builder.sendRequest(data == null ? null : data.toString(), callback);
    }
}
