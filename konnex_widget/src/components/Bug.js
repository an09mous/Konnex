import React,{Component} from 'react';

class Bug extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    /*state = {
      announce: [{"name":"announcement 1 this is a sample annoncement along with the date below it. ","timestamp":Date()},
      {"name":"announcement 2 this is a sample annoncement along with the date below it. ","timestamp":Date()},
      {"name":"announcement 3 this is a sample annoncement along with the date below it. ","timestamp":Date()}
                  
      ],
      title:'',
      desc:'',
      images:'',
    }*/
    componentDidMount() {
        /*axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const announce = res.data;
            this.setState({ announce });
          })*/
      }
      handleChange = event => {
        this.setState({ name: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();

        /*axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })*/
      }    
render(){
  return (
    <div>
    
    <form className="pd-50">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" className="form-control" id="title" aria-describedby="emailHelp"onChange={this.handleChange}  placeholder="Enter title"/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea name="desc" className="form-control" id="description" onChange={this.handleChange} rows={3}></textarea>
      </div>
      
      <div className="form-group">
        <label htmlFor="images">Attach images</label>
        <input type="file" name="images" className="form-control" id="images" onChange={this.handleChange} multiple />
      </div>
      
      <center><button type="submit" className="btn btn-primary">Submit</button></center>
    </form>
    
    </div>
  )

}
}
export default Bug;