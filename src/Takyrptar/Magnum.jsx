import React from "react";
import "./App.css";

const App = ()=>{
    return (
      <>
        <header className="bg-white shadow-sm">
          <div className="max-w-screen-xl mx-30 flex items-center justify-between py-4 px-6">
            <div className="flex items-center gap-4">
              <span className="text-pink-600 text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#DF9D9B"
                >
                  <path d="M286.67-613.33V-680H840v66.67H286.67Zm0 166.66v-66.66H840v66.66H286.67Zm0 166.67v-66.67H840V-280H286.67ZM153.33-613.33q-13.66 0-23.5-9.84Q120-633 120-647q0-14 9.83-23.5 9.84-9.5 23.84-9.5t23.5 9.58q9.5 9.59 9.5 23.75 0 13.67-9.59 23.5-9.58 9.84-23.75 9.84Zm0 166.66q-13.66 0-23.5-9.83-9.83-9.83-9.83-23.83 0-14 9.83-23.5 9.84-9.5 23.84-9.5t23.5 9.58q9.5 9.58 9.5 23.75 0 13.67-9.59 23.5-9.58 9.83-23.75 9.83Zm0 166.67q-13.66 0-23.5-9.83-9.83-9.84-9.83-23.84t9.83-23.5q9.84-9.5 23.84-9.5t23.5 9.59q9.5 9.58 9.5 23.75 0 13.66-9.59 23.5-9.58 9.83-23.75 9.83Z" />
                </svg>
              </span>
            <img className="w-20"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Magnum_Cash_%26_Carry.svg/2560px-Magnum_Cash_%26_Carry.svg.png"
              alt=""
            />
            </div>
            <a
              href="#"
              className="flex justify-between text-sm text-pink-800 font-medium ml-2 underline-none"
            >
              Magnum Corp
            </a>

            <div className="flex items-center bg-gray-300 rounded-xl px-4 py-2 w-96 ">
              <span className="mr-2 text-gray-500 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#DF9D9B"
                >
                  <path d="M80-200v-66.67h400V-200H80Zm0-206.67v-66.66h200v66.66H80Zm0-206.66V-680h200v66.67H80ZM833.33-200l-158-158Q650-339 620.5-329.5T560-320q-83 0-141.5-58.5T360-520q0-83 58.5-141.5T560-720q83 0 141.5 58.5T760-520q0 31-9.5 60.5T722-404.67l158 158L833.33-200ZM559.84-386.67q55.49 0 94.49-38.84 39-38.84 39-94.33 0-55.49-38.84-94.49-38.84-39-94.33-39-55.49 0-94.49 38.84-39 38.84-39 94.33 0 55.49 38.84 94.49 38.84 39 94.33 39Z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Поиск"
                className="bg-transparent outline-none flex-1 placeholder-gray-500 text-base"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2">
                <span className="text-sm text-pink-800">Almaty</span>
              </div>
              <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2">
                <span className="text-sm text-pink-800">RU</span>
              </div>
            </div>
          </div>

          <nav className="bg-white border-t border-gray-100">
            <div className="max-w-screen-xl mx-22 flex gap-15 px-6 py-3 text-sm font-medium">
              <a href="#" className="courser-pointer   text-purple-600">
                Catalog
              </a>
              <a href="#" className="courser-pointer   text-orange-500">
                Discount
              </a>
              <a className="courser-pointer  " href="#">
                Magnum Go
              </a>
              <a className="courser-pointer  " href="#">
                Shop
              </a>
              <a className="courser-pointer" href="#">
                Contact
              </a>
              <a className="courser-pointer  " href="#">
                About us
              </a>
            </div>
          </nav>
        </header>

        <main>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            <div className="rounded-xl border shadow-sm p-10 relative bg-white text-center text-sm">
              <p className="absolute top-2 left-2 bg-pink-800 text-white text-xs font-bold px-2 py-1 rounded-lg">
                -40%
              </p>
              <p className="absolute top-2 right-2 text-gray-400 text-xs">
                до 30.04.26
              </p>
              <img
                src="https://minio.clevermart.kz/food/images/2023/6/29/19edad44-66f7-41bd-8ed3-500aebcaf741/M_4601674086329_1.jpg"
                alt=""
                className="w-24 mx-auto mt-6"
              />
              <h1 className="font-semibold mt-2 px-2 line-clamp-2">
                Heniz sous
              </h1>
              <button className="bg-lime-500 rounded-xl p-2 mt-5 pr-10 pl-10 py-2 text-sm text-black font-bold leading-tight text-center">
                <div className="text-xs text-black/70 line-through">889 тг</div>
                <div className="text-xl font-extrabold">529 тг</div>
              </button>
            </div>
            <div className="rounded-xl border shadow-sm p-10 relative bg-white text-center text-sm">
              <p className="absolute top-2 left-2 bg-pink-800 text-white text-xs font-bold px-2 py-1 rounded-lg">
                -40%
              </p>
              <p className="absolute top-2 right-2 text-gray-400 text-xs">
                до 30.04.26
              </p>
              <img
                src="https://minio.clevermart.kz/food/images/2023/6/29/19edad44-66f7-41bd-8ed3-500aebcaf741/M_4601674086329_1.jpg"
                alt=""
                className="w-24 mx-auto mt-6"
              />
              <h1 className="font-semibold mt-2 px-2 line-clamp-2">
                Heniz sous
              </h1>
              <button className="bg-lime-500 rounded-xl p-2 mt-5 pr-10 pl-10 py-2 text-sm text-black font-bold leading-tight text-center">
                <div className="text-xs text-black/70 line-through">889 тг</div>
                <div className="text-xl font-extrabold">529 тг</div>
              </button>
            </div>
            <div className="rounded-xl border shadow-sm p-10 relative bg-white text-center text-sm">
              <p className="absolute top-2 left-2 bg-pink-800 text-white text-xs font-bold px-2 py-1 rounded-lg">
                -40%
              </p>
              <p className="absolute top-2 right-2 text-gray-400 text-xs">
                до 30.04.26
              </p>
              <img
                src="https://minio.clevermart.kz/food/images/2023/6/29/19edad44-66f7-41bd-8ed3-500aebcaf741/M_4601674086329_1.jpg"
                alt=""
                className="w-24 mx-auto mt-6"
              />
              <h1 className="font-semibold mt-2 px-2 line-clamp-2">
                Heniz sous
              </h1>
              <button className="bg-lime-500 rounded-xl p-2 mt-5 pr-10 pl-10 py-2 text-sm text-black font-bold leading-tight text-center">
                <div className="text-xs text-black/70 line-through">889 тг</div>
                <div className="text-xl font-extrabold">529 тг</div>
              </button>
            </div>
            <div className="rounded-xl border shadow-sm p-10 relative bg-white text-center text-sm">
              <p className="absolute top-2 left-2 bg-pink-800 text-white text-xs font-bold px-2 py-1 rounded-lg">
                -40%
              </p>
              <p className="absolute top-2 right-2 text-gray-400 text-xs">
                до 30.04.26
              </p>
              <img
                src="https://minio.clevermart.kz/food/images/2023/6/29/19edad44-66f7-41bd-8ed3-500aebcaf741/M_4601674086329_1.jpg"
                alt=""
                className="w-24 mx-auto mt-6"
              />
              <h1 className="font-semibold mt-2 px-2 line-clamp-2">
                Heniz sous
              </h1>
              <button className="bg-lime-500 rounded-xl p-2 mt-5 pr-10 pl-10 py-2 text-sm text-black font-bold leading-tight text-center">
                <div className="text-xs text-black/70 line-through">889 тг</div>
                <div className="text-xl font-extrabold">529 тг</div>
              </button>
            </div>
            <div className="rounded-xl border shadow-sm p-10 relative bg-white text-center text-sm">
              <p className="absolute top-2 left-2 bg-pink-800 text-white text-xs font-bold px-2 py-1 rounded-lg">
                -40%
              </p>
              <p className="absolute top-2 right-2 text-gray-400 text-xs">
                до 30.04.26
              </p>
              <img
                src="https://minio.clevermart.kz/food/images/2023/6/29/19edad44-66f7-41bd-8ed3-500aebcaf741/M_4601674086329_1.jpg"
                alt=""
                className="w-24 mx-auto mt-6"
              />
              <h1 className="font-semibold mt-2 px-2 line-clamp-2">
                Heniz sous
              </h1>
              <button className="bg-lime-500 rounded-xl p-2 mt-5 pr-10 pl-10 py-2 text-sm text-black font-bold leading-tight text-center">
                <div className="text-xs text-black/70 line-through">889 тг</div>
                <div className="text-xl font-extrabold">529 тг</div>
              </button>
            </div>
            <div className="rounded-xl border shadow-sm p-10 relative bg-white text-center text-sm">
              <p className="absolute top-2 left-2 bg-pink-800 text-white text-xs font-bold px-2 py-1 rounded-lg">
                -40%
              </p>
              <p className="absolute top-2 right-2 text-gray-400 text-xs">
                до 30.04.26
              </p>
              <img
                src="https://minio.clevermart.kz/food/images/2023/6/29/19edad44-66f7-41bd-8ed3-500aebcaf741/M_4601674086329_1.jpg"
                alt=""
                className="w-24 mx-auto mt-6"
              />
              <h1 className="font-semibold mt-2 px-2 line-clamp-2">
                Heniz sous
              </h1>
              <button className="bg-lime-500 rounded-xl p-2 mt-5 pr-10 pl-10 py-2 text-sm text-black font-bold leading-tight text-center">
                <div className="text-xs text-black/70 line-through">889 тг</div>
                <div className="text-xl font-extrabold">529 тг</div>
              </button>
            </div>
            <div className="rounded-xl border shadow-sm p-10 relative bg-white text-center text-sm">
              <p className="absolute top-2 left-2 bg-pink-800 text-white text-xs font-bold px-2 py-1 rounded-lg">
                -40%
              </p>
              <p className="absolute top-2 right-2 text-gray-400 text-xs">
                до 30.04.26
              </p>
              <img
                src="https://minio.clevermart.kz/food/images/2023/6/29/19edad44-66f7-41bd-8ed3-500aebcaf741/M_4601674086329_1.jpg"
                alt=""
                className="w-24 mx-auto mt-6"
              />
              <h1 className="font-semibold mt-2 px-2 line-clamp-2">
                Heniz sous
              </h1>
              <button className="bg-lime-500 rounded-xl p-2 mt-5 pr-10 pl-10 py-2 text-sm text-black font-bold leading-tight text-center">
                <div className="text-xs text-black/70 line-through">889 тг</div>
                <div className="text-xl font-extrabold">529 тг</div>
              </button>
            </div>
          </div>
        </main>
      </>
    );
}
export default App;