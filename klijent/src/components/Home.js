import React, { Component } from 'react';
import { get } from '../xhr/fetch';
import CardList from './CardList';
import { getEbooks, getCategories } from '../actions/apiCalls';
import { connect } from 'react-redux';

const mapStateToProps = (state,ownProps) => {
    console.log(ownProps);
    return {
        ebookse: state.getEbooks.ebooks,
        categories: state.getCategories.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestEbooks: () => dispatch(getEbooks()),
        onRequestCategories: () => dispatch(getCategories())
    }

}

export class Home extends Component {
    /* constructor(props) {
        super(props);
        this.state = {
            ebooks: []
        };
         
    } */

    componentDidMount(){
        /* get('ebooks').then((res)=>{
           // this.setState({ebooks: res.data.content})
            const book = res.data.content;
            console.log(book);
            this.setState({ebooks: book});
        }) */

        this.props.onRequestEbooks();
        this.props.onRequestCategories();
        
    }
    
    render () {
        const filterEbooks = this.props.ebookse;
        const filterCategories = this.props.categories;
        console.log(filterEbooks);
        console.log(filterCategories);
          return(
              <div>
                  
                <CardList ebooks={filterEbooks}/>
              </div>
          )
              
            
      }
}
export default connect (mapStateToProps, mapDispatchToProps) (Home);

    
