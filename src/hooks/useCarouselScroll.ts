import { useState, useEffect, RefObject } from 'react';

export const useCarouselScroll = (carouselRef: RefObject<HTMLDivElement>) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const checkScroll = () => {
      const { scrollWidth, clientWidth, scrollLeft } = carouselElement;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    };

    const observer = new MutationObserver(checkScroll);
    observer.observe(carouselElement, { childList: true, subtree: true });

    carouselElement.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    const initialCheckTimeout = setTimeout(checkScroll, 100);

    return () => {
      clearTimeout(initialCheckTimeout);
      observer.disconnect();
      carouselElement.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [carouselRef]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return { canScrollLeft, canScrollRight, scrollLeft, scrollRight };
};
