import React from 'react';
import { Link } from 'react-router-dom';




const Card = (props) => {
    //console.log(props.categories);
    return (
            
            <div className="col-lg-4 col-sm-6">
                <div className="card-deck">
                    <div className="card text-white bg-dark mt-4">
                    <div className="card-header">{props.category}</div>
                    <Link to={`/detail/${props.id}`} className="card-link">
                    <img className="card-img-top" src="https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Card image top" />
                    </Link>
                    <div className="card-body">
                    <h5 className="card-title">{props.author}</h5>
                    <p className="card-text">{props.title}</p>
                    <p className="card-text">{props.language}</p>
                    </div>
                    </div>
                </div>   
            </div>
           
            

    );
     
}

export default Card;
