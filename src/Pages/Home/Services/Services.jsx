import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-dusky-ten.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div className="mt-10">
      <div className="text-center space-y-5">
        <h3 className="text-2xl font-bold text-center text-[#fe552b]">
          Our Services
        </h3>

        <h3 className="text-5xl text-center ">Our Services Area</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          eveniet repellat repudiandae dolores, <br /> fugit asperiores. Veniam
          corporis ratione accusamus eos, autem hic id quam culpa similique ea
          repellat officiis quia?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={service.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <p className="text-xl text-[#fe552b]">Price : {service.price}</p>
              <div className="card-actions justify-start">
                <button className="btn bg-[#fe552b] text-xl text-white ">
                  {" "}
                  <Link to={`/cheakout/${service._id}`}>
                    <HiArrowNarrowRight />
                  </Link>{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
