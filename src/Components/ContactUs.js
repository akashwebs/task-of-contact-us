import React from "react";
import send from "../Assetes/icons/send.png";
import facebook from "../Assetes/icons/facebook.png";
import inbox from "../Assetes/icons/inbox.png";
import instagram from "../Assetes/icons/instagram.png";
import location from "../Assetes/icons/location.png";
import phone from "../Assetes/icons/phone.png";
import twitter from "../Assetes/icons/twitter.png";
import youtube from "../Assetes/icons/youtube.png";

const ContactUs = () => {
  return (
    <section className="mid-container ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16">
        {/* -------------------------contact form--------------------- */}
        <div>
          <form
            className="p-6 grid gap-3"
            style={{
              boxShadow: " 0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
            }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-primary-color text-xl font-bold">
                Name
              </label>
              <input
                type={"text"}
                className="px-4 py-3 rounded-md text-md focus:outline-none border-2 border-slate-300 "
                placeholder="Your Name..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-primary-color text-xl font-bold">
                Email
              </label>
              <input
                type={"text"}
                className="px-4 py-3 rounded-md text-md focus:outline-none border-2 border-slate-300 "
                placeholder="Your Email..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-primary-color text-xl font-bold">
                Subject
              </label>
              <input
                type={"text"}
                className="px-4 py-3 rounded-md text-md focus:outline-none border-2 border-slate-300 "
                placeholder="Subject..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-primary-color text-xl font-bold">
                Message
              </label>
              <textarea
                className="px-4 py-3 rounded-md text-md focus:outline-none border-2 border-slate-300 h-[136px]"
                placeholder="Message.."
              ></textarea>
            </div>

            <button className="bg-primary-color flex justify-center gap-3 items-center rounded-md text-white font-bold w-full py-2">
              <img src={send} />
              <span>SEND</span>
            </button>
          </form>
        </div>
        {/* ----------------------------------contact info-------------------------------------- */}
        <div>
          <h2 className="text-[#272F30] text-[40px] font-bold">Contact Us</h2>
          <p className="text-[#535353] text-sm font-semibold mt-[20px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>

          <div className="mt-[55px]">
            <div className="flex items-center gap-5">
              <div className="bg-primary-color p-3 rounded-sm">
                <img src={location} className="w-[20px] h-[20px] " />
              </div>
              <div className="flex flex-col justify-between ">
                <h4 className="text-[18px] text-primary-color font-bold">
                  Address
                </h4>
                <p className="text-xs text-[#535353] font-semibold">
                  Bay Tower, level 5, Road No. 7, Dhanmondi, Dhaka-1205
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-5">
              <div className="bg-primary-color p-3 rounded-sm">
                <img src={phone} className="w-[20px] h-[20px] " />
              </div>
              <div className="flex flex-col justify-between ">
                <h4 className="text-[18px] text-primary-color font-bold">
                  Call Us
                </h4>
                <p className="text-xs text-[#535353] font-semibold">
                  (+880) 9851859370
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-5">
              <div className="bg-primary-color p-3 rounded-sm">
                <img src={inbox} className="w-[20px] h-[20px] " />
              </div>
              <div className="flex flex-col justify-between ">
                <h4 className="text-[18px] text-primary-color font-bold">
                  Email
                </h4>
                <p className="text-xs text-[#535353] font-semibold">
                  info@cholojai.com
                </p>
              </div>
            </div>
          </div>

          {/* -----------------------follow our social media------------- */}
          <h3 className="text-[#272F30] text-[30px] font-bold mb-[20px] mt-[67px]">
            Follow Our Social Media
          </h3>
          <div className="flex gap-4">
            <div className="bg-primary-color p-3 rounded-sm">
              <img src={facebook} className="w-[20px] h-[20px] " />
            </div>
            <div className="bg-primary-color p-3 rounded-sm">
              <img src={twitter} className="w-[20px] h-[20px] " />
            </div>
            <div className="bg-primary-color p-3 rounded-sm">
              <img src={instagram} className="w-[20px] h-[20px] " />
            </div>
            <div className="bg-primary-color p-3 rounded-sm">
              <img src={youtube} className="w-[20px] h-[20px] " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
