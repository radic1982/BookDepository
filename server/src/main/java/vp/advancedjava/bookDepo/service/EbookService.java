package vp.advancedjava.bookDepo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.advancedjava.bookDepo.model.Ebook;
import vp.advancedjava.bookDepo.repository.EbookRepository;

@Component
public class EbookService {
	
	@Autowired
	EbookRepository ebookRepository;
	
	public Page<Ebook> findAll(Pageable page) {
		return ebookRepository.findAll(page);
	}

	public Ebook findOne(Long id) {
		return ebookRepository.findOne(id);
	}

	public Ebook save(Ebook ebook) {
		return ebookRepository.save(ebook);
	}

	public void remove(Long id) {
		ebookRepository.delete(id);
	}
	
	public Page<Ebook> findByAllSearches(String title,String author,Pageable page){
		return ebookRepository.findByTitleAndAuthor(page, author, title);
	}
	public Page<Ebook> findByTitle(String title,Pageable page){
		return ebookRepository.findByTitle(page, title);
	}
	
	public Page<Ebook> findByAuthor(String author,Pageable page){
		return ebookRepository.findByAuthor(page, author);
	}
	
	public List<Ebook> findByCategoryId(Long categoryId){
		return ebookRepository.findByCategoryId(categoryId);
	}


}
