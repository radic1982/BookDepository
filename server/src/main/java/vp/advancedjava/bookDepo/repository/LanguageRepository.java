package vp.advancedjava.bookDepo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.advancedjava.bookDepo.model.Language;

@Component
public interface LanguageRepository extends JpaRepository<Language, Long> {

}
