package br.servletp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import br.BO.signalBO;
import br.BO.vehicleBO;
import br.DAO.signalDAO;
import br.DAO.vehicleDAO;

/**
 * Servlet implementation class signal_insert
 */
@WebServlet("/signalinsert")
public class signal_insert extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public signal_insert() {
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
	//************************************************************************************
	//                                 Insert Into Signal
	//************************************************************************************
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		InputStreamReader ir=new InputStreamReader(request.getInputStream());
		BufferedReader br=new BufferedReader(ir);
		String js= br.readLine();
		System.out.println(js);
		Gson gs = new Gson();
		signalBO vno = gs.fromJson(br, signalBO.class);
		signalDAO sig = new signalDAO();
		sig.insert_in_signal(vno);
		
	}
	public void destroy() {
		// TODO Auto-generated method stub
	}
}
