package br.servletp;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.DAO.vehicleDAO;


@WebServlet(name = "selectvehicle", urlPatterns = { "/selectvehicle" })
public class select_from_vehicle extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public select_from_vehicle() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
		response.setContentType("text/html");
		PrintWriter pw=response.getWriter();
		vehicleDAO vd = new vehicleDAO();
		String vno=request.getParameter("vno");
		String jso=vd.select_from_vehicle(vno);
		response.getWriter().write(jso);
		System.out.println("Done");
	}



}
