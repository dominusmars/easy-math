import logo from './logo.svg';
import './App.css';

import CreateTasks from "./containers/CreateTest"
import Navbar from "./containers/nav"
import { Routes , MemoryRouter as Router} from 'react-router';


window.data = {
  "users":[
      {
          "username": "LAMBALPHA",
          "profilepicture": "https://cdn.discordapp.com/avatars/213789214951604224/a_d19096f911b63a9009c12c2ac26739b0",
          "type":"admin",
          "testing":[
              {
                  "test":"",
                  "score":""
              }
          ]
      }
  ],
  "tests":[
    {
      "testName": "name",
      "test": [
      {
          "question":"",
          "formula":"",
          "answer":""
      }
      ]
  }
      

  ]
}


function App() {
  return (
    <div className="App">
      <Router>
        <CreateTasks />
        <Navbar/>

      </Router>
      
    </div>
  );
}

export default App;
