import './App.css';
import { useState } from 'react';

function App() {
  
  const [details,setDetails]=useState(
    {
      author:'',
      title:'',
      blog:''
    }
  );
  
  
function HandleAuthorinput(e){
 setDetails({
  
  ...details,
  author:e.target.value,
});
}
function HandleTitleinput(e){
  setDetails(
    {
      ...details,
      title:e.target.value
    }
  );
}

function HandleBloginput(e){
  setDetails({
    ...details,
    blog:e.target.value
  });
}

  let date = new Date();
  
 return (
  <>
  <label htmlFor="author" className="lab">Enter your cute name:</label>
  <input type="text" id="author" onChange={HandleAuthorinput} className="author"></input>
  <label htmlFor="title" className="lab">Enter the Title:</label>
  <input type="text" id="title" onChange={HandleTitleinput} className="title"></input>
  <label htmlFor="blog" className="lab">Enter your blog:</label>
  <input type="text" id="blog" onChange={HandleBloginput} class="blog"></input>
 
<button type="button"  className="button-f">submit</button>
<h5 className="date-d">{date.toLocaleDateString()}</h5>
          <h4 className="title1">{details.title}</h4>
    <p className="ip1">{details.blog}</p>
    <h6 className="author1">Blog By: {details.author}</h6>
    <footer class="foot">
      <h6>{"Copyrights@Bavya"}</h6>
      <h6>{"bavya295@gmail.com"}</h6>
    </footer>
  </>
);
}

export default App;
