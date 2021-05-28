import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import { O_NOFOLLOW } from 'constants';

const Announcements =() => {
    const [announce, setAnnounce] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:5002/api?key=konnex123')
        .then((response) => {
            const data = JSON.parse(response.data)
            setAnnounce(data);
        })
        .catch((e) => {console.log("error", e)});
    }, [])

    return (
    <div>
    
      <div className="container-fluid hscrollchat">
        <br/>
        <center>
            <h2>Navigation</h2>
            { announce.map(a => <div>
                <Card className="container-fluid bg-white text-dark">
                    <Card.Body className="m-0">
                        {a.title}
                    </Card.Body>
                    <Card.Footer>
                        {a.timestamp}
                    </Card.Footer>
                </Card>
                <br /></div>)}
        </center>
      </div>
</div>
    )
  }

  
export default Announcements;