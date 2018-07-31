package br.servletp;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import br.BO.*;

import com.google.gson.Gson;

@WebServlet("/login")
public class loginc extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public loginc() {
        super();
       
    }

	
	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
	}

	
	

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
        String json = "";
        if(br != null){
            json = br.readLine();
        }
        Gson gson=new Gson();
        Login login=gson.fromJson(json, Login.class);
		System.out.println(login.getUname());
		
		String name=login.getUname();
		String pass=login.getPass();
		
		System.out.println(pass);
		//pw.println("Passi="+pass);
		PrintWriter pw=response.getWriter();
		Connection con=null;
		try {
			String driver="com.mysql.jdbc.Driver";
			String url="jdbc:mysql://localhost:3306/db1";
			String uname="root";
			String pass1="";
			Class.forName(driver);
			con=DriverManager.getConnection(url, uname, pass1);
			System.out.println("Connected");
			PreparedStatement pos = con.prepareStatement("SELECT * FROM login where uname='"+name+"' and pass='"+pass+"';");
			
			
			ResultSet r=pos.executeQuery();
			String message;
			response.setContentType("JSON");
			if(r.next())
			{
				String str="abc";
				
				message = "Done";
				System.out.println("100");
/*				RequestDispatcher rd= request.getRequestDispatcher("dash.html");
				rd.forward(request, response);*/
		  
		        PrintWriter out = response.getWriter();
		        out.print(gson.toJson(str));
		        con.close();
		        out.close();
		        out.flush();	
		        con.close();
			}else {
				String str = "Error";
				PrintWriter out = response.getWriter();
		        out.print(gson.toJson(str));
		       
		        con.close();
		        out.close();
		        out.flush();
			}
		}
		catch(Exception e){
			System.out.println(e);
		}

	}
	
	public void destroy() {
		// TODO Auto-generated method stub
	}

}
