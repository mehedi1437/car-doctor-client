import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row mt-16">
        <div className="lg:w-1/2 relative ">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 border-8 border-white rounded-lg shadow-2xl absolute top-1/2 left-1/3 " />
        </div>
        <div className="lg:w-1/2 text-white">
            <h3 className="text-[#fe552b] font-bold text-3xl" >About us</h3>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-[#fe552b] border-none  text-white ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
