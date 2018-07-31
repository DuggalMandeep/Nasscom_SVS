package br.DAO;
import br.BO.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;

import com.google.gson.Gson;

public class vehicleDAO {

	public vehicleDAO() {
		// TODO Auto-generated constructor stub
	}


	public static Connection getConnection() throws ClassNotFoundException, SQLException {
		Connection con=null;
		try {
			String driver="com.mysql.cj.jdbc.Driver";
			String url="jdbc:mysql://localhost:3306/db1?useSSL=false";
			String uname="root";
			String pass="";
			Class.forName(driver);
			con=DriverManager.getConnection(url, uname, pass);
			System.out.println("Connected");
			
			
		}
		catch(Exception e){
			System.out.println("DAO");
			System.out.println(e);
		}
		return con;
	}
	
	public int insert_in_vehicle(vehicleBO v)  {
		int a=-1;
			Connection con;
			try{
				con = getConnection();	
				PreparedStatement pos = con.prepareStatement("INSERT INTO vehicle values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
				
				
				pos.setString(1, v.getVehicle_number());
				pos.setString(2, v.getCategory());
				pos.setInt(3, v.getY_o_r());
				pos.setString(4, v.getManufacturer());
				pos.setString(5, v.getModel());
				pos.setString(6, v.getFuel());
				pos.setString(7, v.getColor());
				pos.setString(8, v.getOwner_name());
				pos.setString(9, v.getDob());
				pos.setString(10, v.getOwner_address());
				pos.setString(11, v.getCity());
				pos.setString(12, v.getPhone());
				pos.setString(13, v.getMail());
				pos.setString(14, v.getProof());
				pos.setString(15, v.getCity().substring(0, 2).toUpperCase()+1);
				pos.executeUpdate();
				a=1;
		}catch(Exception e) {
				System.out.println(e.getStackTrace().toString());

			}
			return a;
		}
	
	
	public int update_vehicle(updateVehicleBO v) {
		int a=-1;
			try{
				Connection con=getConnection();
				PreparedStatement pos = con.prepareStatement("UPDATE vehicle SET owner_name = ?, dob = ?, owner_address = ?, city = ?, phone = ?, mail = ?, proof= ? WHERE vehicle_number = ?");
				System.out.println("abc");
				System.out.println(v.getVehicle_number());
				pos.setString(1, v.getOwner_name());
				pos.setString(2, v.getDob());
				pos.setString(3, v.getOwner_address());
				pos.setString(4, v.getCity());
				pos.setString(5, v.getPhone());
				pos.setString(6, v.getMail());
				pos.setString(7, v.getProof());
				pos.setString(8, v.getVehicle_number());
				System.out.println(v.getProof());
				System.out.println(pos.executeUpdate());
				System.out.println("UPDATED");
			a=1;
			}catch(Exception e) {
				System.out.println(e.getMessage());
			}
			return a;
		}
	
	public String select_from_vehicle(String vehicle_number) {
		
		String jsonStr="";
		try{
			Connection con=getConnection();
			PreparedStatement pos = con.prepareStatement("SELECT * FROM vehicle where vehicle_number='"+vehicle_number+"'");
			ResultSet r=pos.executeQuery();
			while(r.next())
			{
					vehicleBO vb=new vehicleBO();
					System.out.println("aaaa");
					vb.setVehicle_number(r.getString("vehicle_number"));
					vb.setCategory(r.getString("Category"));
					vb.setY_o_r(r.getInt("y_o_r"));
					vb.setManufacturer(r.getString("manufacturer"));
					vb.setModel(r.getString("model"));
					vb.setFuel(r.getString("fuel"));
					vb.setColor(r.getString("color"));
					vb.setOwner_name(r.getString("owner_name"));
					vb.setDob(r.getString("dob"));
					vb.setOwner_address(r.getString("owner_address"));
					vb.setCity(r.getString("city"));
					vb.setPhone(r.getString("phone"));
					vb.setMail(r.getString("mail"));
					vb.setProof(r.getString("proof"));
			        Gson gsonObj = new Gson();
			        jsonStr = gsonObj.toJson(vb);
			        System.out.println(jsonStr);
			}
		}catch(Exception e) {
			System.out.println(e);
		}
		
	return jsonStr;
	}
	
	
	//-----------------------------Main Begins Here-------------------------------
	
	public static void main(String[] args) throws ClassNotFoundException, SQLException, ParseException {
			getConnection();


	        
	}

}
