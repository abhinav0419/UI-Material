package solutions.egen.rest.controllers;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import solutions.egen.daos.EmpDAO;
import solutions.egen.exceptions.AppException;
import solutions.egen.models.Employee;
import solutions.egen.rest.AppResponse;

@Path("/emp")
public class EmployeeController {

	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse getAll() {
		
		AppResponse resp = new AppResponse();
		try {
			EmpDAO dao = new EmpDAO();
			List<Employee> empList  = dao.getAllEmployees();
			resp.setPayload(empList);
		} catch (AppException e) {
			e.printStackTrace();
			resp.setStatus(AppResponse.ERROR);
			resp.setMessage(e.getMessage());
		}
		
		return resp;
	}
	
	@GET
	@Path("get/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse getEmployee (@PathParam("id") int empId) {

		AppResponse resp = new AppResponse();
		try {
			EmpDAO dao = new EmpDAO();
			Employee emp = dao.getEmployee(empId);
			resp.setPayload(emp);
		} catch (AppException e) {
			e.printStackTrace();
			resp.setStatus(AppResponse.ERROR);
			resp.setMessage(e.getMessage());
		}
		return resp;
	}
	
	@POST
	@Path("/add")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse addEmployee (Employee emp) {

		AppResponse resp = new AppResponse();
		try {
			EmpDAO dao = new EmpDAO();
			emp = dao.addEmployee(emp);
			resp.setPayload(emp);
		} catch (AppException e) {
			e.printStackTrace();
			resp.setStatus(AppResponse.ERROR);
			resp.setMessage(e.getMessage());
		}
		return resp;
	}
	
	
	
	
	
}
