package com.itangsoft.notebook;

import com.github.nalukit.nalu.client.application.IsApplication;
import com.github.nalukit.nalu.client.application.annotation.Application;
import com.github.nalukit.nalu.client.application.annotation.Filters;
import com.github.nalukit.nalu.client.application.annotation.Logger;
import com.github.nalukit.nalu.client.application.annotation.Version;
import com.github.nalukit.nalu.plugin.elemental2.client.DefaultElemental2ClientLogger;
import com.itangsoft.notebook.filter.LoginFilter;
import com.itangsoft.notebook.plugin.CancelEditorConfirmPresenter;

/**
 * Notebook UI Application
 *
 * @author fushuwei
 */
@Application(loader = AppLoader.class,
    startRoute = Routes.ROUTE_LOGIN,
    illegalRouteTarget = Routes.ROUTE_LOGIN,
    confirmPresenter = CancelEditorConfirmPresenter.class,
    context = AppContext.class)
// @Modules({SystemModule.class})
@Filters(filterClasses = {LoginFilter.class})
@Logger(logger = AppLogger.class, clientLogger = DefaultElemental2ClientLogger.class)
// @Tracker(UpdateClockTracker.class)
@Version("1.0.0")
public interface NotebookApplication extends IsApplication {
}
