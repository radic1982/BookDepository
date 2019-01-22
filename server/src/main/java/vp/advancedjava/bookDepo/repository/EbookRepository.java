package vp.advancedjava.bookDepo.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.advancedjava.bookDepo.model.Ebook;

@Component
public interface EbookRepository extends JpaRepository<Ebook, Long>{
	
	Page<Ebook> findByTitle(Pageable page, String title);
	
	Page<Ebook> findByAuthor(Pageable page, String author);
	
	Page<Ebook> findByTitleAndAuthor(Pageable page, String author, String title);
	
	List<Ebook> findByCategoryId( Long categoryId);


}
