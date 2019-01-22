package vp.advancedjava.bookDepo.dto;

import vp.advancedjava.bookDepo.model.SecurityUser;

public class SecurityUserDTO {
	
	private String username;

	private String role;

	private String firstName;

	private String lastName;

	private String password;

	public SecurityUserDTO() {
		super();
	}

	public SecurityUserDTO(SecurityUser user) {
		super();
		this.username = user.getUsername();
		this.role = user.getRole().toString();
		this.firstName = user.getFirstName();
		this.lastName = user.getLastName();
		//this.password = 	kako za password?
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	


}
