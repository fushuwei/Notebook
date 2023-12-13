package com.itangsoft.notebook;

import com.github.nalukit.nalu.plugin.elemental2.client.NaluPluginElemental2;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import elemental2.dom.DomGlobal;
import elemental2.dom.Element;
import org.dominokit.rest.DominoRestConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 *
 * @author fushuwei
 */
public class AppEntryPoint implements EntryPoint {

    private static final Logger logger = LoggerFactory.getLogger(AppEntryPoint.class);

    /**
     * This is the entry point method.
     */
    public void onModuleLoad() {
        // Initialize uncaught exception handler
        GWT.setUncaughtExceptionHandler(e -> logger.error("PANIC! -> UncaughtException Handler called", e));

        // Initialize domino rest
        DominoRestConfig.initDefaults()
            .setDefaultServiceRoot("http://localhost:8000")
            .setDefaultFailHandler(failedResponseBean ->
                DomGlobal.window.alert("PANIC! -> Server failed to process request"));

        // Initialize domino ui
        // DominoUIConfig.CONFIG.setDefaultFieldsStyle(FieldStyle.ROUNDED).setCondensed(true);

        // Create and start the application
        NotebookApplication application = new NotebookApplicationImpl();
        application.run(new NaluPluginElemental2());

        // Cancel loading
        Element element = DomGlobal.document.getElementById("LoadingSpinner");
        if (element != null) {
            element.remove();
        }

        logger.info("Notebook UI have been initialized.");
    }
}
