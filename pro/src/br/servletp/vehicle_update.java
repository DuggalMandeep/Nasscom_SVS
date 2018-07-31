package br.servletp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import br.BO.updateVehicleBO;
import br.BO.vehicleBO;
import br.DAO.vehicleDAO;

@WebServlet("/updatevehicle")
public class vehicle_update extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public vehicle_update() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

	//***********************************************************************
	//                             Update Vehicle Table
	//***********************************************************************
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		InputStreamReader ir=new InputStreamReader(request.getInputStream());
		BufferedReader br=new BufferedReader(ir);
		String js= br.readLine();
		System.out.println(js);
		Gson gs = new Gson();
		JsonParser pars=new JsonParser();
		JsonObject json=pars.parse(js).getAsJsonObject();
		
		updateVehicleBO vno = gs.fromJson(json.toString(), updateVehicleBO.class);
		System.out.println(vno.getVehicle_number());
		vehicleDAO vd = new vehicleDAO();
		vd.update_vehicle(vno);
	}
}
