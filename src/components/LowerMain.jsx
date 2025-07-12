import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const LowerMain = () => {
  const { fetchImageByCategory } = useContext(PixabayContext);

  return (
    <div>
      <button
        onClick={() => fetchImageByCategory("nature")}
        type="button"
        className=" btn-lower mx-6"
      >
        Nature
      </button>
      <button
        onClick={() => fetchImageByCategory("fashion")}
        type="button"
        className=" btn-lower mx-6"
      >
        Fashion
      </button>
      <button
        onClick={() => fetchImageByCategory("science")}
        type="button"
        className="btn-lower mx-6"
      >
        Science
      </button>
      <button
        onClick={() => fetchImageByCategory("buildings")}
        type="button"
        className=" btn-lower mx-6"
      >
        Buildings
      </button>
      <button
        onClick={() => fetchImageByCategory("sports")}
        type="button"
        className=" btn-lower mx-6"
      >
        Sports
      </button>
      <button
        onClick={() => fetchImageByCategory("computer")}
        type="button"
        className=" btn-lower mx-6"
      >
        Computer
      </button>
      <button
        onClick={() => fetchImageByCategory("travel")}
        type="button"
        className=" btn-lower mx-6"
      >
        Travel
      </button>
      <button
        onClick={() => fetchImageByCategory("transportation")}
        type="button"
        className=" btn-lower mx-6"
      >
        Transportation
      </button>
      <button
        onClick={() => fetchImageByCategory("business")}
        type="button"
        className=" btn-lower mx-6"
      >
        Business
      </button>
      <button
        onClick={() => fetchImageByCategory("music")}
        type="button"
        className=" btn-lower mx-6"
      >
        Music
      </button>
    </div>
  );
};

export default LowerMain;
