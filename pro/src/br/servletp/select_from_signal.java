package br.servletp;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.DAO.signalDAO;
import br.DAO.vehicleDAO;

/**
 * Servlet implementation class select_from_signal
 */
@WebServlet(name = "selectsignal", urlPatterns = { "/selectsignal" })
public class select_from_signal extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public select_from_signal() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Servlet#destroy()
	 */

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	
	//******************************************************************************************************
	//    It Will take junction,city as String(name="junction","city") and give output in the form of json
	//******************************************************************************************************
		
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		response.setContentType("text/html");
		PrintWriter pw=response.getWriter();
		signalDAO vd = new signalDAO();
		String junction=request.getParameter("junction");
		String city=request.getParameter("city");
		String jso=vd.select_from_signal(junction, city);
		response.getWriter().write(jso);
		System.out.println("Done");
	}

	public void destroy() {
		// TODO Auto-generated method stub
	}

}
