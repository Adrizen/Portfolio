import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
//import styles from './ScrollToTop.module.css'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents/";
import {
  TopToBtm,
  IconPosition,
  IconStyle,
} from "../../components/ScrollToTop/ScrollToTopStyles";

// TODO: This needs some refactoring, specially since there is two css and js file with similar code.

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="TopToBtm">
      <FaAngleUp className={IconStyle} onClick={goToTop} />
    </div>
  );
};

export default ScrollToTop;
