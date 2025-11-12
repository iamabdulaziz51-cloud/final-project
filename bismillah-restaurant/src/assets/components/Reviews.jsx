import React from "react";
import "./Reviews.css";

const reviewsData = [
  {
    id: 1,
    name: "Sophia Johnson",
    location: "Canada",
    review:
      "Absolutely breathtaking destinations! Everything was well-organized and stress-free.",
    image: "/images/user1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Liam Chen",
    location: "Singapore",
    review:
      "I loved every moment of the trip! Excellent service and unforgettable memories.",
    image: "/images/user2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "UK",
    review:
      "Highly recommend! The team made our travel experience smooth and enjoyable.",
    image: "/images/user3.jpg",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <h2 className="reviews-title">What Our Travelers Say</h2>

      <div className="reviews-container">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <img
              src={review.image}
              alt={review.name}
              className="review-image"
            />
            <h3 className="review-name">{review.name}</h3>
            <p className="review-location">{review.location}</p>
            <p className="review-text">"{review.review}"</p>
            <div className="review-rating">
              {"⭐".repeat(review.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
