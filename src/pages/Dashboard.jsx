import { useEffect, useMemo, useState } from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import FilterSection from "../components/FilterSection";
import RestaurantListCard from "../components/RestaurantListCard";
import { clearAllFilter, fetchRestaurants, handleCategoryChange, handleOpenStatusChange, handlePriceChange, priceFilter } from "../features/restoSlice";

const Dashboard = () => {
  const [resto, setResto] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [openStatus, setOpenStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRestaurants(setResto, setCategories, setIsLoading);
  }, []);

  const filteredResto = useMemo(() => {
    return resto.filter(r => {
      if (openStatus && !r.is_opened) return false;

      if (selectedPriceRange) {
        const hasMenuInRange = r.menu.some(menu => {
            const priceNumber = parseFloat(menu.price);
            return (
                priceNumber >= selectedPriceRange.low &&
                priceNumber <= selectedPriceRange.high
            );
        });

        if (!hasMenuInRange) return false;
      }

      if (selectedCategories) {
        if (!r.categories.includes(selectedCategories)) return false;
      }

      return true;
    });
  }, [resto, selectedCategories, selectedPriceRange, openStatus]);
  
  return (
    <section>
      <HeaderDashboard />

      <FilterSection
        categories={categories}
        priceFilter={priceFilter}
        selectedCategories={selectedCategories}
        selectedPriceRange={selectedPriceRange}
        openStatus={openStatus}
        // onPriceChange={handlePriceChange}
        // onCategoryChange={handleCategoryChange}
        // onOpenChange={handleOpenStatusChange}
        // onClear={clearAllFilter}
        onPriceChange={(index) => handlePriceChange(index, setSelectedPriceRange, priceFilter)}
        onCategoryChange={(value) => handleCategoryChange(value, setSelectedCategories)}
        onOpenChange={(checked) => handleOpenStatusChange(checked, setOpenStatus)}
        onClear={() => clearAllFilter(setSelectedCategories, setSelectedPriceRange, setOpenStatus)}
      />

      <RestaurantListCard 
        resto={filteredResto}
        isLoading={isLoading}
      />
    </section>
  );
};

export default Dashboard;