import React, { Component } from 'react';
import { get } from '../xhr/fetch';
import { Link } from 'react-router-dom';

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
         users: [],
         ebooks: []
        };
    }
    componentDidMount () {
        get('users').then(res=>{
            const user = res.data;
            console.log(user);
            this.setState({users: user});
        });
        get('ebooks').then(res=>{
            const ebook = res.data.content;
            console.log(ebook);
            this.setState({ebooks: ebook})
        });
    }

    render () {
        const filterEbooks = this.state.ebooks;
        const filterUser = this.state.users;
        const back = {
            backgroundImage: 'url('+ "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&h=350" + ')',
            minHeight: '100%',
            minWidth : '100%',
            backgroundSize:'100% 100%',
            backgroundRepeat:'no-repeat',
            overflowY: 'hidden',
            overflowX: 'hidden'
        };
        return(
           
            <div style={back}>
                <div className="row1 text-white">
                    <h1>USERS</h1>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    
                    <button className="btn pull-right" onClick="changePage(-1)">b</button>
                    <button className="btn pull-right" onClick="changePage(1)">f</button>
                    
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {filterUser.map(c =>
                            <tr >
                                <td>{c.id}</td>
                                <td>{c.username}</td>
                                <td>{c.firstName}</td>
                                <td>{c.lastName}</td>
                                <td>
                                <button onClick="deleteComponent(component.id)" class="btn btn-danger">delete</button>
                                <button onClick="setActiveComponent(component)" class="btn btn-warning">edit</button> 
                                </td>
                                </tr>
                        )}
                        </tbody>
                    </table>
        
                    </div>
                <div class="col-md-2">
                        
                </div>

            </div>
                <div className="row2 text-white">
                    <h1>EBOOKS</h1>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <button className="btn btn-primary pull-right" onClick="changePage(-1)"></button>
                    <button className="btn btn-primary pull-right" onClick="changePage(1)"></button>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {filterEbooks.map(c =>
                            <tr >
                                <td>{c.id}</td>
                                <td>{c.title}</td>
                                <td>{c.author}</td>
                                <td>
                                <button onClick="deleteComponent(component.id)" class="btn btn-danger">delete</button>
                                <button onClick="setActiveComponent(component)" class="btn btn-warning">edit</button> 
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
        
                    </div>
                    <div class="col-md-2">
                            
                    </div>
                </div>
            </div>
              
          )
      }
}   
export default Admin;