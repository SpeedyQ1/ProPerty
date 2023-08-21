import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import React from "react";
import { Padding } from "@mui/icons-material";

function ReactSimplyCarouselExample({ TheData }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      forwardBtnProps={{
        className: "carousel-btn",
        style: {
          alignSelf: "center",
          background: "#000000b5",
          border: "none",
          borderRadius: "50%",
          color: "white",
          cursor: "pointer",
          fontSize: "20px",
          height: 30,
          lineHeight: 1,
          textAlign: "center",
          width: 30,
          margin: 10,
          position: "relative",
          zIndex: 5,
          right: "0",
        },
        children: <span>{`>`}</span>,
      }}
      backwardBtnProps={{
        className: "carousel-btn",
        style: {
          alignSelf: "center",
          background: "#000000b5",
          border: "none",
          borderRadius: "50%",
          color: "white",
          cursor: "pointer",
          fontSize: "20px",
          height: 30,
          lineHeight: 1,
          textAlign: "center",
          width: 30,
          margin: 10,
          position: "relative",
          zIndex: 5,
          left: "0",
        },
        children: <span>{`<`}</span>,
      }}
      responsiveProps={[
        {
          itemsToShow: 1,
          itemsToScroll: 1,
          minWidth: 768,
        },
      ]}
      speed={400}
      easing="linear"
    >
      {TheData.length > 1 &&
        TheData?.map((item, index) => (
          <div
            key={index}
            style={{
              width: "fit-content",
              height: "fit-content",
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              style={{ width: "90vw", maxWidth: "750px", height: "auto" }}
              src={item.imgSrc}
              alt=""
            />
            <div className="price-on-image-div">
              <h2>only {item.price}$</h2>
            </div>
          </div>
        ))}
    </ReactSimplyCarousel>
  );
}

export default ReactSimplyCarouselExample;
