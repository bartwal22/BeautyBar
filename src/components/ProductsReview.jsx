import React, { useState } from "react";
import "../styles/ProductsReview.css";

export const ProductsReview = () => {
  const [tab, setTab] = useState("reviews");

  const reviews = [
    {
      name: "Melissa Jones",
      date: "July 23, 2020",
      rating: 4,
      comment:
        "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Amanda Clement",
      date: "June 15, 2020",
      rating: 5,
      comment:
        "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you.",
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
      name: "Steve Gently",
      date: "July 5, 2020",
      rating: 5,
      comment:
        "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];

  return (
    <div className="review-section">
      <div className="tabs">
        <button
          className={tab === "description" ? "active" : ""}
          onClick={() => setTab("description")}
        >
          Description
        </button>
        <button
          className={tab === "reviews" ? "active" : ""}
          onClick={() => setTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className="review-content">
        {tab === "description" && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae
            provident ipsum omnis dolor sapiente maiores reiciendis
            exercitationem earum deleniti, reprehenderit iste ipsa saepe.
            Consectetur non et excepturi molestias esse? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Modi beatae provident ipsum omnis
            dolor sapiente maiores reiciendis exercitationem earum deleniti,
            reprehenderit iste ipsa saepe. Consectetur non et excepturi
            molestias esse?
          </p>
        )}

        {tab === "reviews" && (
          <div className="reviews-wrapper">
            <div className="reviews-left">
              {reviews.map((review, index) => (
                <div className="review-card" key={index}>
                  <div className="review-user">
                    <img src={review.avatar} alt="User" />
                    <div>
                      <h4>{review.name}</h4>
                      <small>{review.date}</small>
                    </div>
                  </div>
                  <div className="review-stars">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
              <p className="show-more">SHOW MORE →</p>
            </div>

            <div className="review-form">
              <h3>Leave A Review</h3>
              <p>Your email address will not be published.</p>
              <div className="stars">☆☆☆☆☆</div>
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
              <textarea placeholder="Enter your review"></textarea>
              <button>SEND</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
