package com.example.database_connection;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer E_id;
	private String E_name;
	private String Location;
	private String email;
	
	public Integer getE_id() {
		return E_id;
	}
	
	public void setE_id(Integer e_id) {
		E_id = e_id;
	}
	
	public String getE_name() {
		return E_name;
	}
	
	public void setE_name(String e_name) {
		E_name = e_name;
	}
	
	public String getLocation() {
		return Location;
	}
	
	public void setLocation(String location) {
		Location = location;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
}
