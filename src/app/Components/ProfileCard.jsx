"use client";
import Image from "next/image";
import { useState } from "react";
import { Share2, BadgeCheck } from "lucide-react";
import ProfileImg from "../../../public/Assets/woman.png";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter, FaLocationPin } from "react-icons/fa6";

function ProfileCard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [linkCopy, setLinkCopy] = useState(
    "http://www.nancy-therapist.com/profile/view"
  );

  const handleShareClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(linkCopy);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center relative">
      <Image
        src={ProfileImg}
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full mb-4"
      />
      <Share2
        size={24}
        className="text-blue-500 cursor-pointer absolute top-[8%] right-[8%]"
        onClick={handleShareClick}
      />
      <div className="flex justify-center items-center gap-2">
        <h2 className="text-xl font-semibold text-gray-800">Nancy Rajput</h2>
        <BadgeCheck size={24} className="text-blue-500 " />
      </div>
      <p className="text-gray-800">Consultant Clinical Psychologist</p>
      <p className="text-gray-700 mt-2 font-semibold">
        10+ years of experience
      </p>
      <p className="text-gray-700">
        <b>Starts </b>₹1000/session
      </p>
      <p className="text-gray-700 mb-4 ">Delhi, India</p>

      {/* Modal/Share Dialog */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseDialog}
        >
          <div
            className="bg-white w-96 p-6 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex   justify-between items-center">
              <div className=" text-blue-500 ">Share</div>
              <button
                className=" text-gray-400 text-3xl"
                onClick={handleCloseDialog}
              >
                &times;
              </button>
            </div>
            <div className="flex gap-5 text-gray-600  justify-between mb-4 mt-2">
              <div className="flex items-center flex-col">
                <FaFacebook size={32} className="text-gray-500" />

                <p>Facebook</p>
              </div>
              <div className="flex items-center flex-col">
                <FaWhatsapp size={32} className="text-gray-500" />
                <p>Whatsapp</p>
              </div>
              <div className="flex items-center flex-col">
                <FaSquareXTwitter size={32} className="text-gray-500" />
                <p>X</p>
              </div>
              <div className="flex items-center flex-col">
                <MdEmail size={32} className="text-gray-500" />
                <p>Email</p>
              </div>
            </div>
            <div className="mb-4 flex gap-3">
              <input
                placeholder="http://www.nancy-therapist.com/profile/view"
                type="text"
                value={linkCopy}
                readOnly
                className="flex-1 p-2 border border-gray-300 text-gray-600 rounded-lg"
              />
              <button
                onClick={handleCopyLink}
                className="w-32 border-2 border-blue-500 rounded-full text-blue-500 py-2 hover:text-blue-400  transition"
              >
                Copy Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
