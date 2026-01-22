import { useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";
const StarRating = ({ rating, max = 5 }) => {
  const percentage = (rating / max) * 100;

  return (
    <div className="star-rating">
      <div className="stars-back">
        ★★★★★
      </div>
      <div
        className="stars-front"
        style={{ width: `${percentage}%` }}
      >
        ★★★★★
      </div>
    </div>
  );
};

const ITEMS_PER_LOAD = 8;

const RestaurantListCard = (
    { 
        resto,
        isLoading
    }
) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const navigate = useNavigate();

  if (isLoading) {
  return (
        <div className="fixed-grid has-4-cols has-2-cols-mobile has-background-white has-text-centered p-6">
            <ThreeDot color="#242424" size="medium" text="" textColor="" />
        </div>
    );
    }

  else if (!resto || resto.length === 0) {
  return (
        <div className="fixed-grid has-4-cols has-2-cols-mobile has-background-white has-text-centered p-6">
            Restoran tidak ditemukan
        </div>
    );
    }

  return (
    <div className="fixed-grid has-4-cols has-2-cols-mobile has-background-white">
      <div className="grid gap-5 p-5 mt-4 mb-3 ml-5 mr-5">

        {resto.slice(0, visibleCount).map((restaurant) => (
          <div className="cell" key={restaurant.id}>
            <div className="card">

              <div className="card-image image-wrapper">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                />
              </div>

              <div className="card-content p-0">
                <p className="title is-5 has-text-weight-normal mt-3 mb-3 ml-3 mr-3">
                  {restaurant.name}
                </p>

                <div className="is-flex mb-3 ml-3 mr-3">
                  <StarRating rating={restaurant.rating} />
                </div>

                <div className="is-flex mb-3 ml-3 mr-3">
                  <span className="is-size-7 has-text-grey">
                    {restaurant.address}
                  </span>

                  <span
                    className={`ml-auto has-text-weight-semibold ${
                      restaurant.is_opened
                        ? "has-text-success"
                        : "has-text-danger"
                    }`}
                  >
                    ●
                  </span>

                  <span className="ml-2">
                    {restaurant.is_opened ? "Open Now" : "Closed"}
                  </span>
                </div>

                <div 
                    className="mb-3 ml-3 mr-3 pb-3"
                        onClick={() => navigate(`/detailResto/${restaurant.id}`)}>
                  <button className="button is-medium is-fullwidth has-background-grey-dark has-text-white">
                    Learn More
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>

      {visibleCount < resto.length && (
        <div className="has-text-centered mt-5 mb-6">
          <button
            className="button is-light"
            onClick={() =>
              setVisibleCount(prev => prev + ITEMS_PER_LOAD)
            }
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default RestaurantListCard;