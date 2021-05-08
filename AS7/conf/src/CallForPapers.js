import Instagramlogo from '../Images/Instagram Logo1.png';
import Facebooklogo from '../Images/Facebook Logo.png';
import Spotifylogo from '../Images/Spotify Logo.png';

function CallForPapers() {
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
                    <h2 className="section-header">Submission Guidelines</h2>
                    <p>
                        Authors can submit their work in the form of a complete paper or an abstract.Complete papers can be submitted as a Regular Paper, representing completed and validated research, or as a Position Paper, portraying a short report of work in progress or an arguable opinion about an issue discussing ideas, facts, situations, methods, procedures or results of scientific research focused on one of the conference topic areas.
      </p>
                </section>
                <br />
                <section className="content-section container">
                    <h2 className="section-header">Regular Paper</h2>
                    <p>
                        It is recommended that Regular Papers are submitted for review with around 8 to 10 pages, with the appropriate font size and page format, including references, tables, graphs, images and appendices. Submissions with less than 4 pages or more than 13 pages will be automatically rejected.
      </p>
                </section>
                <section className="content-section container">
                    <h2 className="section-header">Position Paper</h2>
                    <p>
                        Position Papers should be submitted for review with around 6 or 7 pages, with the appropriate font size and page format, including references, tables, graphs, images and appendices. Submissions with less than 4 pages or more than 9 pages will be automatically rejected.
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
export default CallForPapers;
