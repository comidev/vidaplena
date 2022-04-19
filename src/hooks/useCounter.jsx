import { useState } from "react";

export default function useCounter() {
    const [cantidad, setCantidad] = useState(0);

    const incrementar = () => setCantidad((prev) => prev + 1);
    const decrementar = () => setCantidad((prev) => (prev > 0 ? prev - 1 : prev));
    const resetear = () => setCantidad(0);

    return { cantidad, incrementar, decrementar, resetear };
}
