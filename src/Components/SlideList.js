import React, { useEffect, useState, useCallback } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import NavBar from "./NavBar";
import BlogList from "./BlogList";

const SlideList = ({ slider }) => {
  const secStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    textAlign: "center",
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = useCallback(
    (e) => {
      if (e.deltaY > 0) {
        // Scrolling down
        setActiveSlide((prevSlide) =>
          Math.min(prevSlide + 1, slider.length - 1)
        );
      } else {
        // Scrolling up
        setActiveSlide((prevSlide) => Math.max(prevSlide - 1, 0));
      }
    },
    [activeSlide, slider]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  const nextslide = () => {
    const nextSlideIndex = Math.min(activeSlide + 1, slider.length - 1);
    const nextSlidePosition = nextSlideIndex * window.innerHeight;

    const scrollingElement =
      document.scrollingElement || document.documentElement;
    scrollingElement.scrollTop = nextSlidePosition;
  };

  return (
    <Fullpage>
      <FullpageNavigation style={{ paddingRight: "0" }} />
      <FullPageSections className="fullpageSec">
        {slider.map((slide, index) => (
          <FullpageSection
            key={slide.id}
            className={`slideItem ${slide.bgeffect} ${
              activeSlide === index ? "active" : ""
            }`}
            style={{
              ...secStyle,
              backgroundImage: `url(${slide.background})`,
            }}
          >
            <div className="container-fluid">
              <NavBar logocolor={slide.logo} discover={slide.discoverbtn} />
              <div className={slide.maincls}>
                <h1 className="main-title mb-5">{slide.title}</h1>
                {slide.body !== "" && <p>{slide.body}</p>}
                {slide.blog && slide.blogname !== undefined && (
                  <BlogList name={slide.blogname} />
                )}
                {slide.nextPage && (
                  <div className="arrow arw-b" onClick={nextslide}>
                    <div className="arrow-top"></div>
                    <div className="arrow-bottom"></div>
                  </div>
                )}
              </div>
            </div>
          </FullpageSection>
        ))}
      </FullPageSections>
    </Fullpage>
  );
};

export default SlideList;
