import { useCallback, useState } from "react";

export default function useToggleMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const cerrar = useCallback(() => setIsOpen(false), []);

    const moveMenu = useCallback(() => {
        const isMobile = window.innerWidth <= 991;
        if (isMobile) setIsOpen((prev) => !prev);
    }, []);

    return { isOpen, moveMenu, cerrar };
}
