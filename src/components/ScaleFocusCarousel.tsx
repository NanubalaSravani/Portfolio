import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import './ScaleFocusCarousel.css';

type ScaleFocusCarouselProps = {
  children: ReactNode;
  ariaLabel?: string;
};

const SCALES = {
  active: 1.06,
  inactive: 0.94,
  neutral: 1,
};

export function ScaleFocusCarousel({
  children,
  ariaLabel = 'Project carousel',
}: ScaleFocusCarouselProps) {
  const items = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const count = items.length;

  const scrollToIndex = useCallback((index: number) => {
    const slide = slideRefs.current[index];
    if (!slide) return;
    slide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setFocusedIndex(index);
    setActiveIndex(index);
  }, []);

  const goPrev = useCallback(() => {
    scrollToIndex(focusedIndex <= 0 ? count - 1 : focusedIndex - 1);
  }, [count, focusedIndex, scrollToIndex]);

  const goNext = useCallback(() => {
    scrollToIndex(focusedIndex >= count - 1 ? 0 : focusedIndex + 1);
  }, [count, focusedIndex, scrollToIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            const index = slideRefs.current.findIndex((el) => el === entry.target);
            if (index >= 0) setFocusedIndex(index);
          }
        });
      },
      { root: track, threshold: [0.55, 0.75] },
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, [count]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <div
      className="scale-carousel"
      onMouseLeave={() => setActiveIndex(null)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      <button
        type="button"
        className="scale-carousel-btn scale-carousel-btn--prev"
        onClick={goPrev}
        aria-label="Previous project"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      <div ref={trackRef} className="scale-carousel-viewport">
        <div className="scale-carousel-track">
          {items.map((child, index) => {
            const isActive = activeIndex === index;
            const scale =
              activeIndex !== null
                ? isActive
                  ? SCALES.active
                  : SCALES.inactive
                : SCALES.neutral;
            const opacity = activeIndex !== null ? (isActive ? 1 : 0.55) : 1;

            return (
              <div
                key={index}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                className={`scale-carousel-slide ${isActive ? 'is-active' : ''}`}
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  zIndex: isActive ? 2 : 1,
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => scrollToIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToIndex(index);
                  }
                }}
                role="tab"
                aria-selected={focusedIndex === index}
                tabIndex={0}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className="scale-carousel-btn scale-carousel-btn--next"
        onClick={goNext}
        aria-label="Next project"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      <div className="scale-carousel-dots" role="tablist" aria-label="Project slides">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            className={`scale-carousel-dot ${focusedIndex === index ? 'is-active' : ''}`}
            aria-label={`Go to project ${index + 1}`}
            aria-selected={focusedIndex === index}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
