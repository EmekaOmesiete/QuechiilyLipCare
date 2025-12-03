import React, { useState } from "react";
import "../components/ReviewStyle.css";

const Reviews = () => {
  const reviewImages = [
    "/images/IMG_8353.jpeg",
    "/images/IMG_8354.jpeg",
    "/images/IMG_8355.jpeg",
    "/images/IMG_8356.jpeg",
    "/images/IMG_8357.jpeg",
    "/images/IMG_8358.jpeg",
    "/images/IMG_8361.jpeg",
    "/images/IMG_8362.jpeg",
    "/images/IMG_8363.jpeg",
    "/images/IMG_8364.jpeg",
    "/images/IMG_8366.jpeg",
    "/images/IMG_8367.jpeg",
    "/images/IMG_8368.jpeg",
    "/images/IMG_8369.jpeg",
    "/images/IMG_8370.jpeg",
    "/images/IMG_8371.jpeg",
    "/images/IMG_8372.jpeg",
    "/images/IMG_8374.jpeg",
    "/images/IMG_8375.jpeg",
    "/images/IMG_8376.jpeg",
    "/images/IMG_8377.jpeg",
    "/images/IMG_8378.jpeg",
  ];

  const [visibleCount, setVisibleCount] = useState(10);
  const [lightboxImg, setLightboxImg] = useState(null);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">Customer Reviews</h1>

      <div className="reviews-grid">
        {reviewImages.slice(0, visibleCount).map((img, index) => (
          <div
            className="review-image-wrapper"
            key={index}
            onClick={() => setLightboxImg(img)}
          >
            <img src={img} alt={`review-${index}`} className="review-image" />
          </div>
        ))}
      </div>

      {visibleCount < reviewImages.length && (
        <div className="show-more-wrapper">
          <button className="show-more-btn" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}

      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Enlarged review" className="lightbox-img" />
        </div>
      )}
    </div>
  );
};

export default Reviews;
