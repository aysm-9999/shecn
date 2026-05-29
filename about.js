import { Link } from "react-router-dom";

function About() {
    return (
        <div className="about">
            <Link to="/">      <button className="butt2">home</button>
            </Link>

            <h1 className="title">Global Vision, Local Action</h1>
            We are She Can Foundation, a non-governmental organization registered under the Indian Society Act, 1860, dedicated to empowering women and creating a more equitable society. We provide support, resources, and training to women in communities across the globe, working closely with local organizations, governments, and communities to ensure that our programs are effective and sustainable. Through advocacy campaigns and initiatives, we raise awareness of women's issues. We rely on the support of individuals, corporations, and other organizations to achieve our vision. We believe that by working together, we can revolutionize society and create a better world for all.
        </div>

    );
}

export default About;
