import React ,{useState}from "react";
import "./companents/css/style.css";
export default function App() {
  const [count,setCount]=useState(0)
  if (count>100) {
    return (
      <>
     
      <center>
  
  
      <div className="red">
    
      <center>
        <div className="square">
  
       <h1 className="h1">{count-count}</h1>
        </div>
       <button className="btnOne" onClick={()=>{setCount(count-count)}}>start</button>
       <button className="btnTwo" onClick={()=>{setCount(count-count)}}>Restart</button>
      </center>
    
      </div>
      </center>
      </>

      
        
        );

        

        
  }else{
    return (
      <>
      <center>
  
  
      <div className="red">
    
      <center>
        <div className="square">
  
       <h1 className="h1">{count}</h1>
        </div>
       <button className="btnOne" onClick={()=>{setCount(count+1)}}>start</button>
       <button className="btnTwo" onClick={()=>{setCount(count-count)}}>Restart</button>
      </center>
    
      </div>
      </center>
      </>
        );
   
  }
}