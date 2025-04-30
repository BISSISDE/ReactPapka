import React from "react";

const Kolesa = () => {
  return (
    <>
      <header className="">
        <div className="bg-white border-b h-25 items-center px-10 p-4 shadow-md flex justify-between items-center w-full ">
          <h1 className="font-[1000] text-[30px]">Kolesa.kz</h1>
          <nav className="flex justify-between items-center ">
            <div className="font-[600] flex items-center space-x-14">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Saved
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Massage
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Cabinet
              </a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit an ad
              </button>
            </div>
          </nav>
        </div>
        <div className="flex gap-20 items-center bg-white h-12 px-10 p-4 shadow-md w-full">
          <a href="#" className="font-[700] text-gray-700 hover:text-blue-500">
            🚗 Cars
          </a>
          <a href="#" className="font-[700] text-gray-700 hover:text-blue-500">
            🚘 Cars at Kolesa.kz
          </a>
          <a href="#" className="font-[700] text-gray-700 hover:text-blue-500">
            🏎️ New cars
          </a>
          <a href="#" className="font-[700] text-gray-700 hover:text-blue-500">
            🛠️ Spares
          </a>
          <a href="#" className="font-[700] text-gray-700 hover:text-blue-500">
            ⚙️ Repair and service
          </a>
          <a href="#" className="font-[700] text-gray-700 hover:text-blue-500">
            📖 To read
          </a>
        </div>
      </header>
      <div className="mt-5 flex gap-7 items-center h-12 px-10 p-4 ">
        <a href="#" className="text-blue-500 hover:text-gray-900">
          Home /
        </a>
        <a href="#" className="text-blue-500 hover:text-gray-900">
          Toyota /
        </a>
        <a href="#" className="text-blue-500 hover:text-gray-900">
          Camry /
        </a>
        <a href="#" className="text-blue-500 hover:text-gray-900">
          Sedans /
        </a>
      </div>
      <main className="px-20">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 px-10 p-4">
          <div className="space-y-6">
            <h2 className="text-2xl font-[900]">Toyota Camry 2023.</h2>
            <p className="text-3xl font-[900] text-red-600">17 400 000 ₸</p>

            <div className="flex items-center gap-10">
              <span className="bg-yellow-300 px-3 py-1 rounded font-[800] text-gray-800">
                Monthly payment
              </span>
              <span className="font-[600] text-lg">509 062 ₸</span>
            </div>

            <div className="flex items-center gap-10">
              <span className="bg-yellow-300 px-3 py-1 rounded font-[800] text-gray-800">
                Down payment
              </span>
              <span className="font-[600] text-lg">1 704 000 ₸</span>
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded font-[600]">
              Сalculate credit
            </button>

            <div className="text-sm text-gray-700 space-y-1 mt-4 gap-3 flex flex-col">
              <p>
                <strong>City:</strong> Almaty
              </p>
              <p>
                <strong>Generation:</strong> 2020
              </p>
              <p>
                <strong>Body:</strong> Sedan
              </p>
              <p>
                <strong>Engine capacity:</strong> 2.5
              </p>
              <p>
                <strong>Mileage:</strong> 62 000 km
              </p>
              <p>
                <strong>Color:</strong> Gold
              </p>
              <p>
                <strong>From Kazakstan:</strong> Of Course
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 w-150">
            <img
              src="https://scene7.toyota.eu/is/image/toyotaeurope/cam0001a_21-2:Medium-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0"
              alt="Toyota Camry"
              className="w-200 h-100 rounded-xl"
            />
            <div className="flex gap-2">
              <img
                src="https://toyota.com.ua/assets/cache_image/all-models/Camry/camry-2025-7_360x180_298.jpg.webp"
                alt="thumb1"
                className="rounded-md w-40"
              />
              <img
                src="https://autoreview.ru/images/gallery/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2021/March/23/toyota-camry-2.jpg"
                alt="thumb2"
                className="w-40 h-20 rounded-md border"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Kolesa;
