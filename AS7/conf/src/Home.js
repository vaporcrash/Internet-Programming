import Instagramlogo from '../Images/Instagram Logo1.png';
import Facebooklogo from '../Images/Facebook Logo.png';
import Spotifylogo from '../Images/Spotify Logo.png';

function Home() {
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
                    <h2 className="section-header">OverView</h2>
                    <p>
                        We cordially invite you to attend the Confernce this year. We welcome
                        all scientists, scholars, students, industrialists to attend and explore
                        their knowledge in the field of Engineering.
        <br />
        This conference is an amalgamation of industrialists, academia where
        they can gear up knowledge in the field of bacteriology.
        <br />
        Our gratitude towards people who are concerned about and we cordially
        invite them to gear up and make the congress a unforgettable successful
        event.
      </p>
                </section>
                <br />
                <section className="content-section container">
                    <h2 className="section-header">Objective</h2>
                    <p>
                        To allow the exchange of ideas, knowledge between the different
                        disciplines for facilitating research, interdisciplinary collaborations
                        is intended to provide a special platform for professionals,
                        academicians, researchers and students working in the area to
                        deliberately exchange opinions and their understandings in front of
                        large transnational listeners.
        <br />
        Focuses more on recent advancements in the field of in treating the
        world with their research ideas. We invite you to join us in the mission
        &amp; take a step ahead along towards finding the greatest approach to
        create the world a better place.
      </p>
                </section>
                <section className="content-section container">
                    <h2 className="section-header">Scope</h2>
                    <p>
                        All the accepted papers will be published in the conference proceedings.
                        All the accepted paper will be published in relevant International
                        Journals.
        <br />
        Accepted paper will be provided with a Digital Object Identifier(DOI)
        number with which they can find their research paper uploaded at the
        doidirectory.com
        <br />
        Awards will be given for the best research paper as well as best paper
        presentation. ISER DELEGATES EXCHANGE PROGRAMME (IDEP): Delegates from
        ISER conferences with brilliant ideas and research initiatives would be
        sent to carry out the research and development activities at overseas,
        abroad and International organisations having collaboration with ISER.
        <br />
        Delegates with research activities and innovative ideas which may be
        beneficiary for humanities will be funded through ISER Research Funding
        Scheme
      </p>
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

export default Home