import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { addItem } from '@/store/cart';
import './index.less';
import menu from '@/assets/svg/menu.svg';
import search from '@/assets/svg/search.svg';
import filter from '@/assets/svg/filter.svg';
import shoppingBasket from '@/assets/svg/shopping-basket.svg';
import ProductCard from '@/components/ProductCard';
import { Product, hottestProducts, ProductCategory, ProductTag } from '@/store/product';

const categories = Object.values(ProductCategory);

const hottestTabs = [
  { key: ProductTag.Hottest, label: 'Hottest' },
  { key: ProductTag.Popular, label: 'Popular' },
  { key: ProductTag.NewCombo, label: 'New Combo' },
] as const;

type HotTabKey = typeof hottestTabs[number]['key'];

interface AnimatedClone {
  id: number;
  product: Product;
  style: React.CSSProperties;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const userName = useSelector((state: RootState) => state.user.name);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [activeCategory, setActiveCategory] = useState<ProductCategory>(ProductCategory.All);
  const [activeHotTab, setActiveHotTab] = useState<HotTabKey>(ProductTag.Hottest);
  const [animatedClones, setAnimatedClones] = useState<AnimatedClone[]>([]);

  const shoppingBasketRef = useRef<HTMLDivElement>(null);

  const visibleHottest = hottestProducts.filter(p => p.tag === activeHotTab);
  const visibleProducts = hottestProducts
    .filter(p => activeCategory === ProductCategory.All || p.categories.includes(activeCategory));

  const handleAddToCart = (element: HTMLDivElement, product: Product) => {
    // 1. 将商品添加到购物车
    const cartItem = {
      id: String(product.id),
      title: product.name,
      price: product.price,
      image: product.image,
      bgColor: product.bgColor, // 添加 bgColor
      quantity: 1
    };
    dispatch(addItem(cartItem));

    // 2. 创建动画
    if (!shoppingBasketRef.current) return;

    const startRect = element.getBoundingClientRect();
    const endRect = shoppingBasketRef.current.getBoundingClientRect();
    const cloneId = Date.now();

    const newClone: AnimatedClone = {
      id: cloneId,
      product,
      style: {
        position: 'fixed',
        left: startRect.left,
        top: startRect.top,
        width: startRect.width,
        height: startRect.height,
        transition: 'all 1s ease-in-out',
      },
    };

    setAnimatedClones(prev => [...prev, newClone]);

    // 3. 触发动画
    setTimeout(() => {
      setAnimatedClones(prev => prev.map(clone =>
        clone.id === cloneId ? {
          ...clone,
          style: {
            ...clone.style,
            left: endRect.left + endRect.width / 2 - startRect.width / 2,
            top: endRect.top + endRect.height / 2 - startRect.height / 2,
            width: 0,
            height: 0,
            opacity: 0,
          }
        } : clone
      ));
    }, 100);

    // 4. 清理动画元素
    setTimeout(() => {
      setAnimatedClones(prev => prev.filter(clone => clone.id !== cloneId));
    }, 1100);
  };

  return (
    <div className="home-container">
      {animatedClones.map(clone => (
        <div key={clone.id} style={clone.style} className="animated-product-clone">
          <img src={clone.product.image} alt={clone.product.name} />
        </div>
      ))}

      <header className="home-header">
        <div className="header-left">
          <img src={menu} alt="Menu" />
          <h2>Welcome, {userName}.</h2>     
        </div>
        <div className="shopping-basket-wrapper" onClick={() => navigate('/cart')} ref={shoppingBasketRef}>
          <img src={shoppingBasket} alt="Shopping Basket" />
          {totalItems > 0 && (
            <span className="cart-item-count">{totalItems}</span>
          )}
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
            <ProductCard key={product.id} product={product} variant="large" onAddToCart={handleAddToCart} />
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
              product={product}
              variant="small"
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
