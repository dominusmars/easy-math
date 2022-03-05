import logo from './logo.svg';
import './App.css';
export { default as Navigation } from "./nav";
export { default as Footer } from "./footer";
export { default as Home } from "./home";


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
              "answer":""
          }
      ]
  }
}


function App() {

  return (
    <div className="App">
      <button>create test</button>
    </div>
  );
}

export default App;
