import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";
//import Content from "./Content";
import Mealcard from "./Mealcard";
import "./App.css";
import Mealinfo from "./Mealinfo";
import Footer from "./Footer";

function App() {
  const [data, setdata] = useState();
  const [search, setsearch] = useState("");
  const [msg, setmsg] = useState("");
  const handleInput = (event) => {
    setsearch(event.target.value);
  };

  const myfunc = async () => {
    if (search === "") {
      setmsg("Please enter something..");
    } else {
      try {
        const get = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const jsonData = await get.json();
        setdata(jsonData.meals);
        setmsg("");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <>
      <div style={{ minHeight: "87vh" }} className="pt-5 mainn">
        <Navbar search={search} handleInput={handleInput} myfunc={myfunc} />
        <h4 style={{ textAlign: "center", padding: "20px" }}>{msg}</h4>
        <Mealcard detail={data} />
        <Routes>
          <Route path="/" />
          <Route path="/:mealid" element={<Mealinfo />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
