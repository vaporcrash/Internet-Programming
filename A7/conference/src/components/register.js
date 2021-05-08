import React from 'react';

function Register(){
  return (
    <>
    <header>
      <div style={{backgroundColor:"powderBlue"}}>
        <h1>International Nature Conference - June 10,11,12</h1>
      </div>
    </header>
    <h1 style={{textAlign:"center"}}>Registration form</h1>
    <h4 style={{textAlign:"center"}}>Sign up for the conference here!</h4>
    <form action="/action_page.php" style={{textAlign:"center"}}>
      <label for="name">Name:</label><br/>
      <input type="text" id="name" name="name" value=""/><br/>
      <label for="email">Email:</label><br/>
      <input type="email" id="email" name="email" value=""/><br/>
      <label for="num">Number:</label><br/>
      <input type="tel" id="num" name="num" value=""/><br/>
      <label for="college">College:</label><br/>
      <input type="text" id="college" name="college" value=""/><br/>
      <label for="dept">Department:</label><br/>
      <input type="text" id="dept" name="dept" value=""/><br/>
      <input type="submit" value="Submit"/>
    </form>
    <footer style={{marginTop:"310px"}}>
      <div style={{backgroundColor: "gray"}}>
      <h1>Looking forward to your Participation at our campus this year!</h1>
      </div>
    </footer>
    </>
  );
}

export default Register;
