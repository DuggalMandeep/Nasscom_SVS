package br.DAO;

import br.BO.*;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;


import com.google.gson.Gson;

public class challanDAO {

	public challanDAO() {
		// TODO Auto-generated constructor stub
	}
	
	public static Connection getConnection() {
		Connection con=null;
		try {
		String driver="com.mysql.jdbc.Driver";
		String url="jdbc:mysql://localhost:3306/db1";
		String uname="root";
		String pass="mandeep";
		Class.forName(driver);
		con=DriverManager.getConnection(url, uname, pass);
		System.out.println("Connected");
		}
		catch(Exception e){
			System.out.println(e);
		}
		return con;
	}

	
	
	public int insert_in_challan(challanBO v) {
		// TODO Auto-generated method stub
		

		
		int a=-1;
			try{
				Connection con=getConnection();
				
		PreparedStatement pos = con.prepareStatement("INSERT INTO challan(challan_id,vehicle_number,offence,officer_id,sno,offence_date,due_date,ps_circle,amount,junction,owner_name,officer_id)VALUES(?,?,?,?,?,?,?,?,?,?,?,?);");
			pos.setString(1, v.getChallan_id());
			pos.setString(2, v.getVehicle_number());
			pos.setString(3,v.getOffence());
			pos.setString(4, v.getOfficer_id());
			pos.setInt(5, (int)v.getSno());
			pos.setDate(6, Date.valueOf(v.getOffence_date()));
			pos.setDate(7, Date.valueOf(v.getDue_date()));
			pos.setString(8, v.getPs_circle());
			pos.setInt(9, (int)v.getAmount());
			pos.setString(10, v.getJunction());
			pos.setString(11, v.getOwner_name());
			pos.setString(12, v.getOfficer_name());
			//System.out.println(v.getOfficer_id());
			
			pos.executeUpdate();
			System.out.println("aaa");
			a=1;
			}catch(Exception e) {
				System.out.println(e);
			}
			return a;
		}
	
	
	public String select_from_challan_between_dates(String s_date,String e_date) {
		ArrayList<challanBO> al = new ArrayList<challanBO>();
		 String jsonStr="";
		try{
			Connection con=getConnection();
			PreparedStatement pos = con.prepareStatement("SELECT * FROM challan WHERE offence_date BETWEEN'"+Date.valueOf(s_date)+"' AND '"+Date.valueOf(e_date)+"'");
			
			
			ResultSet r=pos.executeQuery();
			while(r.next())
			{
			challanBO vb=new challanBO();
			System.out.println("aaaa");

			
			vb.setChallan_id(r.getString("challan_id"));
			vb.setVehicle_number(r.getString("vehicle_number"));
			vb.setOffence(r.getString("offence"));
			vb.setOfficer_id(r.getString("officer_id"));
			vb.setSno(r.getInt("sno"));
			Date d=r.getDate("offence_date");
			vb.setOffence_date(d.toString());
			d=r.getDate("due_date");
			vb.setDue_date(d.toString());
			vb.setPs_circle(r.getString("ps_circle"));
			vb.setAmount(r.getInt("amount"));
			vb.setJunction(r.getString("junction"));
			vb.setOwner_name(r.getString("owner_name"));
			vb.setOfficer_name(r.getString("officer_name"));
			al.add(vb);}
	        Gson gsonObj = new Gson();
	        // converts object to json string
	        jsonStr = gsonObj.toJson(al);
	        System.out.println(jsonStr);
			
		}catch(Exception e) {
			System.out.println(e);
		}
		return jsonStr;
		}
	
	
	public String select_from_challan_by_vehicle_no(String vehicle_number) {
		ArrayList<challanBO> al = new ArrayList<challanBO>();
		 String jsonStr="";
		try{
			Connection con=getConnection();
			PreparedStatement pos = con.prepareStatement("SELECT * FROM challan WHERE vehicle_number ='"+vehicle_number+"'");
			
			
			ResultSet r=pos.executeQuery();
			while(r.next())
			{
			challanBO vb=new challanBO();
			System.out.println("aaaa");

			
			vb.setChallan_id(r.getString("challan_id"));
			vb.setVehicle_number(r.getString("vehicle_number"));
			vb.setOffence(r.getString("offence"));
			vb.setOfficer_id(r.getString("officer_id"));
			vb.setSno(r.getInt("sno"));
			Date d=r.getDate("offence_date");
			vb.setOffence_date(d.toString());
			d=r.getDate("due_date");
			vb.setDue_date(d.toString());
			vb.setPs_circle(r.getString("ps_circle"));
			vb.setAmount(r.getInt("amount"));
			vb.setJunction(r.getString("junction"));
			vb.setOwner_name(r.getString("owner_name"));
			vb.setOfficer_name(r.getString("officer_name"));
			al.add(vb);}
	        Gson gsonObj = new Gson();
	        // converts object to json string
	        jsonStr = gsonObj.toJson(al);
	        System.out.println(jsonStr);
			
		}catch(Exception e) {
			System.out.println(e);
		}
		return jsonStr;
		}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
			getConnection();
			challanBO sg = new challanBO();
			sg.setChallan_id("JAN1001");
			sg.setVehicle_number("UP14AG1234");
			sg.setOffence("101");
			sg.setOfficer_id("TP001");
			sg.setOffence("101");
			sg.setSno(1);
			sg.setOffence_date("2018-07-04");
			sg.setDue_date("2018-07-14");
			sg.setPs_circle("KIETPS");
			sg.setAmount(2000);
		//	insert_in_challan(sg);
			
		//	select_from_challan_by_vehicle_no("UP14AG1234");
	}
}
