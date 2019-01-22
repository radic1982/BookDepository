package vp.advancedjava.bookDepo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vp.advancedjava.bookDepo.model.Ebook;
import vp.advancedjava.bookDepo.service.EbookService;

@RestController
public class EbookController {
	
	@Autowired
	EbookService ebookService;
	
	//@PreAuthorize("hasAnyAuthority('ADMINISTRATOR','SUBSCRIBER')")
	@GetMapping(value = "api/ebooks")
	@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
	public Page<Ebook> getAll(Pageable page, @RequestParam(required = false) String title,
			@RequestParam(required = false) String author){
		final Page<Ebook> retVal;

		if (title == null) {
			
			if (author != null) {
				retVal = ebookService.findByAuthor(author, page);
			} else {
				retVal = ebookService.findAll(page);
			}
		} else {
			
			if (author==null) {
				retVal = ebookService.findByTitle(title, page);
			} else {
				retVal = ebookService.findByAllSearches(title, author, page);
			}
		}

		return retVal;
	}

	@GetMapping(value = "api/ebooks/category/{id}")
	@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
	public ResponseEntity<List<Ebook>>getBookFromCategory(@PathVariable Long id){
		
		List<Ebook> ebooksCat= ebookService.findByCategoryId(id);
		
		return new ResponseEntity<>(ebooksCat, HttpStatus.OK);
		
	}
	
    
    @GetMapping(value = "api/ebooks/{id}")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    public ResponseEntity<Ebook> getBook(@PathVariable Long id) {
        Ebook ebook = ebookService.findOne(id);

        if (ebook == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(ebook, HttpStatus.OK);
    }
    
    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
    @PostMapping(value = "api/ebooks")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    public ResponseEntity<Ebook> create(@RequestBody Ebook ebook) {
        final Ebook savedEbook = ebookService.save(ebook);
        return new ResponseEntity<>(savedEbook, HttpStatus.CREATED);
    }
    
    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
    @PutMapping(value = "api/ebooks/{id}")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    public ResponseEntity<Ebook> update(	@PathVariable Long id,
    									@RequestBody Ebook ebook) {
        Ebook foundEbook = ebookService.findOne(id);
        if (ebook == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        foundEbook.setAuthor(ebook.getAuthor());
        foundEbook.setTitle(ebook.getTitle());
        foundEbook.setPublicationYear(ebook.getPublicationYear());
        foundEbook.setCategory(ebook.getCategory());
        foundEbook.setLanguage(ebook.getLanguage());
       
        //foundEbook.setUser(ebook.getUser());
        
        Ebook savedEbook = ebookService.save(foundEbook);
        return new ResponseEntity<>(savedEbook, HttpStatus.CREATED);
    }
    
    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
    @SuppressWarnings("rawtypes")
	@DeleteMapping(value = "api/ebooks/{id}")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    
    public ResponseEntity delete(@PathVariable Long id) {
        final Ebook ebook = ebookService.findOne(id);
        if (ebook == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        ebookService.remove(id);
        return new ResponseEntity(HttpStatus.OK);
    }

}
