import React, { Component } from 'react';
import { get } from '../xhr/fetch';
import { getEbook } from '../actions/apiCalls';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (state,ownProps) => {
    console.log(ownProps);
    const ebookId = ownProps.match.params.id;
    console.log(state.getEbook);
    return {
        ebookId: ownProps.match.params.id,
        Kebook: state.getEbook.ebook
    }
}

const mapDispatchToProps = (dispatch) =>{ 
    return { 
        onRequestEbook: (id) => dispatch(getEbook(id))
    }
}


class Details extends Component {

    /* constructor(props) {
        super(props);
        this.state = {
          ebook: {
              id:0,
              title:'',
              author:'',
              publicationYear:0,
              language: {},
              category: {}
          }
        };
      } */

    componentDidMount () {
        /* get('ebooks/'+this.props.match.params.id).then(res =>{
            const book = res.data;
            console.log(book);
            this.setState({ebook: book});

        }) */
        //if (!this.props.Kebook) 
          //  this.props.loadEbook(this.props.ebook);
         this.props.onRequestEbook(this.props.match.params.id)
        
    }
    
    render () {
        const ebook = this.props.Kebook;
        const muka = this.props.match.params.id;
        console.log(ebook);
        console.log(muka);
        const hStyle = {height: '700px'};
        const back = {
            backgroundImage: 'url('+ "https://images.pexels.com/photos/258136/pexels-photo-258136.jpeg?auto=compress&cs=tinysrgb&h=350" + ')',
            minHeight: '100%',
            minWidth : '100%',
            backgroundSize:'100% 100%',
            backgroundRepeat:'no-repeat',
            overflowY: 'hidden',
            overflowX: 'hidden'
        };
        return(
            <div style={back}>  
            <section className="banner-area relative">
			<div className="container">

				<div className="row fullscreen align-items-center justify-content-center" style={hStyle}>
					<div className="banner-left col-lg-6">
                        {/* <img className="d-flex mx-auto img-fluid" src="img/header-img.png" alt=""/> */}
                        <img src="https://media2.giphy.com/media/myub4wKKdR0Wc/200w.webp" width="90%" alt="The Shadowhunter's Codex" className="book-img" itemProp="image"/>
					</div>
					<div className="col-lg-6">
						<div className="story-content">
							<h6 className="text-uppercase">{ebook.author}</h6>
							<h1>Behind Every <span className="sp-1">Author</span><br/>
							There is a <span className="sp-2">Book</span></h1><br/>
                            <h2>Title : {ebook.title}</h2>
                            <h4>Language: {ebook.language.name}</h4> 
                            <h5>Category: {ebook.category.name}</h5>
							<a href="/" className="generic-btn primary circle arrow">Go Back<span className="lnr lnr-arrow-right"></span></a>
						</div>
					</div>
				</div>
			</div>
            
		</section>
        </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Details);
