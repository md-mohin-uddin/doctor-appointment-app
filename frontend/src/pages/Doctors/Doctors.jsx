import DoctorCard from "./../../components/Doctors/DoctorCard";
import { doctors } from "./../../assets/data/doctors";
import Testimonial from "../../components/Testimonial/Testimonial";

const Doctors = () => {
  return (
    <>
      {/* Search Section */}
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Doctor Cards Section */}
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[30px]">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text_para text-center">
              World-class care for everyone.Our health system offers unmatched
              ,expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
