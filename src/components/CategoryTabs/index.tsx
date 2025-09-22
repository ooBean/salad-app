import React, { useState } from 'react';

interface CategoryTabsProps {
  categories: string[];
  onSelect: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, onSelect }) => {
  const [active, setActive] = useState(categories[0]);

  const handleClick = (category: string) => {
    setActive(category);
    onSelect(category);
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          style={{ fontWeight: active === category ? 'bold' : 'normal' }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
