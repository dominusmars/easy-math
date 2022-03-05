import logo from './logo.svg';
import './App.css';
import Nav from "./containers/nav.jsx";
import Footer from "./containers/footer.jsx";
import Home from "./containers/home.jsx";


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

      <Nav />

      <Home />

      <Footer />

      <button> create test </button>
    </div>
  );
}

export default App;
