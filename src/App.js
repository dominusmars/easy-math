import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CreateTasks from "./containers/CreateTest"
import User from './containers/User';
import Welcome from './containers/Welcome';
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
  const [OpenTests, setOpenTests]= useState(false)
  const gotoPage = (name)=>{
    switch (name) {
      case 'createTest':
        setOpenCreateTest(!OpenCreateTest);
        setOpenHomePage(false);
        setOpenTests(false)
        break;
      case "Home":
        setOpenCreateTest(false);
        setOpenHomePage(!OpenHomePage);
        setOpenTests(false)
        break;
      case "Tests":
        setOpenTests(!OpenTests)
        setOpenCreateTest(false);
        setOpenHomePage(false);
        break;
      default:
        break;
    }
  }
  return (
    <div className="App">
      <Router>
        <User/>

        {OpenHomePage &&  <Welcome />}
        {OpenCreateTest && <CreateTasks Tests={Tests} setTests={setTests}/>}
        
        <Navbar gotoPage={gotoPage} />

      </Router>
      
    </div>
  );
}

export default App;
