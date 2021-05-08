import React from 'react';

function Contact(){
  return(
    <>
    <header>
      <div style={{backgroundColor:"powderBlue"}}>
        <h1>International Nature Conference - June 10,11,12</h1>
      </div>
    </header>
    <h1>Contact</h1>
   <table style={{margin:"auto"}} cellspacing="20">
     <tr>
       <th>Name</th>
       <th>Email</th>
       <th>Contact No.</th>
     </tr>
     <tr>
       <td>Aditya KP</td>
       <td><a href="mailto:adityakp@gmail.com" style={{textDecoration:"none"}}>adityakp@gmail.com</a></td>
       <td>9444767978</td>
     </tr>
     <tr>
       <td>Avinash Kartik</td>
       <td><a href="mailto:avinash@gmail.com" style={{textDecoration:"none"}}>avinash@gmail.com</a></td>
       <td>9444767989</td>
     </tr>
     <tr>
       <td>Vrishin Vigneshwar</td>
       <td><a href="mailto:vrishin@gmail.com" style={{textDecoration:"none"}}>vrishin@gmail.com</a></td>
       <td>9444767912</td>
     </tr>
     <tr>
       <td>Shivanirudh</td>
       <td><a href="mailto:shiva@gmail.com" style={{textDecoration:"none"}}>shiva@gmail.com</a></td>
       <td>9444762334</td>
     </tr>
   </table>
    <footer style={{marginTop:"356px"}}>
      <div style={{backgroundColor: "gray"}}>
      <h1>Looking forward to your Participation at our campus this year!</h1>
      </div>
    </footer>
    </>
  );
}

export default Contact;
