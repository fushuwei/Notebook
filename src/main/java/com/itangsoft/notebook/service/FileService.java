package com.itangsoft.notebook.service;

import org.dominokit.rest.shared.request.service.annotations.RequestFactory;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * File Service Class
 *
 * @author fushuwei
 */
@RequestFactory
public interface FileService {

    @GET
    @Path("files/{fileName}")
    @Consumes(MediaType.TEXT_PLAIN + "; charset=UTF-8")
    @Produces("text/plain; charset=utf-8")
    String getFileContent(@PathParam("fileName") String fileName);
}
