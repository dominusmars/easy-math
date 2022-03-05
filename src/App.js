import logo from './logo.svg';
import Tests from "./containers/Tests.js"
import './App.css';
import { useState } from 'react';
import CreateTasks from "./containers/CreateTest"
import User from './containers/User';
import Navbar from "./containers/nav"
import { MemoryRouter as Router} from 'react-router';


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
  const [Tests, setTests] = useState([]);
  const [OpenCreateTest, setOpenCreateTest] = useState(false);
  const [OpenHomePage, setOpenHomePage] = useState(false);

  const gotoPage = (name)=>{
    switch (name) {
      case 'createTest':
        setOpenCreateTest(!OpenCreateTest);
        break;
    
      default:
        break;
    }
  }
  return (
    <div className="App">
<<<<<<< HEAD
      <CreateTest> </CreateTest>
      <Tests student="seif"/>
      <button>create test</button>
=======
      <Router>
        <User/>
        {OpenCreateTest && <CreateTasks Tests={Tests} setTests={setTests}/>}
        {OpenHomePage}
        <Navbar gotoPage={gotoPage}/>

      </Router>
      
>>>>>>> c0b5cb39890b73ae5bdb97dedc1344693995236e
    </div>
  );
}

export default App;
