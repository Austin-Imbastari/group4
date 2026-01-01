import React, { useState } from "react";
import { Search } from "lucide-react";

export default function Filter({ activityTypes = [], onFilter }) {
  const [zip, setZip] = useState("");
  const [categoryName, setCategoryName] = useState("");

  function handleChange(nextZip, nextCategoryName) {
    onFilter({
      zip: nextZip,
      categoryName: nextCategoryName,
    });
  }

  return (
    <div className="navBar">
      <Search />
      <label htmlFor="zipFilter"></label>
      <input
        id="zipFilter"
        type="number"
        placeholder="Zip code"
        min={1000}
        max={9999}
        value={zip}
        onChange={(e) => {
          const value = e.target.value;
          setZip(value);
          handleChange(value, categoryName);
        }}
      />
      <label htmlFor="categoryFilter"></label>
      <select
        id="categoryFilter"
        value={categoryName}
        onChange={(e) => {
          const value = e.target.value;
          setCategoryName(value);
          handleChange(zip, value);
        }}
      >
        <option value="">All categories</option>
        {activityTypes.map((type) => (
          <option key={type.id} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
}
