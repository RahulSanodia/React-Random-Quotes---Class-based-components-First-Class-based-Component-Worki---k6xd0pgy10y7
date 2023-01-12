import React from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {
  const [quote,setQuaote]= React.useState(null);
  const  getQuote =()=>{
    fetch("https://api.quotable.io/random")
    .then((response)=>response.json())
    .then((data)=>setQuaote(data));
    document.querySelector('body').style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
  }
  React.useEffect(()=>getQuote(),[]);
if(quote)
    return (
      <div id="main">
        <div id="wrapper">
        <div  id="quote-box">
          <div className="quote-text">
            <i  className=" fa fa-quote-left"></i>
            <span id="text">{quote.content}</span>

          </div>
          <div  className="quote-author">
            -<span id="author">{quote.author}</span>
          </div>

          <div   className="buttons">
            <button className="button" id="new-quote" onClick={getQuote}>New Quote</button>
          </div>
          </div>  
        </div>
      </div>
    );
    return <div> Loading....</div>
};

export default App;
