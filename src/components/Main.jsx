import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const { fetchImageByImageType,setQuery } = useContext(PixabayContext);

  return (
    <>
      <div className="container">
        <button
          onClick={() => fetchImageByImageType("all")}
          type="button"
          className="btn mx-6"
        >
          Explore
        </button>
        <button
          onClick={() => fetchImageByImageType("photo")}
          type="button"
          className="btn mx-6"
        >
          Photos
        </button>
        <button
          onClick={() => fetchImageByImageType("illustration")}
          type="button"
          className="btn mx-6"
        >
          Illustrations
        </button>
        <button
          onClick={() => fetchImageByImageType("vector")}
          type="button"
          className="btn mx-6"
        >
          Vectors
        </button>
      </div>

     <div className="search-wrapper">
  <div className="search-bar">
    <FontAwesomeIcon icon={faSearch} className="search-icon" />
    <input
      onChange={(e)=>setQuery(e.target.value)}
      type="text"
      className="search-input"
      placeholder="Search for free Images.."
    />
  </div>
</div>

    </>
  );
};

export default Main;
