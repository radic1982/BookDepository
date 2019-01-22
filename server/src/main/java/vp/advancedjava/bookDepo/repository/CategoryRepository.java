package vp.advancedjava.bookDepo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.advancedjava.bookDepo.model.Category;

@Component
public interface CategoryRepository extends JpaRepository<Category, Long>  {

}
