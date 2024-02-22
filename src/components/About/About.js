import React from "react";
import aboutimg from "../../assets/images/aboutimg.jpg";

function About() {
  return (
    <section class="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div class="container relative mx-auto">
        <div class="flex flex-wrap items-center justify-between -mx-4">
          <div class="w-full px-4 lg:w-6/12">
            <div class="flex items-center -mx-3 sm:-mx-4">
              <div class="w-full px-3 sm:px-4 xl:w-1/2">
                <div class="py-3 sm:py-4">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
                    alt=""
                    class="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:px-4 xl:w-1/2">
                <div class="relative z-10 my-4">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                    alt=""
                    class="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 pl-8 lg:w-1/2 xl:w-5/12">
            <div class="mt-10 lg:mt-0">
              <span class="block mb-4 text-lg font-semibold text-primary">
                Why Choose Us
              </span>
              <h2 class="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                Transforming Satisfaction into Smiles
              </h2>
              <p class="mb-5 text-base text-body-color dark:text-dark-6">
                "We specialize in audio, video and networking consultation and
                installation. Focused on tech and creativity, we tailor
                solutions for a seamless, high-quality experience, turning your
                ideas into reality." We have one goal in mind, the user
                satisfaction.
              </p>
              <p class="mb-8 text-base text-body-color dark:text-dark-6"></p>
              <a
                href="javascript:void(0)"
                class="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-slate-900 hover:bg-opacity-90"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
