import { useParams, Navigate } from "react-router-dom";
import { TESTIMONIOS_SALUD } from "data/testimonios.js";
import TestimonioPage from "components/Testimonio/TestimonioPage";

export default function TestimonioCaso() {
    const { casoId } = useParams();
    const isNumber = Number.isInteger(Number(casoId));

    if (!isNumber || casoId >= TESTIMONIOS_SALUD.length || casoId < 0) {
        return <Navigate to="/home" replace />;
    }

    const testimonio = TESTIMONIOS_SALUD[casoId];

    return (
        <TestimonioPage
            imgs={testimonio.imgs}
            title={testimonio.title}
            category={testimonio.category}
            description={testimonio.description}
            description2={testimonio.description2}
            products={testimonio.products}
        />
    );
}
