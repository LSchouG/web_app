// NavBarLogic.js (the JS code file with hooks)
import { useState, useRef, useEffect } from 'react';

export const useMenuToggle = (timeoutDuration = 2000) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  const clearAutoClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const startAutoClose = () => {
    clearAutoClose();
    timeoutRef.current = setTimeout(() => {
      setMenuOpen(false);
      setIsHovering(false);
    }, timeoutDuration);
  };

  const toggleMenu = () => {
    const newOpen = !menuOpen;
    setMenuOpen(newOpen);

    if (newOpen) {
      if (!isHovering) {
        startAutoClose();
      }
    } else {
      clearAutoClose();
      setIsHovering(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    clearAutoClose();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (menuOpen) {
      startAutoClose();
    }
  };

  useEffect(() => {
    return () => {
      clearAutoClose();
    };
  }, []);

  return { menuOpen, toggleMenu, handleMouseEnter, handleMouseLeave };
};

export const useScreenSize = (breakpoint = 768) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= breakpoint);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isSmallScreen;
};