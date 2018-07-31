package br.servletp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.text.ParseException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import br.BO.vehicleBO;
import br.DAO.vehicleDAO;

@WebServlet("/vehicleinsert")
public class vehicle_insert extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public vehicle_insert() {
        super();

    }


	public void init(ServletConfig config) throws ServletException {
		
	}


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}


	
	//***********************************************************************
	//                        Insert In Vehicle Table
	//***********************************************************************
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);request
		Gson gson =new Gson();
		InputStreamReader ir=new InputStreamReader(request.getInputStream());
		BufferedReader br=new BufferedReader(ir);
		Gson gs = new Gson();
		String js= br.readLine();
		System.out.println(js);
		JsonObject json = (JsonObject) new JsonParser().parse(js);
		vehicleBO vno;
		System.out.println(String.valueOf(json.get("y_o_r")).substring(1,5));
		try {
			vno=new vehicleBO(String.valueOf(json.get("vehicle_number")).substring(1,11),
					String.valueOf(json.get("manufacturer")).substring(1,String.valueOf(json.get("manufacturer")).length()-1),
					String.valueOf(json.get("y_o_r")).substring(1,5),
					String.valueOf(json.get("model")).substring(1,String.valueOf(json.get("model")).length()-1),
					String.valueOf(json.get("Category")).substring(1,2),
					String.valueOf(json.get("fuel")).substring(1,String.valueOf(json.get("fuel")).length()-1),
					String.valueOf(json.get("color")).substring(1,String.valueOf(json.get("color")).length()-1),
					String.valueOf(json.get("owner_name")).substring(1,String.valueOf(json.get("owner_name")).length()-1),
					String.valueOf(json.get("dob")).substring(1,11),
					String.valueOf(json.get("owner_address")).substring(1,String.valueOf(json.get("owner_address")).length()-1),
					String.valueOf(json.get("city")).substring(1,String.valueOf(json.get("city")).length()-1),
					String.valueOf(json.get("phone")).substring(1,11),
					String.valueOf(json.get("mail")).substring(1,String.valueOf(json.get("mail")).length()-1),
					String.valueOf(json.get("proof")).substring(1,3));
			System.out.println(String.valueOf(vno.getColor()));
			System.out.print(vno.getFuel()+","+vno.getVehicle_number());
			vehicleDAO vd = new vehicleDAO();
			
			if(vd.insert_in_vehicle(vno)==1) {
				String str = "Done";
				PrintWriter out = response.getWriter();
				out.print(gson.toJson(str));
			}
			else {
				String str = "failed";
				PrintWriter out = response.getWriter();
				out.print(gson.toJson(str));
			}

		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		

      
	}

}
