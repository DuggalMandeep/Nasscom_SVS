package br.BO;

public class signalBO {
	String signal_id ; 
	String junction ; 
	String pscircle ; 
	String city ;
	String type ; 
	String officer_id ;
	public signalBO(String signal_id, String junction, String pscircle, String city, String type, String officer_id) {
		super();
		this.signal_id = signal_id;
		this.junction = junction;
		this.pscircle = pscircle;
		this.city = city;
		this.type = type;
		this.officer_id = officer_id;
	}
	public signalBO() {
		super();
	}
	public String getSignal_id() {
		return signal_id;
	}
	public void setSignal_id(String signal_id) {
		this.signal_id = signal_id;
	}
	public String getJunction() {
		return junction;
	}
	public void setJunction(String junction) {
		this.junction = junction;
	}
	public String getPscircle() {
		return pscircle;
	}
	public void setPscircle(String pscircle) {
		this.pscircle = pscircle;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getOfficer_id() {
		return officer_id;
	}
	public void setOfficer_id(String officer_id) {
		this.officer_id = officer_id;
	}
	
	
}
