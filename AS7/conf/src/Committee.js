import Instagramlogo from '../Images/Instagram Logo1.png';
import Facebooklogo from '../Images/Facebook Logo.png';
import Spotifylogo from '../Images/Spotify Logo.png';
function Committee() {
    return (
        <>
            <title>ICET 2021</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="style.css" />
            <header className="main-header">
                <h1 className="event-name event-name-large">International Conference on Engineering &amp; Technology</h1>
                <div className="container">
                    <h1>Welcome to ICET 2021</h1>
                    <h2>25th International Conference on Engineering and Technology</h2>
                    <h2>3-4 MARCH 2021<p />
                    </h2><h2>Chennai India<p />
                        <button type="button" className="btn btn-header">Register Now</button>
                    </h2></div>
            </header>
            <div className="box">
                <section className="content-section container">
                    <h2 className="section-header">Organizing Committee</h2>
                    <p>
                        PRESIDENT
      </p><p className="spaced">Dr. Chi-Yuang San (yuang@iser.org.in)</p>
      ORGANIZING COMMITTEE
      <p className="spaced">
                        Dr. Chi-Yuang San (yuang@iser.org.in)<br />
        Marina Filimonova A, Tsyb Medical Radiological Research Centre<br />
        Dr. Oh Hyeong Kwon Kumoh, National Institute of Technology<br />
        Dr. Claudio Pusceddu, Oncology Hospital AOB Cagliari<br />
        Jixin Dong, University of Nebraska Medical Center<br />
        Elise Verron, University of Nantes<br />
        Dr. David Linch, University College Hospital<br />
        Dr. Krishna Gauba, PGIMER, Chandigarh<br />
        Dr Ranjitkumar Patil, King George Medical University India<br />
        Prof. Chetan S. Dhamande, Dept of Computer Science, Jawaharlal Darda Institute of Engineering &amp; Technology<br />
        Mr. Amitkumar S Manekar, Dept of Computer Science, SITRC, Sandip Foundation<br />
        Dr. Dakshina Ranjan Kisku, Dept of Computer Science, National Institute of Technology Durgapur<br />
        Dr.K Indira, Dept of ECE, M. S. Ramaiah Institute of Technology<br />
        Mr. Sayed Abdulhayan, Dept of ECE, DayanandaSagar College of Engineering<br />
        Jagadeesh H S, Dept of ECE, APS College Of Engineering<br />
        Dr. Sudarshan Rao K, Dept of Mechanical Engineering, Shri madhwa Vadiraja Institute of Technology &amp; Management<br />
        Ashwani Kumar Dhingra, Dept of Mechanical Engineering, University Institute of Engineering &amp; Technology<br />
        H M Anil Kumar, Dept of Mechanical Engineering, Ballari Institute of Technology and Management<br />
        Dr. Anshuman Srivastava, Dept of Mechanical Engineering, AIMT Lucknow<br />
        Prof. M.Z. Shaikh, Dept of Civil Engineering, Deogiri Institute of Engineering and Management Studies<br />
        Mr.Ganesh S, Dept. Architecture &amp; Design, PES University<br />
        Mr. Atun Roy Choudhury, Dept of Civil Engineering, Annamalai University<br />
        Dr.Ivvala Anand Shaker, Department of Biochemistry &amp; Central Clinical laboratory, Parul Institute of Medical Sciences<br />
        Dr. Dhoolappa Melinamani, Dept of Anatomy, Veterinary College<br />
        DR. Kaushik Kumar, Birla Institute of Technology
      </p>
                    <p />
                </section>
            </div>
            <br />
            <footer className="main-footer">
                <div className="container main-footer-container">
                    <h3 className="event-name">ICET 2021</h3>
                    <ul className="nav footer-nav">
                        <li>
                            <a href="https://www.spotify.com" target="_blank">
                                <img src={Spotifylogo} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank">
                                <img src={Instagramlogo} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com" target="_blank">
                                <img src={Facebooklogo} />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Committee
