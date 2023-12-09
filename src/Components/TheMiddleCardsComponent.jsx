import React, { useState } from "react";

export default function TheMiddleCardsComponent({ data, setPlace }) {
  const [newPlace, setNewPlace] = useState({});

  const handlePlaceInput = (e) => {
    const { name, value } = e.target;
    setNewPlace({ ...newPlace, [name]: value });
  };

  const handleClick = () => {
    setPlace([...data, { ...newPlace, id: data.length + 1 }]);
  };

  const [anotherState, setNewState] = useState({});
  const handlePlaceDetail = (item) => {
    setNewState(item);
  };

  const handleGetId = (id) => {
    const dataMap = data.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          status: (item.status =
            item.status == "beach"
              ? "forest"
              : item.status == "forest"
              ? "mountain"
              : "beach"),
        };
      }
      return item;
    });
    setNewPlace({ dataMap });
  };

  return (
    <div className="h-screen w-full pt-20 px-10">
      {/* top part starts */}
      <div className="w-full flex justify-between">
        <h1 className="text-4xl font-medium">Good Evening Team!</h1>
        {/* Add New Trip Button starts */}
        <div>
          <label htmlFor="AddNewTrip" className="btn">
            Add new Trip
          </label>
          <input type="checkbox" id="AddNewTrip" className="modal-toggle" />
          <div className="modal">
            {/* addnewtrip INPUT */}
            <div className="modal-box relative">
              <label
                htmlFor="AddNewTrip"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              {/* title input */}
              <h3 className="text-lg font-bold">Title</h3>
              <input
                onChange={handlePlaceInput}
                name="title"
                type="text"
                id="email-input"
                className="bg-gray-50 border border-blue-c text-gray-900 text-sm rounded-lg block w-full pl-2 p-2.5 mb-3"
                placeholder="Sihaknou Ville"
              />
              {/* description input */}
              <h3 className="text-lg font-semibold">Description</h3>
              <input
                onChange={handlePlaceInput}
                name="description"
                type="text"
                id="email-input"
                className="bg-gray-50 border border-blue-c text-gray-900 text-sm rounded-lg block w-full pl-2 p-2.5 mb-3"
                placeholder="A wonderful place with a great view"
              />
              {/* peopleGoing input */}
              <h3 className="text-lg font-semibold">People going</h3>
              <input
                onChange={handlePlaceInput}
                name="peopleGoing"
                type="text"
                id="email-input"
                className="bg-gray-50 border border-blue-c text-gray-900 text-sm rounded-lg block w-full pl-2 p-2.5 mb-3"
                placeholder="369"
              />
              <h3 className="text-lg font-semibold">Type of advanture</h3>
              <select
                onChange={handlePlaceInput}
                name="status"
                className="bg-gray-50 border border-blue-c text-gray-900 text-sm rounded-lg block w-full pl-2 p-2.5 mb-3"
              >
                <option disabled selected>
                  ----Choose any option-----
                </option>
                <option>beach</option>
                <option>forest</option>
                <option>mountain</option>
              </select>
              <label
                onClick={handleClick}
                htmlFor="AddNewTrip"
                className="btn mt-3 uppercase"
              >
                Submit
              </label>
            </div>
          </div>
        </div>
        {/* Add New Trip Button ends */}
      </div>
      {/* top part ends */}

      {/* cards section starts */}
      <div className="mt-10 flex gap-4 flex-wrap">
        {/* card1 starts */}
        {data.map((item) => (
          <div className="w-mycard p-6 rounded-lg shadow bg-blue-c border-gray-700 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white uppercase">
              {item.title}
            </h5>
            <p id="truncate" className="mb-3 font-normal text-white">
              {item.description}
            </p>
            <p className="font-normal text-white">People Going</p>
            <div className="mb-2 text-2xl font-bold tracking-tight text-white">
              {item.peopleGoing}
            </div>
            {/* buttons sections */}
            <div className="flex justify-between">
              {/* Places Button */}
              <button></button>
              <button
                onClick={() => handleGetId(item.id)}
                className={`${
                  item.status == "beach"
                    ? "bg-blue-400 hover:bg-blue-500"
                    : item.status == "forest"
                    ? "bg-green-400 hover:bg-green-500"
                    : "bg-gray-400 hover:bg-gray-500"
                } btn w-mycardbtn`}
              >
                {item.status}
              </button>
              {/* Read Details Button */}
              <label
                htmlFor="my-modal-3"
                onClick={() => {
                  handlePlaceDetail(item);
                }}
                className="btn"
              >
                Read Details
              </label>

              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold uppercase">
                    {anotherState.title}
                  </h3>
                  <p className="py-4 font-semibold">
                    {anotherState.description}
                  </p>
                  <p className="py-4 font-semibold">
                    Around{" "}
                    <span className="py-4 font-bold text-lg">
                      {anotherState.peopleGoing}
                    </span>{" "}
                    people going there
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* card1 ends */}
      </div>
      {/* cards section ends */}
    </div>
  );
}
