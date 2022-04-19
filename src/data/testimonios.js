import { getCategorys } from "data";

export const TESTIMONIOS_SALUD = [
    {
        title: "Hernia, estrés y parálisis facial",
        imgs: [],
        category: "Hernia, estrés y parálisis facial",
        description:
            "Hola, soy Washington Miranda hace 11 años atrás tenía estrés crónico, depresión, ansiedad, insomnio, dolores de cabeza, mareos, calambres, tics nervioso, tuve parálisis facial de media cara (derrame facial). Tomé diversos tratamientos alternativos naturistas, hiervas, masajistas, quiropraxia, acupuntura, baños medicinales, pasé por todos los consultorios y en neuro-cirugía me ordenaron sacarme una resonancia magnética. ",
        description2:
            "Me encontraron hernia de disco en la columna L5, L4, se me agudizó todo y llegué hasta psiquiatría, me recetaron para dormir clonasepan por las mañanas sertralina, y los tomé 7 meses hasta que conocí estos productos y gracias a estos maravillosos productos, una alimentación balanceada y un cambio en mi actitud; el desequilibrio, desorden, trastornos y malestares en mi cuerpo los corregí y sané, y hoy disfruto de una buena calidad de vida. Gracias a estos increíbles productos.",
        products: ["Optimus", "Omniplus", "Powermaker", "Undú", "Magnus"],
    },
];

export const CATEGORIAS_SALUD = getCategorys(
    TESTIMONIOS_SALUD.map((item) => item.category)
);
