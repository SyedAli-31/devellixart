import React from 'react'
import Link from 'next/link'

const Services = () => {
  return (
    <div>
      {/* New Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20"></div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <Link href="/graphic-design">
                <div className="flex rounded-lg h-full bg-gradient-to-tr from-blue-600 via-black to-blue-900 p-8 flex-col text-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-[-30px]">
                  <div className="flex items-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.686-1.686a2 2 0 10-2.828-2.828l-1.686 1.686m1.686 0l1.686-1.686a2 2 0 10-2.828-2.828l-1.686 1.686m0-1.686l-1.686-1.686a2 2 0 10-2.828-2.828l1.686 1.686m-1.686 0l-1.686-1.686a2 2 0 10-2.828-2.828l1.686 1.686"
                      />
                    </svg>
                    <h2 className="text-white text-lg title-font font-medium">
                      Graphic Design & Animations
                    </h2>
                  </div>
                </div>
              </Link>
            </div>

            <div className="p-4 md:w-1/3">
              <Link href="/web-design">
                <div className="flex rounded-lg h-full bg-gradient-to-tr from-blue-600 via-black to-blue-900 p-8 flex-col text-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-[-30px]">
                  <div className="flex items-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 0c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                      />
                    </svg>
                    <h2 className="text-white text-lg title-font font-medium">
                      Web Design & Development
                    </h2>
                  </div>
                </div>
              </Link>
            </div>

            <div className="p-4 md:w-1/3">
              <Link href="/app-development">
                <div className="flex rounded-lg h-full bg-gradient-to-tr from-blue-600 via-black to-blue-900 p-8 flex-col text-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-[-30px]">
                  <div className="flex items-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 0c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                      />
                    </svg>
                    <h2 className="text-white text-lg title-font font-medium">
                      Application & Development
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
