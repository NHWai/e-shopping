import Image from "next/image";
import React from "react";
import privacy from "../../public/privacy.png";
import undo from "../../public/icons8-undo-24.png";
import qr from "../../public/qr2.jpg";
import kpay from "../../public/kpay.jpg";
import wave from "../../public/wave.png";
import fb from "../../public/fb.png";
import insta from "../../public/insta.png";
import tele from "../../public/telegram.png";
import viber from "../../public/viber.png";
import twitter from "../../public/twitter.png";

const Contact = () => {
  return (
    <section className="mx-auto mb-12 w-full max-w-[1080px] overflow-hidden px-6">
      <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col gap-3 ">
          <div className="text-lg">Customer Service</div>
          <div className="flex items-center gap-1 text-xs">
            <Image src={privacy} alt="privacy-icon" width={18} height={18} />
            <span>Terms & Privacy Policy</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Image src={undo} alt="privacy-icon" width={18} height={18} />
            <span>Return Policy</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-lg">Language</div>
          <label className="text-xs">
            <input type="radio" name="language" value="mmz" /> Myanmar &#40;
            zawgyi &#41;
          </label>
          <label className="text-xs">
            <input type="radio" name="language" value="mmu" /> Myanmar &#40;
            unicode &#41;
          </label>
          <label className="text-xs">
            <input
              type="radio"
              name="language"
              value="eng"
              defaultChecked={true}
            />{" "}
            English
          </label>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-lg">Contact Us</div>
          <div className="flex items-center gap-1 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <span>LayDaungKan Main Rd. Cashmere Stop Thingangyn Tsp</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <span>09 458489468</span>
          </div>
        </div>
        <div>
          <div className="text-lg">Download Our App</div>
          <Image src={qr} alt="privacy-icon" width={60} height={60} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-lg ">Payment</div>
          <div className="flex">
            <div>
              <Image src={kpay} alt="privacy-icon" width={60} height={40} />
            </div>
            <div className="-mt-[10px]">
              <Image src={wave} alt="privacy-icon" width={60} height={40} />
            </div>
          </div>
        </div>
        <div>
          <div className="text-lg">Follow us on</div>
          <div className="flex">
            <Image src={fb} alt="privacy-icon" width={40} height={30} />
            <Image src={insta} alt="privacy-icon" width={40} height={40} />
            <Image src={viber} alt="privacy-icon" width={40} height={40} />
            <Image src={tele} alt="privacy-icon" width={40} height={40} />
            <Image src={twitter} alt="privacy-icon" width={40} height={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
