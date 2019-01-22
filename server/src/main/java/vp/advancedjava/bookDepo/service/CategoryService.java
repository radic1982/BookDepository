package vp.advancedjava.bookDepo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.advancedjava.bookDepo.model.Category;
import vp.advancedjava.bookDepo.repository.CategoryRepository;

@Component
public class CategoryService {
	@Autowired 
	private CategoryRepository categoryRepository;
	
	public List<Category> findAll() {
		return categoryRepository.findAll();
	}
	
	public Category findOne(Long id){
		return categoryRepository.findOne(id);
	}
	
	public Category save(Category category){
		return categoryRepository.save(category);
	}

}
