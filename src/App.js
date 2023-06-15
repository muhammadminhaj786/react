import "./App.css";
import { useEffect, useState } from "react";
import Heading from "./component/Heading";
import Input from "./component/Input";

function App() {
  const [name, setName] = useState("ali");
  const [userData, setUserData] = useState([]);

  useEffect(()=>{
    getUserData();
  },[])

  const getUserData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    setUserData(data);
  }
  return (
    <div className="App">
      
      <header className="App-header">
        <Heading name={name} color={"red"} />
        <button
          onClick={() => {
            setName('minhaj');
          }}
        >
          Click me
        </button>
        <div>
          <Input />
        </div>
        {
          userData.map((user)=>{
            return (
              <Heading name={user.name} color={"red"} /> 
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
