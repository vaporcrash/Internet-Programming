import React from 'react';

function Committee(){
  return(
      <>
        <header>
        <div style={{backgroundColor:"powderBlue"}}>
          <h1>International Nature Conference - June 10,11,12</h1>
        </div>
        </header>
        <h1>Conducting Committee</h1>
    <p> This is the committee that has organized every facet of the conference</p>
    <table cellspacing="20" style={{margin:"auto"}}>
      <tr>
        <th>Committee</th>
        <th>Committee Head</th>
        <th>Department</th>
        <th>Contact</th>
      </tr>
      <tr>
        <td><h4>Fauna Committee</h4></td>
        <td><h4>Aditya KP</h4></td>
        <td><h4>CSE</h4></td>
        <td><h4><a href="mailto:adityakp@gmail.com" style={{textDecoration:"none"}}>adityakp@gmail.com</a></h4></td>
      </tr>
      <tr>
        <td><h4>Flora Committee</h4></td>
        <td><h4>Avinash Kartik</h4></td>
        <td><h4>CSE</h4></td>
        <td><h4><a href="mailto:avinash@gmail.com" style={{textDecoration:"none"}}>avinash@gmail.com</a></h4></td>
      </tr>
      <tr>
        <td><h4>Decorations Committee</h4></td>
        <td><h4>Vrishin Vigneshwar</h4></td>
        <td><h4>CSE</h4></td>
        <td><h4><a href="mailto:vrishin@gmail.com" style={{textDecoration:"none"}}>vrishin@gmail.com</a></h4></td>
      </tr>
      <tr>
        <td><h4>Logistics Committee</h4></td>
        <td><h4>Shivanirudh</h4></td>
        <td><h4>CSE</h4></td>
        <td><h4><a href="mailto:shiva@gmail.com" style={{textDecoration:"none"}}>shiva@gmail.com</a></h4></td>
      </tr>
    </table>
    <footer style={{marginTop: 153}}>
      <div style={{backgroundColor: "gray"}}>
      <h1>Looking forward to your Participation at our campus this year!</h1>
      </div>
    </footer>
    </>
  );
}

export default Committee;
