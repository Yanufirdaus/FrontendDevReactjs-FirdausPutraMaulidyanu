import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeaderDashboard from "../components/HeaderDashboard";
import { Riple } from "react-loading-indicators";
import DetailPage from "../components/DetailPage";

const DetailResto = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    async function load() {
        await fetchRestaurantDetails(); // ambil data di sini
    }
    load();
    }, []);

  const fetchRestaurantDetails = async () => {
    try {
      const response = await axios.get(
        `https://646ce8a07b42c06c3b2c4013.mockapi.io/restaurant/${id}`
      );
      setRestaurant(response.data);
    } catch (error) {
      console.error("Failed to fetch restaurant details", error);
    }
  };
    if (!restaurant) {
        return <div className="fixed-grid has-4-cols has-2-cols-mobile has-background-white has-text-centered p-6">
            <Riple color="#242424" size="medium" text="" textColor="" />
        </div>
    }
        return (
            <section>
                <HeaderDashboard />
                <DetailPage 
                    restaurant={restaurant} 
                    currentId={id}
                />
            </section>
            
    );
}

export default DetailResto;