import React, { Component } from 'react'
//import axios from 'axios'

export default class List extends Component {

    constructor() {
        super();
        this.state = {
          title: '',
          description: '',
          posts: []
        
        };
        this.handleChange = this.handleChange.bind(this);
        this.addPost = this.addPost.bind(this);

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
           this.fetchPosts();

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

  deletePost(id){
    //console.log('deleting: ', id)
    if(confirm('Are you sure you want to delete it?')) {
        fetch(`/api/post/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.fetchPosts();
          });
      }
    }



   handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

    render() {
        return (
            <div >
                <div className="col-md-6 offset-md-3">
                   <div className="card card-body">
                     <h4>Create a Note</h4>
                       <form onSubmit={this.addPost}>
                    
                    {/* Name */}
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            
                            name="title"
                            onChange={this.handleChange} 
                            value={this.state.title}
                            required />
                    </div>
                    {/* surname */}
                    <div className="form-group">
                         <input
                            type="text"
                            className="form-control"
                            placeholder="Apellido"
                            name="description"
                            onChange={this.handleChange} 
                            value={this.state.description}
                            required />
                    </div>

                    
                  
                    <button className="btn btn-primary">
                        Save <i className="material-icons">
                            assignment
                             </i>
                    </button>
                </form>
            </div>
          </div>

          {
  this.state.posts.map(post => (
      <li className="list-group-item list-group-item-action" key={post._id} >
         <td> {post.title}</td>
         <td> {post.description} </td>     
         <td>
                            <button onClick={() => this.deletePost(post._id)} className="btn light-blue darken-4">
                              <i className="btn btn-danger">delete</i> 
                            </button>
                            <button onClick={() => this.editPost(post._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                              <i className="btn btn-danger">edit</i>
                            </button>
                          </td>     
      </li>
  ))
}
            </div>





        )
    }
}