const FilterSection = ({
  categories,
  priceFilter,
  selectedCategories,
  selectedPriceRange,
  openStatus,
  onPriceChange,
  onCategoryChange,
  onOpenChange,
  onClear
}) => {
  return (
    <div className="hero is-desktop is-mobile filter-border has-background-white">
      <div className="columns is-mobile">

        <div className="column is-narrow ml-6 is-flex is-align-items-center">
          <span className="is-size-7 is-size-8-mobile has-text-grey">
            Filter By:
          </span>
        </div>

        <div className="column is-narrow is-flex is-align-items-center">
          <label className="filter-toggle">
            <input
              type="checkbox"
              checked={openStatus}
              onChange={(e) => onOpenChange(e.target.checked)}
            />
            <span className="checkmark"></span>
            <span className="label-text">Open Now</span>
          </label>
        </div>

        <div className="column is-narrow">
          <div className="select is-small is-borderless underline">
            <select onChange={(e) => onPriceChange(e.target.value)}>
              <option value="">Price</option>
              {priceFilter.map((item, index) => (
                <option key={index} value={index}>
                  {item.low}-{item.high}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="column is-narrow">
          <div className="select is-small is-borderless">
            <select onChange={(e) => onCategoryChange(e.target.value)}>
              <option value="">Categories</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="column is-narrow ml-auto is-flex is-align-items-center mr-6">
          {/* <span className="is-size-7 has-text-grey mr-3">
            {selectedPriceRange &&
              `${selectedPriceRange.low}-${selectedPriceRange.high}`}
          </span>

          <span className="is-size-7 has-text-grey mr-3">
            {selectedCategories}
          </span>

          <span className="is-size-7 has-text-grey mr-3">
            {openStatus && "Open Now"}
          </span> */}

          <button
            className="button is-white is-small has-text-grey outline"
            onClick={onClear}
          >
            Clear All
          </button>
        </div>

      </div>
    </div>
  );
};

export default FilterSection;