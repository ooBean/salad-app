import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.less';
import menu from '@/assets/svg/menu.svg';
import search from '@/assets/svg/search.svg';
import filter from '@/assets/svg/filter.svg';
import shoppingBasket from '@/assets/svg/shopping-basket.svg';
import ProductCard from '@/components/ProductCard';
import { hottestProducts, ProductCategory, ProductTag } from '@/store/product';

const categories = Object.values(ProductCategory);

// 热门标签配置
const hottestTabs = [
  { key: ProductTag.Hottest, label: 'Hottest' },
  { key: ProductTag.Popular, label: 'Popular' },
  { key: ProductTag.NewCombo, label: 'New Combo' },
] as const;

type HotTabKey = typeof hottestTabs[number]['key'];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(ProductCategory.Recommended);
  const [activeHotTab, setActiveHotTab] = useState<HotTabKey>(ProductTag.Hottest);

  // 根据当前活跃的热门标签过滤商品
  const visibleHottest = hottestProducts.filter(p => p.tag === activeHotTab);

  // 根据当前活跃的分类过滤商品，并移除 bgColor 属性
  const visibleProducts = hottestProducts
    .filter(p => activeCategory === ProductCategory.All || p.categories.includes(activeCategory))
    .map(({ bgColor, ...rest }) => rest);

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-left">
          <img src={menu} alt="Menu" />
          <h2>Welcome, Chris.</h2>
        </div>
        <div className="shopping-basket-wrapper" onClick={() => navigate('/cart')}>
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
        <h3 className="section-title recommended-title">{activeCategory}</h3>
        <div className="product-list">
          {visibleProducts.map((product) => (
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
