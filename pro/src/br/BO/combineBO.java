package br.BO;

public class combineBO {
	String challan_id; 
	String vehicle_number; 
	String offence; 
	String officer_id; 
	long sno; 
	String offence_date; 
	String due_date; 
	String ps_circle; 
	int amount;
	String officer_name ; 
	String junction ;
	public combineBO() {
		// TODO Auto-generated constructor stub
	}
	
	public combineBO(String challan_id, String vehicle_number, String offence, String officer_id, long sno,
			String offence_date, String due_date, String ps_circle, int amount, String officer_name, String junction) {
		super();
		this.challan_id = challan_id;
		this.vehicle_number = vehicle_number;
		this.offence = offence;
		this.officer_id = officer_id;
		this.sno = sno;
		this.offence_date = offence_date;
		this.due_date = due_date;
		this.ps_circle = ps_circle;
		this.amount = amount;
		this.officer_name = officer_name;
		this.junction = junction;
	}



	public String getChallan_id() {
		return challan_id;
	}

	public void setChallan_id(String challan_id) {
		this.challan_id = challan_id;
	}

	public String getVehicle_number() {
		return vehicle_number;
	}

	public void setVehicle_number(String vehicle_number) {
		this.vehicle_number = vehicle_number;
	}

	public String getOffence() {
		return offence;
	}

	public void setOffence(String offence) {
		this.offence = offence;
	}

	public String getOfficer_id() {
		return officer_id;
	}

	public void setOfficer_id(String officer_id) {
		this.officer_id = officer_id;
	}

	public long getSno() {
		return sno;
	}

	public void setSno(long sno) {
		this.sno = sno;
	}

	public String getOffence_date() {
		return offence_date;
	}

	public void setOffence_date(String offence_date) {
		this.offence_date = offence_date;
	}

	public String getDue_date() {
		return due_date;
	}

	public void setDue_date(String due_date) {
		this.due_date = due_date;
	}

	public String getPs_circle() {
		return ps_circle;
	}

	public void setPs_circle(String ps_circle) {
		this.ps_circle = ps_circle;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getOfficer_name() {
		return officer_name;
	}

	public void setOfficer_name(String officer_name) {
		this.officer_name = officer_name;
	}

	public String getJunction() {
		return junction;
	}

	public void setJunction(String junction) {
		this.junction = junction;
	}

}
