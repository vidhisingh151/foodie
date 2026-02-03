import React from "react";
import Salad from "../Assets/Greek-Salad-Overhead.jpg";
import Noodles from "../Assets/n11.jpg";
import Curry from "../Assets/healthy-cobb.jpg";
import Noodle1 from "../Assets/n12.jpg";
import Salad1 from "../Assets/Mediterranean-Salad.jpg";

const Menu = () => {
  const workInfoData = [
    {
      image: Salad,
      title: "Greek Salad",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Noodles,
      title: "Hakka Noodles",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Curry,
      title: "Protein Dish",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Curry,
      title: "Protein Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Noodle1,
      title: "Garlic Noodles",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Salad1,
      title: "Thai Plate",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Noodles,
      title: "Smoky Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Curry,
      title: "Diet Salad",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Salad,
      title: "Tomato Leafy",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
  ];

  return (
    <section id="menu" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Menu</p>
        <h1 className="primary-heading">Explore Our Best Menu</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui quam.
        </p>
      </div>

      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
