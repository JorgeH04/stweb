import React, { Component } from 'react'
//import axios from 'axios'

export default class List extends Component {

    constructor() {
        super();
        this.state = {
          title: '',
          description: ''
        
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
      .then(data => 
        console.log(data));
      
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
            </div>
        )
    }
}