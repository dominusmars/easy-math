import logo from './logo.svg';
import Tests from "./containers/Tests.js"
import './App.css';

import CreateTest from "./containers/CreateTest"



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
      <CreateTest> </CreateTest>
      <Tests student="seif"/>
      <button>create test</button>
    </div>
  );
}

export default App;
