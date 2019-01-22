package vp.advancedjava.bookDepo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import vp.advancedjava.bookDepo.model.Category;
import vp.advancedjava.bookDepo.service.CategoryService;

@RestController
public class CategoryController {

	@Autowired
    private CategoryService categoryService;

	
    @GetMapping(value = "api/categories")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    public ResponseEntity<List<Category>> getAll() {
        final List<Category> retVal = categoryService.findAll();

        return new ResponseEntity<>(retVal, HttpStatus.OK);
    }
    
    @PutMapping(value = "api/categories/{id}")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    public ResponseEntity<Category> update(@PathVariable Long id, @RequestBody Category category) {
        Category updateCat = categoryService.findOne(id);
        
        if (category == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
        updateCat.setName(category.getName());
        
        Category savedCat = categoryService.save(updateCat);

        return new ResponseEntity<>(savedCat, HttpStatus.CREATED);
    }

}
