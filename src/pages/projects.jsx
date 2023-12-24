import Footer from "../components/footer";
import Header from "../components/header";
import comingSoon from "../assets/comingsoon.jpg";
const Projects = () => {
  return (
    <>
      <Header />
      <div className="projects-container pt-20">
        <h2 className="text-4xl text-center p-3 font-semibold">Projects</h2>
      </div>
      <div className="upcoming-projects-container mb-40 mb:mb-0 lg:max-h-1/2">
        <img src={comingSoon} alt="" id="coming-soon" className="h-3/4 w-5/6 sm:w-fit sm:h-fit "/>
        <div className="maintenance-message">
          <h3 className=" coming-soon-message font-bold text-2xl text-center">We are Under Maintenance</h3>
          <h4 className="coming-soon-message text-center p-2 font-semibold">We will come back soon</h4>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;
