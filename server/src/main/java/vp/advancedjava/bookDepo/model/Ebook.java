package vp.advancedjava.bookDepo.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Ebook {
	
	@Id
	@GeneratedValue
	private Long id;

	private String title;
	
	private String author;
	
	private int publicationYear;
	
	//private String fileName;
	//@ManyToOne(fetch=FetchType.EAGER)
	//private SecurityUser user;
	
	@ManyToOne(fetch=FetchType.EAGER)
	private Language language;
	
	@ManyToOne(fetch = FetchType.EAGER) 
	private Category category;

	public Ebook() {
		super();
	}

	public Ebook(Long id, String title, String author, int publicationYear, Language language,
			Category category) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.publicationYear = publicationYear;
		this.language = language;
		this.category = category;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getPublicationYear() {
		return publicationYear;
	}

	public void setPublicationYear(int publicationYear) {
		this.publicationYear = publicationYear;
	}

	/*public SecurityUser getUser() {
		return user;
	}

	public void setUser(SecurityUser user) {
		this.user = user;
	}*/

	public Language getLanguage() {
		return language;
	}

	public void setLanguage(Language language) {
		this.language = language;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}
	
	

}
