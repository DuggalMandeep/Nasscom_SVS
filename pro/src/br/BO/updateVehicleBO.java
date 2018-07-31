package br.BO;

public class updateVehicleBO {
	String owner_name;
	String dob;
	String owner_address;
	String city;
	String phone;
	String mail;
	String proof;
	String vehicle_number;
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
	public String getVehicle_number() {
		return vehicle_number;
	}
	public void setVehicle_number(String vehicle_number) {
		this.vehicle_number = vehicle_number;
	}
	public updateVehicleBO(String owner_name, String dob, String owner_address, String city, String phone, String mail,
			String proof, String vehicle_number) {
		super();
		this.owner_name = owner_name;
		this.dob = dob;
		this.owner_address = owner_address;
		this.city = city;
		this.phone = phone;
		this.mail = mail;
		this.proof = proof;
		this.vehicle_number = vehicle_number;
	}
	
	
}
