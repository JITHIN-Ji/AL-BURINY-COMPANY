import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

let lenis = null;

export default function LenisScroll() {
    const location = useLocation();

    useEffect(() => {
        if (!lenis) {
            lenis = new Lenis({
                duration: 1.2,
                smoothWheel: true,
                smoothTouch: false,
                anchors: true,
            });

            const raf = (time) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            };

            requestAnimationFrame(raf);
        }

        // Reset Lenis when route changes
        if (lenis) {
            lenis.scrollTo(0, { duration: 0 });
        }

        return () => {
            // Keep lenis instance alive for all routes
        };
    }, [location.pathname]);

    return null;
}