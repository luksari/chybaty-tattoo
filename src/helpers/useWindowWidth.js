import { useState, useEffect } from 'react';

export function useWindowWidth() {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    if(typeof window === 'undefined') {
      return false;
    }
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return width
}
