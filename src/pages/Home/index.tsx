import React, { useState, useRef, useEffect } from 'react';
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
import { useCarouselScroll } from '@/hooks/useCarouselScroll';
import ScrollArrow from '@/components/ScrollArrow';


const baseCategories = Object.values(ProductCategory);

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

  const [activeCategory, setActiveCategory] = useState<ProductCategory | string>(ProductCategory.All);
  const [activeHotTab, setActiveHotTab] = useState<HotTabKey>(ProductTag.Hottest);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  // Load search history on mount
  useEffect(() => {
    const raw = sessionStorage.getItem('salad_searchHistory');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setSearchHistory(parsed);
      } catch {
        // ignore parse errors
      }
    }
  }, []);
  // Persist search history
  useEffect(() => {
    sessionStorage.setItem('salad_searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);
  // Persist searchQuery across tab switches and optional page reloads (localStorage)
  useEffect(() => {
    const saved = sessionStorage.getItem('salad_searchQuery');
    if (saved) {
      setSearchQuery(saved);
    }
  }, []);
  useEffect(() => {
    if (searchQuery) {
      sessionStorage.setItem('salad_searchQuery', searchQuery);
    } else {
      sessionStorage.removeItem('salad_searchQuery');
    }
  }, [searchQuery]);

  useEffect(() => {
    const activeTab = tabsRef.current[activeCategory];
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeCategory]);

  const [animatedClones, setAnimatedClones] = useState<AnimatedClone[]>([]);

  const shoppingBasketRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const recommendedListRef = useRef<HTMLDivElement>(null);
  const hottestListRef = useRef<HTMLDivElement>(null);

  const recommendedScroll = useCarouselScroll(recommendedListRef);
  const hottestScroll = useCarouselScroll(hottestListRef);

  // --- Search and Filter Logic ---
  const handleSearch = () => {
    const trimmedSearch = searchTerm.trim();
    if (trimmedSearch) {
      setSearchQuery(trimmedSearch);
      // Update history (front-most)
      setSearchHistory(prev => {
        const exists = prev.includes(trimmedSearch);
        const next = exists ? prev : [trimmedSearch, ...prev];
        return next.slice(0, 8);
      });
      setActiveCategory(trimmedSearch);
      setSearchTerm('');
    } else {
      // If search is cleared, reset to 'All'
      setSearchQuery('');
      setSearchTerm('');
      setActiveCategory(ProductCategory.All);
    }
  };

  const handleCategoryClick = (category: ProductCategory | string) => {
    // If a base category is clicked, clear the search state to show category results.
    if (baseCategories.includes(category as ProductCategory)) {
      setSearchQuery('');
      setSearchTerm('');
      setActiveCategory(category);
      return;
    }

    // If a search history item is clicked, treat it as a new search.
    setSearchTerm(category);
    setSearchQuery(category);
    setActiveCategory(category);
  };

  const handleRemoveSearchHistory = (e: React.MouseEvent, tagToRemove: string) => {
    e.stopPropagation(); // Prevent handleCategoryClick from firing
    const nextHistory = searchHistory.filter(item => item !== tagToRemove);
    setSearchHistory(nextHistory);

    // If the removed tag was the active search, clear the search
    if (searchQuery === tagToRemove) {
      setSearchQuery('');
      setSearchTerm('');
      setActiveCategory(ProductCategory.All);
    }
  };

  const displayCategories = [...new Set([...searchHistory, ...baseCategories])];

  const visibleProducts = hottestProducts.filter(p => {
    // If a search is active, always filter by name regardless of activeCategory
    if (searchQuery) {
      return p.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    // Otherwise, filter by category
    if (activeCategory === ProductCategory.All) {
      return true; // Show all products
    }
    return p.categories.includes(activeCategory as ProductCategory);
  });

  const visibleHottest = hottestProducts.filter(p => p.tag === activeHotTab);

  // --- Add to Cart Animation Logic ---
  const handleAddToCart = (element: HTMLDivElement, product: Product) => {
    const cartItem = {
      id: String(product.id),
      title: product.name,
      price: product.price,
      image: product.image,
      bgColor: product.bgColor,
      quantity: 1
    };
    dispatch(addItem(cartItem));

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
          <input
            type="text"
            placeholder="Search for fruit salad combos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            onBlur={handleSearch}
          />
        </div>
        {/* <img src={filter} alt="Filter" className="filter-icon" /> */}
      </div>

      <div className="category-tabs">
        {displayCategories.map((category) => (
          <button
            key={category}
            ref={el => (tabsRef.current[category] = el)}
            className={`category-tab ${activeCategory === category ? 'active' : ''} ${!baseCategories.includes(category as ProductCategory) ? 'search-history-tab' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
            {!baseCategories.includes(category as ProductCategory) && (
              <span
                className="remove-tag"
                onClick={(e) => handleRemoveSearchHistory(e, category)}
              >
                ×
              </span>
            )}
          </button>
        ))}
      </div>

      <section className="product-section recommended-section">
        <h3 className="section-title recommended-title">{activeCategory}</h3>
        {visibleProducts.length === 0 ? (
          <div className="empty-state">No matching salads found. Please try different keywords or browse by category.</div>
        ) : (
          <div className="product-list-wrapper">
            <div className="product-list" ref={recommendedListRef}>
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} variant="large" onAddToCart={handleAddToCart} />
              ))}
            </div>
            <ScrollArrow direction="left" visible={recommendedScroll.canScrollLeft} onClick={recommendedScroll.scrollLeft} />
            <ScrollArrow direction="right" visible={recommendedScroll.canScrollRight} onClick={recommendedScroll.scrollRight} />
          </div>
        )}
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
        <div className="product-list-wrapper">
            <div className="product-list" ref={hottestListRef}>
            {visibleHottest.map((product) => (
                <ProductCard
                key={product.id}
                product={product}
                variant="small"
                onAddToCart={handleAddToCart}
                />
            ))}
            </div>
            <ScrollArrow direction="left" visible={hottestScroll.canScrollLeft} onClick={hottestScroll.scrollLeft} />
            <ScrollArrow direction="right" visible={hottestScroll.canScrollRight} onClick={hottestScroll.scrollRight} />
        </div>
      </section>
    </div>
  );
};

export default Home;

