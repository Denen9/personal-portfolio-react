

export const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

export const scrollDown = () => {
    window.scrollTo({
      top: window.scrollY + 600,
      behavior: "smooth" 
    });
  };

