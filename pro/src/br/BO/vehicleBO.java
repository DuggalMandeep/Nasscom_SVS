package br.BO;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class vehicleBO {
	String vehicle_number; 
	String Category; 
	int y_o_r; 
	String manufacturer;// varchar(20) 
	String model;// varchar(ZZ20) 
	String fuel;// enum('petrol','diesel','electric') 
	String color;// varchar(10) 
	String owner_name;// varchar(20) 
	String dob;// int(11) 
	String owner_address;// varchar(20) 
	String city;// varchar(20) 
	String phone;// decimal(10,0) 
	String mail;// varchar(20)
	String proof;
	
	public vehicleBO() {
		super();
	}
	public vehicleBO(String vehicle_number,String manufacturer,String y_o_r, String model, String category, String fuel,
			String color, String owner_name, String age, String owner_address, String owner_city, String phone,
			String email, String proof) throws ParseException {
		super();
		this.vehicle_number = vehicle_number;
		this.manufacturer = manufacturer;
		this.y_o_r = Integer.parseInt(y_o_r);
		this.model = model;
		this.Category = category;
		this.fuel = fuel;
		this.color = color;
		this.owner_name = owner_name;
		this.dob = age;
		this.owner_address = owner_address;
		this.city = owner_city;
		this.phone = phone;
		this.mail = email;
		this.proof = proof;
	}
	public String getVehicle_number() {
		return vehicle_number;
	}
	public void setVehicle_number(String vehicle_number) {
		this.vehicle_number = vehicle_number;
	}
	public String getCategory() {
		return Category;
	}
	public void setCategory(String category) {
		Category = category;
	}
	public int getY_o_r() {
		return y_o_r;
	}
	public void setY_o_r(int y_o_r) {
		this.y_o_r = y_o_r;
	}
	public String getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getFuel() {
		return fuel;
	}
	public void setFuel(String fuel) {
		this.fuel = fuel;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getOwner_name() {
		return owner_name;
	}
	public void setOwner_name(String owner_name) {
		this.owner_name = owner_name;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getOwner_address() {
		return owner_address;
	}
	public void setOwner_address(String owner_address) {
		this.owner_address = owner_address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getProof() {
		return proof;
	}
	public void setProof(String proof) {
		this.proof = proof;
	}

	
	

		
}
