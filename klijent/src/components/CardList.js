import React from 'react';
import Card from './Card';

const CardList = ({ebooks}) => {
    
    const cardComponent = ebooks.map((user,i) =>{
        return <Card key={user.id} id={ebooks[i].id} category={ebooks[i].category.name} title={ebooks[i].title} 
        author={ebooks[i].author} language={ebooks[i].language.name} />
    });
    return(
        <div>
           {/*  <div>
{/* VIDETI SA JASNOM DA LI JE FORMA DOBRA, DA LI TREBA NOVA KOMP ZA PROLAZAK KROZ KATEGORIJE I ZA SEARCH PARAME 
             <form onSubmit={this.onSubmit} class="form form-inline">
               Category:
                <select name="category" value={categories} class="form-control">
                    {categories.map(c=>
                <option key={c.id} value={c.id}>{c.name}</option>
                    )}
                </select>   
                Author:
                <input name="author" value={ebooks.author} onChange={this.onChange} type="text" class="form-control" />
                Title:
                <input name="title" value={ebooks.titke} onChange={this.onChange} type="text" class="form-control" />

                <input type="submit" value="filter" class="btn btn-primary btn-xs" />
                <button class="btn btn-warning btn-xs" onClick="reset()">reset</button>
            </form> 

            </div>  */}
            <div className="row">
                {cardComponent}
            </div>
        </div>
    );

}
export default CardList;
