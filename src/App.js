import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {
  async function apicall1(){
    try{
    var config = {
      method: 'get',
      url: 'https://pinoytravels.live/api/user?limit=10&page=1',
      withCredentials: true, // should be there
      credentials: 'include',
    };
    const response = await axios(config);
    console.log(response.data);
  }
  catch(error){
    console.log(error);
  }
  }
  async function apicall2(){
    try{
    var config = {
      method: 'post',
      url: 'https://pinoytravels.live/api/user/logout',
      withCredentials: true, // should be there
      credentials: 'include',
    }
    const response = await axios(config);
    console.log(response.data);
  }
  catch(error){
    console.log(error);
  }
  }

  async function apicall () {
    const data ={
      "email": "rvce.anjali@gmail.com",
      "password": "Aksbkcv9267652"
    };
    //send req.cookies={token:} http://3.110.123.236:8080
    var config = {
      method: 'post',
      url: 'https://pinoytravels.live/api/user/login',
      withCredentials: true, // should be there
      credentials: 'include',
      data: data
    };
    
    axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
}
);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* add button here */}
        <button onClick={apicall}>Login</button>
        <button onClick={apicall1}>Display</button>
        <button onClick={apicall2}>Logout</button>
      </header>
    </div>
  );
}

export default App;
