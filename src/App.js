import logo from './logo.svg';
import './App.css';
import CreateTasks from "./containers/CreateTest"

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
  "tests":{
      "HASHKEY": [
          {
              "question":"",
              "formula":"",
              "answer":""
          }
      ]
  }
}


function App() {

  return (
    <div className="App">
      <CreateTasks />
      <button>create test</button>
    </div>
  );
}

export default App;
