
import AboutBackground from "../Assets/about-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { BsPlayFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="about background" />
      </div>

      <div className="about-section-image-container">
        <img src={BannerImage} alt="about food" />
      </div>

      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>

        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsPlayFill /> Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

