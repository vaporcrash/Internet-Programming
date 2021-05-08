import Instagramlogo from '../Images/Instagram Logo1.png';
import Facebooklogo from '../Images/Facebook Logo.png';
import Spotifylogo from '../Images/Spotify Logo.png';
function Registration() {
    return (
        <>
            <title>ICET 2021</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="style.css" />
            <link rel="stylesheet" href="style1.css" />
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
                    <div className="container1">
                        <form action>
                            <h1 className="main_heading">Payment Form</h1>
                            <p>Required fields are followed by *</p>
                            <h2>Contact information</h2>
                            <p>
                                Name: *<input type="text" name="name" placeholder="Enter your First Name" required />
                            </p>
                            <fieldset>
                                <p>
                                    <legend>Gender *</legend>
              Male <input type="radio" name="gender" required id /> FeMale
              <input type="radio" name="gender" required id />
                                </p>
                            </fieldset>
                            <p>
                                Address:
            <textarea name="address" id="address" cols={100} rows={10} placeholder="Enter your address" defaultValue={""} />
                            </p>
                            <p>
                                Email: *<input type="email" name="email" placeholder="Enter your Email" required id="email" />
                            </p>
                            <p>
                                Pincode:
            <input type="number" name="pincode" placeholder="Enter your pincode" id="pincode" required />
                            </p>
                            <h2>Payement information</h2>
                            <p>
                                Card Type:
            <select name="card_type" id="card_type">
                                    <option value>--Select a Card Type--</option>
                                    <option value="visa">Visa</option>
                                    <option value="mastercard">mastercard</option>
                                    <option value="rupay">rupay</option>
                                </select>
                            </p>
                            <p>
                                Card Number
            <input type="number" name="card_number" id="card_number" placeholder="1111-2222-3333-4444" />
                            </p>
                            <p>Expiration Date <input type="date" name="date" id="date" /></p>
                            <p>CVV: <input type="password" name="cvv" id="cvv" /></p>
                            <input type="submit" defaultValue="Pay Now" />
                        </form>
                    </div>
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
export default Registration
