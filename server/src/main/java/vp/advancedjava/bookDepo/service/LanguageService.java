package vp.advancedjava.bookDepo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.advancedjava.bookDepo.repository.LanguageRepository;

@Component
public class LanguageService {
	
	@Autowired
	private LanguageRepository languageRepository;

}
