import React, { Component } from 'react'
//import axios from 'axios'

export default class Salary extends Component {

  
    constructor() {
        super();
        this.state = {
          title: '',
          description: '',
          posts: []
        
        };


      }

      addPost(e){
        fetch('/api/post',{
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
          }
        })
        .then(res => res.json(res))
        .then(data => {
            console.log(data)
            this.setState({title: '', description: ''});
        })
        .catch(err => console.error(err));
        console.log(this.state);
        e.preventDefault();
       
    }
 
    
      componentDidMount() {
        this.fetchPosts();
    
      }
    
       fetchPosts() {
        fetch('/api/post')
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({posts: data});
            //console.log(this.state.posts)
          });

          
      }

    render() {
        return (
            <div >


                {
  this.state.posts.map(post => (
      <li className="list-group-item list-group-item-action" key={post._id} >
         <td> {post.title}</td>
         <td> {post.description} </td>     
           
      </li>
  ))
}



            </div>
        )
    }
}