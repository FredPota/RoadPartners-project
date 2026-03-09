import { useState } from "react";

function StarRating({ maxStars = 5, value = 0, onChange, readOnly = false }) {

  const [rating, setRating] = useState(value);

  const handleClick = (val) => {
    if (readOnly) return;

    setRating(val);

    if (onChange) {
      onChange(val);
    }
  };

  const currentRating = readOnly ? value : rating;

  return (
    <div className="flex gap-1">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={starValue}
            onClick={() => handleClick(starValue)}
            className={`text-2xl cursor-pointer transition ${
              starValue <= currentRating
                ? "text-yellow-400"
                : "text-gray-400"
            }`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;