import { useEffect, useState } from "react"

export const useResize = (id) => {
  const [width, setWidth] = useState(document.querySelector(id).offsetWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.querySelector(id).offsetWidth)
    };

    window.addEventListener('resize', handleResize);

    return () => { 
      window.addEventListener('resize', handleResize); 
    }
  }, [id])

  return width;
}
