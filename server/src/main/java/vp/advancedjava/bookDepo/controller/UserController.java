package vp.advancedjava.bookDepo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import vp.advancedjava.bookDepo.dto.LoginDTO;
import vp.advancedjava.bookDepo.dto.SecurityUserDTO;
import vp.advancedjava.bookDepo.dto.TokenDTO;
import vp.advancedjava.bookDepo.model.Role;
import vp.advancedjava.bookDepo.model.SecurityUser;
import vp.advancedjava.bookDepo.security.TokenUtils;
import vp.advancedjava.bookDepo.service.UserDetailsServiceImpl;

@RestController
public class UserController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    TokenUtils tokenUtils;

    @PostMapping(value = "/api/login")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    public ResponseEntity<TokenDTO> login(@RequestBody LoginDTO loginDTO) {
        try {
            final UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword());
            final Authentication authentication = authenticationManager.authenticate(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            final UserDetails details = userDetailsService.loadUserByUsername(loginDTO.getUsername());
            final String genToken = tokenUtils.generateToken(details);

            return new ResponseEntity<>(new TokenDTO(genToken), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(new TokenDTO(""), HttpStatus.BAD_REQUEST);
        }
    }
    
    @GetMapping(value = "/api/users")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    public ResponseEntity<List<SecurityUserDTO>>getUsers(){
    	List<SecurityUser> users = userDetailsService.findAll();
    	
    	List<SecurityUserDTO> usersDto = users
    			.stream()
    			.map(u ->new SecurityUserDTO(u))
    			.collect(Collectors.toList());
    	
    	return new ResponseEntity<>(usersDto, HttpStatus.OK);		
    }
    
    @PutMapping(value = "/api/users/{id}")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    public ResponseEntity<SecurityUserDTO>update(@PathVariable Long id, @RequestBody SecurityUserDTO userDTO){
		SecurityUser user = userDetailsService.findOne(id);
		
		user.setFirstName(userDTO.getFirstName());
		user.setLastName(userDTO.getLastName());
		if (userDTO.getRole().equals("SUBSCRIBER")) {
			user.setRole(Role.SUBSCRIBER);
		} else if (userDTO.getRole().equals("ADMINISTRATOR")) {
			user.setRole(Role.ADMINISTRATOR);
		}
		SecurityUser savedUser=userDetailsService.save(user);
		
		
    	
    	return new ResponseEntity<>(new SecurityUserDTO(savedUser), HttpStatus.CREATED);
    	
    }
    
    
    @PostMapping(value = "/api/register")
	public boolean register(@RequestBody SecurityUserDTO userDTO) {

		SecurityUser newUser = new SecurityUser();

		newUser.setUsername(userDTO.getUsername());
		newUser.setPassword(userDTO.getPassword());
		newUser.setFirstName(userDTO.getFirstName());
		newUser.setLastName(userDTO.getLastName());


		if (userDTO.getRole().equals("SUBSCRIBER")) {
			newUser.setRole(Role.SUBSCRIBER);
		} else if (userDTO.getRole().equals("ADMINISTRATOR")) {
			newUser.setRole(Role.ADMINISTRATOR);
		}

		if (userDetailsService != null) {
			return true;
		} else
			return false;

	}

}
