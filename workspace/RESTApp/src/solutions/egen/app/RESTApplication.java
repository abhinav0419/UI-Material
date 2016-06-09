package solutions.egen.app;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("/api")
public class RESTApplication extends ResourceConfig {
	
	public RESTApplication () {
		packages("solutions.egen.rest");
	}
}
