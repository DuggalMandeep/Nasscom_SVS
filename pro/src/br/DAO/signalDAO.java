package br.DAO;
import br.BO.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.google.gson.Gson;
public class signalDAO {
	
	public signalDAO() {
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
	
	
	
	public int insert_in_signal(signalBO v) {
		// TODO Auto-generated method stub
		int a=-1;
			try{
				Connection con=getConnection();
				
		PreparedStatement pos = con.prepareStatement("INSERT INTO signals(signal_id,junction,pscircle,city,type1,officer_id) VALUES(?,?,?,?,?,?);");
			pos.setString(1, v.getSignal_id());
			pos.setString(2, v.getJunction());
			System.out.println(v.getJunction());
			pos.setString(3, v.getPscircle());
			pos.setString(4, v.getCity());
			pos.setString(5, v.getType());
			pos.setString(6, v.getOfficer_id());
			System.out.println(v.getOfficer_id());
			pos.executeUpdate();
			System.out.println("aaa");
			a=1;
			}catch(Exception e) {
				System.out.println(e);
			}
			return a;
		}
	
	
	public String select_from_signal(String junction,String city) {
		ArrayList<signalBO> al = new ArrayList<signalBO>();
		 String jsonStr="";
		try{
			Connection con=getConnection();
			PreparedStatement pos = con.prepareStatement("SELECT * FROM signals where junction='"+junction+"' and city= '"+city+"'");
			
			
			ResultSet r=pos.executeQuery();
			while(r.next())
			{
			signalBO vb=new signalBO();
			System.out.println("aaaa");
			
			
			vb.setSignal_id(r.getString("signal_id"));
			vb.setJunction(r.getString("junction"));
			vb.setPscircle(r.getString("pscircle"));
			vb.setCity(r.getString("city"));
			vb.setType(r.getString("type1"));
			vb.setOfficer_id(r.getString("officer_id"));
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
			signalBO sg = new signalBO();
			sg.setSignal_id("T61001");
			sg.setJunction("KIET");
			sg.setPscircle("KIETPS");
			sg.setCity("Duhai");
			sg.setType("T6");
			sg.setOfficer_id("TP001");
		//	insert_in_signal(sg);
		//	select_from_signal("KIET","Duhai");
	}
}
