import React from "react";
let headerPic = require("../../assets/Features/Webinar1-ezgif.com-optimize.gif");

function Cta() {
  return (
    <section className="flex flex-col items-center justify-center container rounded-lg relative mx-auto mt-32 bg-black p-32">
    <div className="md:w-3/4 flex flex-col items-center ">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
      Craft a compelling story. Let's discuss your video production, audio, and editing needs.
      </h2>
      <a href="#" class="mt-8 text-black bg-white hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Contact Us</a>
      </div>
    </section>
  );
}

export default Cta;
