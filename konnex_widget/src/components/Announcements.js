import React,{Component} from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import { O_NOFOLLOW } from 'constants';

class Announcements extends React.Component {
  state = {
    announce: [{"name":"announcement 1 this is a sample annoncement along with the date below it. ","timestamp":Date()},
    {"name":"announcement 2 this is a sample annoncement along with the date below it. ","timestamp":Date()},
    {"name":"announcement 3 this is a sample annoncement along with the date below it. ","timestamp":Date()}
                
    ]
  }

  componentDidMount() {
    /*axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const announce = res.data;
        this.setState({ announce });
      })*/
  }

  render() {
    return (
<div>
    
      <div className="container-fluid hscrollchat">
          <br />
        { this.state.announce.map(a => <div>
            <Card className="container-fluid bg-white text-dark">
                <Card.Body className="m-0">
                    {a.name}
                </Card.Body>
                <Card.Footer>
                    {a.timestamp}
                </Card.Footer>
            </Card>
            
            <br /></div>)}
      </div>
</div>
    )
  }
}

  
export default Announcements;