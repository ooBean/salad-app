import React, { useState } from 'react';
import './index.less';
import menu from '@/assets/svg/menu.svg';
import search from '@/assets/svg/search.svg';
import filter from '@/assets/svg/filter.svg';
import shoppingBasket from '@/assets/svg/shopping-basket.svg';
import ProductCard from '@/components/ProductCard';

// salad images
import honeyLimeCombo from '@/assets/images/salad/honey-lime-combo.png';
import berryMangoCombo from '@/assets/images/salad/berry-mango-combo.png';
import quinoaFruitSalad from '@/assets/images/salad/quinoa-fruit-salad.png';
import tropicalFruitSalad from '@/assets/images/salad/tropical-fruit-salad.png';
import melonFruitSalad from '@/assets/images/salad/melon-fruit-salad.png';

import avocadoChickenSalad from '@/assets/images/salad/avocado-chicken-salad.png'
import cheeseSalad from '@/assets/images/salad/cheese-salad.png'
import chickenBreastSalad from '@/assets/images/salad/chicken-breast-salad.png'
import cucumberTomatoSalad from '@/assets/images/salad/cucumber-tomato-salad.png'
import orangeAvocadoSalad from '@/assets/images/salad/orange-avocado-salad.png'
import salmonSalad from '@/assets/images/salad/salmon-salad.png'
 

const recommendedCombos = [
  { id: 1, name: 'Honey lime combo', price: 2000, image: honeyLimeCombo },
  { id: 2, name: 'Berry mango combo', price: 2000, image: berryMangoCombo },
  { id: 3, name: 'Cucumber tomato salad', price: 2000, image: cucumberTomatoSalad },
  { id: 4, name: 'Orange avocado salad', price: 2000, image: orangeAvocadoSalad },
];

// 现在的数据包含 tag 与 bgColor，用于筛选和背景颜色
const hottestProducts = [
  { id: 1, name: 'Quinoa fruit salad', price: 10000, image: quinoaFruitSalad, bgColor: '#FEFCF1', tag: 'Hottest' },
  { id: 2, name: 'Tropical fruit salad', price: 10000, image: tropicalFruitSalad, bgColor: '#FDF4F4', tag: 'Popular' },
  { id: 3, name: 'Melon fruit salad', price: 10000, image: melonFruitSalad, bgColor: '#F1EFF7', tag: 'New Combo' },
  { id: 4, name: 'Avocado chicken', price: 10000, image: avocadoChickenSalad, bgColor: '#F1EFF7', tag: 'New Combo' },
  { id: 5, name: 'Cheese salad', price: 10000, image: cheeseSalad, bgColor: '#FDF4F4', tag: 'Popular' },
  { id: 6, name: 'Chicken breast', price: 10000, image: chickenBreastSalad, bgColor: '#FEFCF1', tag: 'Hottest' },
  { id: 7, name: 'Orange avocado', price: 10000, image: orangeAvocadoSalad, bgColor: '#FDF4F4', tag: 'Popular' },
  { id: 8, name: 'Salmon salad', price: 10000, image: salmonSalad, bgColor: '#F1EFF7', tag: 'New Combo' },
];

const categories = ['All', 'Salad Combo', 'Berry Combo', 'Mango'];

// 热门标签配置
const hottestTabs = [
  { key: 'Hottest', label: 'Hottest' },
  { key: 'Popular', label: 'Popular' },
  { key: 'New Combo', label: 'New Combo' },
] as const;

type HotTabKey = typeof hottestTabs[number]['key'];

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeHotTab, setActiveHotTab] = useState<HotTabKey>('Hottest');

  // 根据当前活跃标签过滤商品
  const visibleHottest = hottestProducts.filter((p) => p.tag === activeHotTab);

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-left">
          <img src={menu} alt="Menu" />
          <h2>Welcome, Chris.</h2>
        </div>
        <div className="shopping-basket-wrapper">
          <img src={shoppingBasket} alt="Shopping Basket" />
        </div>
      </header>

      <div className="search-bar-container">
        <div className="search-input-wrapper">
          <img src={search} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search for fruit salad combos" />
        </div>
        <img src={filter} alt="Filter" className="filter-icon" />
      </div>

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="product-section recommended-section">
        <h3 className="section-title recommended-title">Recommended Combo</h3>
        <div className="product-list">
          {recommendedCombos.map((product) => (
            <ProductCard key={product.id} {...product} variant="large" />
          ))}
        </div>
      </section>

      <section className="product-section hottest-section">
        <div className="product-type-tabs">
          {hottestTabs.map((t) => (
            <h3
              key={t.key}
              className={`section-title ${activeHotTab === t.key ? 'active' : ''}`}
              onClick={() => setActiveHotTab(t.key)}
            >
              {t.label}
            </h3>
          ))}
        </div>
        <div className="product-list">
          {visibleHottest.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              variant="small"
              bgColor={product.bgColor}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
