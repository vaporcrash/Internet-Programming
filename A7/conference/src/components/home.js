import React from 'react';
import tulum from '../images/tulum.jpeg';
import speaker from '../images/circle-cropped.png';
function Home(){
  return (
    <>
    <header>
    <div style={{backgroundColor:"powderBlue"}}>
      <h1>International Nature Conference - June 10,11,12</h1>
    </div>
    </header>
    <h1>Conference Home Page</h1>
  <p>This is the home page for the International Nature Conference, scheduled to take place at SSN College of Engineering, this June.</p>
   <table style={{margin:"auto"}}>
    <tr><td><img src={tulum} alt="Tulum" style={{marginTop:"15px"}}/></td></tr>
    <tr>
      <td><h1>Purity</h1>
      <p>The sunny shores of Tulum are said to be among the healthiest waters this year, as can be seen from the booming wildlife underwater. This can be witnessed firsthand by scuba diving from any of the numerous tourist centres.</p>
      </td>
    </tr>
  </table>
  <hr/>
  <h1>Keynote Speaker</h1>
  <table>
    <tr><td><img src={speaker} alt="Tulum" style={{marginTop:"15px"}}/></td></tr>
    <tr>
      <td><h1>Sir David Frederick Attenborough</h1>
      <p>An english broadcaster and natural historian, he is definitely one of the most proilific names in this sphere, having voiced and produced numerous nature documentaries to educate children on the importance of natural resources. His knowledge of our planet's ecosystems is unparalled and is sure to impart some vital knowledge during this conference.</p>
      </td>
    </tr>
  </table>
  <hr/>
  <h1>List of topics</h1>
  <ul>
    <li>Re-emerging species</li>
    <li>Loss of ecosystem</li>
    <li>Pollution control systems</li>
    <li>Achievements in the restoring nature</li>
  </ul>
  <footer>
    <div style={{backgroundColor: "gray"}}>
    <h1>Looking forward to your Participation at our campus this year!</h1>
    </div>
  </footer>
  </>
);
}

export default Home;
