import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-gray-200">
            <p>
              Hi. I'm Dhanush Rajesh, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p className="text-gray-400">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full mt-12 px-4">
          <h3 className="text-3xl font-bold text-gray-200 text-center mb-8">
            Learning Time Line
          </h3>
          <ol className="items-center sm:flex">
            <li className="relative mb-6 sm:mb-0 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-pink-500">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-pink-600 rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-600 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-200">
                  Frontend Development (Oct 2023 - Mar 2024)
                </h3>
                <p className="text-base font-normal text-gray-400">
                  Gained expertise in modern frontend frameworks and tools,
                  including ReactJS and Tailwind CSS. Developed responsive and
                  interactive user interfaces to enhance user experience.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-pink-500">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-pink-600 rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-600 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-200">
                  Backend Development (May 2024 - July 2024)
                </h3>
                <p className="text-base font-normal text-gray-400">
                  Spearheaded backend development for various projects,
                  enhancing system efficiency and scalability. Implemented
                  robust APIs and integrated cutting-edge technologies to
                  support dynamic application requirements.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-pink-500">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-pink-600 rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-600 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-200">
                  Full Stack Development (August 2024 - Present)
                </h3>
                <p className="text-base font-normal text-gray-400">
                  Leading the development of full-stack solutions with a focus
                  on enhancing user experience and optimizing performance.
                  Driving innovation through the integration of modern
                  technologies and frameworks.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
