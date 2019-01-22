package vp.advancedjava.bookDepo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import vp.advancedjava.bookDepo.model.SecurityUser;
import vp.advancedjava.bookDepo.repository.UserRepository;

import java.util.Collections;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {
        final SecurityUser user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("No user found with username '%s'.", username)));
        final List<GrantedAuthority> grantedAuthorities = Collections.singletonList(new SimpleGrantedAuthority(user.getRole().name()));

        return new User(user.getUsername(), user.getPassword(), grantedAuthorities);
    }
    
    public SecurityUser register(SecurityUser securityUser) {
		//if (userRepository.findByUsername(securityUser.getUsername()).isPresent()==true) { // username je UNIQUE nije neophodno!
			//return null;
		//} else {
			securityUser.setPassword(passwordEncoder.encode(securityUser.getPassword()));
			return userRepository.save(securityUser);
		//}
	}
    
    public List<SecurityUser>findAll(){
    	return userRepository.findAll();
    }
    
    public SecurityUser findOne(Long id){
    	return userRepository.findOne(id);
    }
    
    public SecurityUser save(SecurityUser user){
    	return userRepository.save(user);
    }

}
