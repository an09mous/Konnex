import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import io  from "socket.io-client"

const Announcements =() => {
    const SERVER = "http://localhost:5002";  
    const KEY = "konnex123";

    var socket = io(SERVER);
    socket.on('connect', () => { 
        console.log(KEY);
        console.log(socket.emit('clientKey', KEY));
     });

    const [announce, setAnnounce] = useState([]);

    useEffect(() => {
        // axios.get('http://127.0.0.1:5002/api?key=konnex123')
        // .then((response) => {
        //     const data = JSON.parse(response.data)
        //     setAnnounce(data);
        // })
        // .catch((e) => {console.log("error", e)});
    }, [])


    return (
    <div>
    
      <div className="container-fluid hscrollchat">
        <br/>
        <center>
            <h2>Announcements</h2>
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