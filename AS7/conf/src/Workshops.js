import Instagramlogo from '../Images/Instagram Logo1.png';
import Facebooklogo from '../Images/Facebook Logo.png';
import Spotifylogo from '../Images/Spotify Logo.png';
function Workshops() {
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
                    <h2 className="section-header">Workshop Dates will Be Announced Soon.</h2>
                </section>
            </div>
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
export default Workshops
