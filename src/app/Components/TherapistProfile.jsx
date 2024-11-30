"use client";
import { Clock, HousePlus, Phone, ArrowLeft, ChevronDown } from "lucide-react";
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import { TbCertificate } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiBagSimpleFill } from "react-icons/pi";
import Link from "next/link";

const TherapistProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const testimonials = [
    {
      text: "A compassionate listener who truly understands and guides with care.",
      author: "Dipti",
    },
    {
      text: "A safe space where growth and self-discovery thrive.",
      author: "Raj",
    },
    {
      text: "Helped me navigate challenges with empathy and wisdom.",
      author: "Aman",
    },
    {
      text: "The perfect balance of professionalism and genuine care.",
      author: "Swayam",
    },
  ];

  const therapyTypes = [
    "Stress Management",
    "Relationship Issues",
    "Anxiety Reduction",
    "Depression Relief",
    "Self-esteem",
    "Decision Making",
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="lg:hidden bg-blue-500 p-4 text-white">
        <div className="flex items-center cursor-pointer mb-4">
          <ArrowLeft className="w-6 h-6 mr-2 " />
          <span>Back</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="bg-blue-500 h-screen p-4 lg:p-6 text-white lg:sticky lg:top-0">
              <div className="hidden lg:flex items-center mb-6">
                <ArrowLeft className="w-6 h-6 mr-2" />
                <span>Back</span>
              </div>

              <ProfileCard />
              <div className="flex justify-center m-4">
                <Link href="">
                  <button className="bg-white  text-blue-500 font-semibold py-3 px-7 rounded-full hover:bg-gray-200 hover:text-blue-600 transition">
                    Book session
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 p-4 lg:p-8">
            <section className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                About me
              </h3>
              <p className="text-gray-600 text-sm">
                Hello, I am Nancy, a licensed therapist dedicated to guiding
                individuals through life challenges with empathy and expertise.
                With over 5 years of experience, I specialize in helping clients
                manage anxiety, depression, and relationship issues through
                personalized, evidence-based practices.
                {isExpanded && (
                  <>
                    {" "}
                    My commitment to continuous learning keeps me updated with
                    the latest therapeutic techniques, allowing me to provide
                    the best possible care. Whether you seek stress management
                    strategies or personal growth, I am here to empower you on
                    your journey towards emotional well-being. I offer
                    convenient online consultation bookings, making it easier
                    for you to take the first step towards a healthier, happier
                    life.
                  </>
                )}
                <span
                  onClick={toggleText}
                  className="text-blue-500 ml-1 cursor-pointer hover:underline"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </span>
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-lg text-gray-700 font-semibold mb-2">
                Credentials
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <LiaCertificateSolid size={28} />
                  </div>
                  Ph.D. in Clinical Psychology - Harvard University
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <LiaCertificateSolid size={28} />
                  </div>
                  M.A. in Counseling - University of California, Berkeley
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <TbCertificate size={24} />
                  </div>
                  Licensed Professional counseler (LPC) - State Of DEF
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <TbCertificate size={24} />
                  </div>
                  Certified Cognitive Behavioral Therapist (CBT)
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <PiBagSimpleFill size={28} />
                  </div>
                  8+ Years of experience in individual and group therapy
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700  mb-2">
                Available on
              </h3>
              <div className="flex gap-10 ">
                <div className="cursor-pointer">
                  <div className=" h-20 w-20 flex justify-center items-center bg-blue-100 rounded-lg">
                    <HousePlus size={24} className="text-blue-400" />
                  </div>
                  <span className="text-bold flex justify-center  text-gray-700">
                    In-person
                  </span>
                </div>
                <div className="cursor-pointer">
                  <div className=" h-20 w-20 flex justify-center items-center bg-blue-100 rounded-lg">
                    <Phone size={24} className="text-blue-400" />
                  </div>
                  <span className="text-bold flex justify-center  text-gray-700">
                    Video/Voice Call
                  </span>
                </div>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700  mb-2">
                I offer therapy for
              </h3>
              <div className="flex flex-wrap gap-2">
                {therapyTypes.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-50 px-3 py-1 border border-blue-300 rounded-full text-sm text-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <div className="flex justify-between mb-6">
              <div>
                <h3 className="text-lg text-gray-700  font-semibold mb-2">
                  I am from
                </h3>
                <p className="text-sm  text-gray-600">Indore, India</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-700 ">
                  Languages
                </h3>
                <p className="text-sm text-gray-600">English, Hindi</p>
              </div>
            </div>

            <section>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-700 ">
                  Client Testimonials
                </h3>
                <button className="text-sm text-blue-500 flex items-center">
                  View more
                  <ChevronDown size={15} className="text-blue-400" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-[4px_4px_8px_rgba(0,0,0,0.3)] rounded-lg p-5 max-w-sm mx-auto"
                  >
                    <div className="text-blue-500 text-4xl mb-4">“</div>
                    <p className="text-gray-800 text-lg mb-4">
                      {testimonial.text}
                    </p>
                    <p className="text-gray-500 font-semibold">
                      {testimonial.author}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistProfile;
