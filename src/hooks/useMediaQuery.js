import { useEffect, useState, useCallback } from "react";

export const useMediaQuery = (minWidth) => {
    
    const [state, setState] = useState({
        windowWidth: window.innerWidth,
        isRequestWidth: false,
    });

    // Resize Handler for window
    const resizeHandler = useCallback(() => {
        const currentWindowWidth = window.innerWidth;
        const isRequestWidth = currentWindowWidth < minWidth;
              setState({ windowWidth: currentWindowWidth, isRequestWidth });
    }, [minWidth]);

    useEffect(() => {
        // Add event listener
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return state.isRequestWidth;
};