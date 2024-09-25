import React, { useEffect, useState } from "react";

function Todo() {
  let [count, setCount] = useState(0);
  let [city, setCity] = useState("Bhopal");
  let [Api,setApi] = useState([])
  useEffect(() => {
    console.log("Done");
    fetch('https://json-placeholder.mock.beeceptor.com/companies')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setApi(data)
      });
  }, []);

  function fun1() {
   setCount( count +1)
  }

  function fun2() {
    setCity("Delhi");
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={fun1}>Add</button>
      <h1>{city}</h1>
      <button onClick={fun2}>change</button>
      {
        Api.map ((val)=>{
          return(
            <>
            
            <h2>{val.id}</h2>
            <h2>{val.name}</h2>
            
            </>
          )
        })
      }
    </div>
  );
}

export default Todo;
