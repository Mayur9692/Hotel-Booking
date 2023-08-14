import React from "react";
import "./featured.css";

function Featured() {
  return (
    <>
      <div className="feature">
        <div className="featureItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/682540.jpg?k=fc3655b3d7c5c4fd712aa84739e16d04fe7c68e7c1133fa4f6a7511d21fc50d7&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Sydney</h1>
          </div>
        </div>

        <div className="featureItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>India</h1>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/976952.jpg?k=4c536b3833e5f6721ff5f89fa4f15d8f50fd5cd4a963060414078428aa67a6d5&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>London</h1>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/976975.jpg?k=788064f0966156befaeb265f0c695d1ba1ae878bd7dad026bb7595d540b8d19d&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Belfast</h1>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/968006.jpg?k=8ec66eac93f95c8f57fedbf37abb1f71641d2a5f612340741b2e853fa02fe937&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Cork</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
