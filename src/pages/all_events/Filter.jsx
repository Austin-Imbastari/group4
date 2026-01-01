import React, { useState } from "react"
import { Search } from 'lucide-react';

export default function Filter({ activityTypes = [], onFilter }) {
    const [zip, setZip] = useState("");
    const [categoryId, setCategoryId] = useState("");

    function handleChange(nextZip, nextCategory) {
        onFilter({
            zip: nextZip,
            categoryId: nextCategory,
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
                    handleChange(value, categoryId);
                }}
            />
            <label htmlFor="categoryFilter"></label>
            <select
                id="categoryFilter"
                value={categoryId}
                onChange={(e) => {
                    const value = e.target.value;
                    setCategoryId(value);
                    handleChange(zip, value);
                }}
            >
                <option value="">All categories</option>
                {activityTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                        {type.name}
                    </option>
                ))}
            </select>
        </div>
    );
}