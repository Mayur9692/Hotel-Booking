import React from "react";

import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import PropertyList from "../../Components/ProperyList/Propertylist.jsx";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties.jsx";
import MailList from "../../Components/MailList/MailList.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
}

export default Home;
