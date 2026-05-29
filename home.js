import { Link } from "react-router-dom";
import "./home.css"

function Home() {
    return (
        <div>
            <Link to="/About">      <button className="butt2">About</button>
            </Link>

            <img className="lopi" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg"></img>
            <div className="text1">
                She Can
            </div>
            <div className="text2">
                "Together we can change the World"
            </div>


        </div>

    );
}

export default Home;
