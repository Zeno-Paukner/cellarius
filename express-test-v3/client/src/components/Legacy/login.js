import React from "react";

export default function Login() {
  return (
    <>

      <div className="flex items-center justify-center h-screen min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md m-auto space-y-8">
          <div>
            <svg
              className="w-auto h-12 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="124.45"
              height="80.558"
              viewBox="0 0 124.45 80.558"
            >
              <g
                id="Element_4_1_2_"
                data-name="Element 4 1(2)"
                transform="translate(0.5 0.5)"
              >
                <g
                  id="Gruppe_2"
                  data-name="Gruppe 2"
                  transform="translate(86.708 -0.5)"
                >
                  <path
                    id="Pfad_1"
                    data-name="Pfad 1"
                    d="M351.947-.5h3.262q12.8,1.891,14.679,14.452V55.7a100.307,100.307,0,0,0-37.24-43.889q6.312-5.073,12.777-10.036A21.869,21.869,0,0,1,351.947-.5Z"
                    transform="translate(-332.648 0.5)"
                    fill="#baddfa"
                    fill-rule="evenodd"
                    opacity="0.981"
                  />
                </g>
                <g
                  id="Gruppe_3"
                  data-name="Gruppe 3"
                  transform="translate(-0.165 -0.467)"
                >
                  <path
                    id="Pfad_2"
                    data-name="Pfad 2"
                    d="M42.887,16.915A79.541,79.541,0,0,0,1.535,11.77Q4.2,2.437,13.859.53A16.051,16.051,0,0,1,25.087,2.968Q34.064,9.887,42.887,16.915Z"
                    transform="translate(-1.535 -0.354)"
                    fill="#8fc9f8"
                    fill-rule="evenodd"
                    opacity="0.969"
                  />
                </g>
                <g
                  id="Gruppe_4"
                  data-name="Gruppe 4"
                  transform="translate(-0.5 9.644)"
                >
                  <path
                    id="Pfad_3"
                    data-name="Pfad 3"
                    d="M40.519,45.855c6.825,5.3,13.752,11.079,20.51,16.489.46-.3.977-.8,1.475-1.105q20.341,20.185,21.443,49.122H48.562q-1.7-31.452-28.687-47.1A54.537,54.537,0,0,0-.5,57.191V42.076l.536-1.349A76.6,76.6,0,0,1,40.519,45.855Z"
                    transform="translate(0.501 -39.947)"
                    fill="#42a5f4"
                    fill-rule="evenodd"
                    opacity="0.994"
                  />
                </g>
                <g
                  id="Gruppe_5"
                  data-name="Gruppe 5"
                  transform="translate(62.394 11.368)"
                >
                  <path
                    id="Pfad_4"
                    data-name="Pfad 4"
                    d="M259.39,45.8a100.408,100.408,0,0,1,36.666,44.177v10.236q-1.74,11.852-13.382,14.277H255.911Q254.811,85.6,234.5,65.46,246.828,55.476,259.39,45.8Z"
                    transform="translate(-234.5 -45.795)"
                    fill="#8fc9f8"
                    fill-rule="evenodd"
                    opacity="0.994"
                  />
                </g>
                <g
                  id="Gruppe_6"
                  data-name="Gruppe 6"
                  transform="translate(-0.5 26.501)"
                >
                  <path
                    id="Pfad_5"
                    data-name="Pfad 5"
                    d="M-.5,105.136a54.288,54.288,0,0,1,20.383,6.117q26.991,15.759,28.7,47.438H17.2A38.137,38.137,0,0,0,2.985,129.741q-1.7-1.247-3.486-2.312Z"
                    transform="translate(0.501 -105.136)"
                    fill="#1e88e4"
                    fill-rule="evenodd"
                    opacity="0.993"
                  />
                </g>
                <g
                  id="Gruppe_7"
                  data-name="Gruppe 7"
                  transform="translate(-0.603 48.968)"
                >
                  <path
                    id="Pfad_6"
                    data-name="Pfad 6"
                    d="M.1-.416Q1.894.655,3.591,1.913A38.533,38.533,0,0,1,17.812,31.087H13.519Q2.645,29.168.1,18.215Z"
                    fill="#0c449e"
                    fill-rule="evenodd"
                    opacity="0.976"
                  />
                </g>
              </g>
            </svg>

            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Login to Cellarius
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-slate-800 group hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
