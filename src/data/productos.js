import { getCategorys } from "data";

import bolsaVkids from "images/productos/bolsa-vkids.webp";
import botellaAloe from "images/productos/botella-aloe.webp";
import botellaAloe2 from "images/productos/botella-aloe-2.webp";
import botellaBlu600 from "images/productos/botella-blu-600.webp";
import botellaBlue1500 from "images/productos/botella-blue-1500.webp";
import botellaChivacola from "images/productos/botella-chivacola.webp";
import botellaEgo from "images/productos/botella-ego.webp";
import botellaFluy from "images/productos/botella-fluy.webp";
import botellaKolina from "images/productos/botella-kolina.webp";
import botellaMagnus from "images/productos/botella-magnus.webp";
import botellaMagnus2 from "images/productos/botella-magnus-2.webp";
import cajaAqtua from "images/productos/caja-aqtua.webp";
import cajaCafecino from "images/productos/caja-cafecino.webp";
import cajaCafecinoOlla from "images/productos/caja-cafecino-olla.webp";
import cajaCafecinoSupreme from "images/productos/caja-cafecino-supreme.webp";
import cajaDolcevita from "images/productos/caja-dolcevita.webp";
import cajaEgolife from "images/productos/caja-egolife.webp";
import cajaEstop from "images/productos/caja-estop.webp";
import cajaFem from "images/productos/caja-fem.webp";
import cajaFibra from "images/productos/caja-fibra.webp";
import cajaHomo from "images/productos/caja-homo.webp";
import cajaMagnus from "images/productos/caja-magnus.webp";
import cajaOmniost from "images/productos/caja-omniost.webp";
import cajaOmniplus from "images/productos/caja-omniplus.webp";
import cajaOmniviu from "images/productos/caja-omniviu.webp";
import cajaOnecmix from "images/productos/caja-onecmix.webp";
import cajaOptimus from "images/productos/caja-optimus.webp";
import cajaPowermaker from "images/productos/caja-powermaker.webp";
import cajaProbiotic from "images/productos/caja-probiotic.webp";
import cajaPump from "images/productos/caja-pump.webp";
import cajaShake from "images/productos/caja-shake.webp";
import cajaStarbien from "images/productos/caja-starbien.webp";
import cajaSupermixChocolate from "images/productos/caja-supermix-chocolate.webp";
import cajaSupermixVainilla from "images/productos/caja-supermix-vainilla.webp";
import cajaTeatinoLimon from "images/productos/caja-teatino-limon.webp";
import cajaTeatinoMaracuya from "images/productos/caja-teatino-maracuya.webp";
import cajaUndu from "images/productos/caja-undu.webp";
import cajaUzo from "images/productos/caja-uzo.webp";
import lataChivacola from "images/productos/lata-chivacola.webp";
import lataEgo from "images/productos/lata-ego.webp";
import lataFx from "images/productos/lata-fx.webp";
import lataIncafx from "images/productos/lata-incafx.webp";

export const PRODUCTS = [
    {
        id: 0,
        productName: "Vkids",
        img: bolsaVkids,
        type: "bolsa",
        content: "Doypack 400g",
        categorys: [
            "Nutrición Infantil",
            "Desarrollo neurológico",
            "Bebés",
            "Niños",
            "Omega 3",
            "DHA",
        ],
        description: [
            "Producto nutricional con Omega 3, betaglucanos, proteínas, vitaminas y minerales.",
            "Favorece el desarrollo físico y mental de los niños y niñas durante el crecimiento",
            "- Visual",
            "- Betaglucanos",
            "- DHA Omega 3",
        ],
        price: 169.0,
    },
    {
        id: 1,
        productName: "Aloe beta piña",
        img: botellaAloe,
        type: "botella",
        content: "Bote 960ml",
        categorys: ["Desinflamante", "Depurativo", "Desintóxicante", "Cicatrizante"],
        description: [
            "Bebida sabor piña, que contiene aloe vera, vitamina E, extracto de fruto del monje y glicósidos de esteviol, endulzantes de origen natural.",
            "- Excelente antioxidante natural",
            "- Ayuda al sistema digestivo",
            "- Desintoxica el organismo",
            "- Limpia los intestinos",
            "- Desinflama el colón",
            "- Limpia los riñones",
            "- Mejora la función del hígado",
            "- Excelente para problemas gástricos",
            "- Bueno contra infecciones: cistitis, otitis, laringitis",
        ],
        price: 70.5,
    },
    {
        id: 2,
        productName: "Aloe Beta",
        img: botellaAloe2,
        type: "botella",
        content: "Botella 200ml",
        categorys: ["Desinflamante", "Depurativo", "Desintóxicante", "Cicatrizante"],
        description: [
            "Bebida sabor piña, que contiene aloe vera, vitamina E, extracto de fruto del monje y glicósidos de esteviol, endulzantes de origen natural.",
            "- Excelente antioxidante natural",
            "- Ayuda al sistema digestivo",
            "- Desintoxica el organismo",
            "- Limpia los intestinos",
            "- Desinflama el colón",
            "- Limpia los riñones",
            "- Mejora la función del hígado",
            "- Excelente para problemas gástricos",
            "- Bueno contra infecciones: cistitis, otitis, laringitis",
        ],
        price: 15.3,
    },
    {
        id: 3,
        productName: "Agua Blu Supreme",
        img: botellaBlu600,
        type: "botella",
        content: "Botella 600ml",
        categorys: ["Agua alcalina"],
        description: [
            "El agua es un elemento vital para el organismo. Todas las células y órganos dependen de ella para su correcto funcionamiento",
        ],
        price: 4.6,
    },
    {
        id: 4,
        productName: "Agua Blu Supreme",
        img: botellaBlue1500,
        type: "botella",
        content: "Botella 1.5lt",
        categorys: ["Agua alcalina"],
        description: [
            "El agua es un elemento vital para el organismo. Todas las células y órganos dependen de ella para su correcto funcionamiento",
        ],
        price: 8.5,
    },
    {
        id: 5,
        productName: "Chiva Cola",
        img: botellaChivacola,
        type: "botella",
        content: "Botella 600ml",
        categorys: [
            "Gaseosa",
            "Bebiba saludable",
            "Sin calorías",
            "Sin azúcar",
            "Estevia",
        ],
        description: [
            "Six pack. Disfruta nuestra refrescante bebida sabor cola.",
            "- Beneficio para todos",
            "- Ideal para personas diabéticas",
            "- Mejora el funcionamiento de los riñones",
            "- No daña los dientes",
            "- Libre de cafeína, químicos y azúcares",
            "- 100% natural",
            "- Cero caloría, auxiliar para el control de peso",
            "- No tiene colorante sintéticos",
        ],
        price: 7.2,
    },
    {
        id: 6,
        productName: "Ego Plant",
        img: botellaEgo,
        type: "botella",
        content: "Botella 200ml",
        categorys: [
            "Riñones",
            "Infecciones urinarias",
            "Cálculos",
            "Desinflamante",
            "Depurativo",
            "Ácido úrico",
        ],
        description: [
            "Producto nutricional sabor herbal, con vitaminas.",
            "- Limpia el riñón",
            "- Desintegra cálculos",
            "- Limpia vías urinarias",
            "- Ayuda en probleas como Cistitis, Próstata e Infecciones Urinarias",
        ],
        price: 15.3,
    },
    {
        id: 7,
        productName: "Flu-Y",
        img: botellaFluy,
        type: "botella",
        content: "C/60 cápsulas",
        categorys: [
            "Estrés",
            "Circulación",
            "Relajación",
            "Magnesio",
            "Insomnio",
            "Nervios",
        ],
        description: [
            "Producto nutricional con extracto de naranja dulce y magnesio.",
            "- Relajación",
            "- Estrés",
            "- Ansiedad",
            "- Magnesio",
            "- Insomnio",
            "- Fijación de calcio",
            "- Nervios",
            "- Relajación muscular",
        ],
        price: 71.0,
    },
    {
        id: 8,
        productName: "Kolina",
        img: botellaKolina,
        type: "botella",
        content: "Botella 200ml",
        categorys: ["Flora intestinal", "Fauna intestinal", "Cándida", "Hongos"],
        description: [
            "Producto nutricional, sabor toronja, que por su contenido de extractos de piña y coco, pueden colaborar a la función gastrointestinal.",
            "- Regenera la flora intestinal",
            "- Controla infecciones de vías urinarias",
            "- Elimina parásitos, hongos y bacterias",
            "- Controla la candidasis",
            "- Combate el helicobacter pylori",
            "- Ayuda en problemas de gases y gastritis",
        ],
        price: 15.3,
    },
    {
        id: 9,
        productName: "Magnus",
        img: botellaMagnus,
        type: "botella",
        content: "Bote 567g",
        categorys: [
            "Cansancio",
            "Fatiga",
            "Depresión",
            "Baja energía",
            "Complejo B",
            "Dolor",
        ],
        description: [
            "Mantén una energía constante, elimina el cansancio sin alterar tu sistema nervioso. Producto nutricional sabor a cítrico, con vitaminas del complejo B, glicina y taurina.",
            "- Mejora el ánimo",
            "- Bueno contra el cansancio",
            "- Depresión",
            "- Dolores",
            "- Glicina",
            "- Taurina",
            "- Complejo B",
        ],
        price: 120.0,
    },
    {
        id: 10,
        productName: "Magnus",
        img: botellaMagnus2,
        type: "botella",
        content: "Botella 200ml",
        categorys: [
            "Cansancio",
            "Fatiga",
            "Depresión",
            "Baja energía",
            "Complejo B",
            "Dolor",
        ],
        description: [
            "Mantén una energía constante, elimina el cansancio sin alterar tu sistema nervioso. Producto nutricional sabor a cítrico, con vitaminas del complejo B, glicina y taurina.",
            "- Energía",
            "- Cansancio",
            "- Depresión",
            "- Dolores",
            "- Glicina",
            "- Taurina",
            "- Complejo B",
        ],
        price: 15.3,
    },
    {
        id: 11,
        productName: "Aqtúa Supreme",
        img: cajaAqtua,
        type: "caja",
        content: "C/30 sobres 150g",
        categorys: [
            "Corazón",
            "Circulación",
            "Antioxidantes",
            "Anti-envejecimiento",
            "Várices",
            "Piel",
        ],
        description: [
            "Producto nutricional sabor mandarina, con coenzima ubiquinol, L-carnitina, magnesio y D-ribosa.",
            "Nutre tu corazón, evitando hipertensión, venas varices mala circulación, da energía, retarda el envejecimiento prematuro.",
            "- Utiliza el colesterol como energía",
            "- Circulación de la sangre",
            "- Corazón",
            "- Circulación",
            "- Enzima QH",
            "- Antioxidante",
            "- Anti-envejecimiento",
            "- Presión",
            "- Várices",
            "- Piel",
        ],
        price: 193.0,
    },
    {
        id: 12,
        productName: "Cafecino",
        img: cajaCafecino,
        type: "caja",
        content: "C/30 sobres 360g",
        categorys: [
            "Café",
            "Quemador de grasa",
            "Termogénico",
            "Ansiedad",
            "Colesterol",
            "Triglicéridos",
            "Bajar de peso",
        ],
        description: [
            "Delicioso café endulzado con estevia. Ayuda a quemar grasa corporal y controlar los niveles de azúcar. Es suave en el estómago por tener fibras solubles. Producto nutricional con cromo.",
            "- Regula el sistema digestivo y limpia el colón",
            "- Regula el apetito",
            "- Mejor el rendimiento físico",
            "- Ayuda a la quema de graas y pérdida de peso",
        ],
        price: 99.0,
    },
    {
        id: 13,
        productName: "Cafecino de Olla",
        img: cajaCafecinoOlla,
        type: "caja",
        content: "C/30 sobres 300g",
        categorys: [
            "Café",
            "Quemador de grasa",
            "Termogénico",
            "Ansiedad",
            "Colesterol",
            "Triglicéridos",
            "Bajar de peso",
        ],
        description: [
            "Producto nutricional con cromo.",
            "- Regula el sistema digestivo y limpia el colón",
            "- Regula el apetito",
            "- Mejor el rendimiento físico",
            "- Ayuda a la quema de graas y pérdida de peso",
        ],
        price: 93.0,
    },
    {
        id: 14,
        productName: "Cafezzino Plus",
        img: cajaCafecinoSupreme,
        type: "caja",
        content: "C/30 sobres 150g",
        categorys: [
            "Café",
            "Quemador de grasa",
            "Termogénico",
            "Ansiedad",
            "Colesterol",
            "Triglicéridos",
            "Bajar de peso",
            "Estevia",
        ],
        description: [
            "Producto nutricional con café colombiano, extracto de café verde, cromo y fibra. Ayuda a utilizar la grasa almacenada como fuente de energía.",
            "- Regula el sistema digestivo y limpia el colón",
            "- Regula el apetito",
            "- Mejor el rendimiento físico",
            "- Ayuda a la quema de graas y pérdida de peso",
        ],
        price: 122.0,
    },
    {
        id: 15,
        productName: "Dolce Vita Supreme",
        img: cajaDolcevita,
        type: "caja",
        content: "C/30 sobres 150g",
        categorys: ["Glucosa", "Páncreas", "Azúcar", "Diabetes"],
        description: [
            "Producto nutricional con extracto de café verde y mezcla de fibras.",
            "- Regulta los niveles de azúcar",
            "- Ayuda a bajar de peso",
            "- Elimina azúcares y carbohidrtos de comidas",
            "- Resistentes a la insulina",
            "- Controla la ansiedad por los dulces",
            "- Regula lapresión arterial",
        ],
        price: 165.0,
    },
    {
        id: 16,
        productName: "Ego Life Supreme",
        img: cajaEgolife,
        type: "caja",
        content: "C/30 sobres 480g",
        categorys: ["Rehidratante", "Electrolitos", "Deportistas", "Suero natural"],
        description: [
            "Producto nutricional sabor piña, con electrólitos.",
            "- Bebida baja en sales con electrolitos",
            "- Equilibra la temperatura corporal",
            "- Lima las vías urinarias",
            "- Ayuda a eliminar cálculos renales",
            "- Bueno contra la retención de líquidos",
            "- Podeoroso hidratante para deportistas",
        ],
        price: 87.0,
    },
    {
        id: 17,
        productName: "Estop Plus",
        img: cajaEstop,
        type: "caja",
        content: "C/30 sobres 450g",
        categorys: ["Colesterol", "Triglicéridos", "Circulación"],
        description: [
            "Producto nutricional sabor nuez, con almendra, fitoesteroles, extracto de cera de caña y vitamina E.",
            "- Niacina (Vitamina B3) e Inulina",
            "- Ayuda a disminuir los niveles de lípidos",
            "- Ayuda a mantener saludables los niveles de colesterol",
            "- Disminuye los riesgos de enfermedades cardiovasculares o del corazón (arterioesclerosis, infarto de miocardio, angina de pecho, hipertención, etc.)",
        ],
        price: 254.0,
    },
    {
        id: 18,
        productName: "Fem Plus",
        img: cajaFem,
        type: "caja",
        content: "C/30 sobres 195g",
        categorys: [
            "Mujer",
            "Hormonal",
            "Cólicos",
            "Infertilidad",
            "Embarazadas",
            "Menopausia",
        ],
        description: [
            "Producto nutricional sabor durazno, que contiene flor de lúpulo, soya, uva, vitaminas y minerales.",
            "- Nutre y equilibria las hormonas femeninas",
            "- Ayuda a eliminar cólicos menstruales",
            "- Controla ansiedad por alimentos dulces",
            "- Ayuda a eliminar quistes, miomas y pólipos",
            "- Regula ciclos menstruales",
            "- Mejora la fertilidad fortaleciendo el útero",
            "- Fortalece piel, cabello y uñas",
            "- Controla el acné juvenil",
            "- Mujer",
            "- Hormonal",
            "- Cólicos",
            "- Desbalance hormonal",
            "- Embarazo",
            "- Menopausia",
        ],
        price: 114.0,
    },
    {
        id: 19,
        productName: "Fiber'N Plus Supreme",
        img: cajaFibra,
        type: "caja",
        content: "C/30 sobres 450g",
        categorys: ["Gastritis", "Estreñimiento", "Colón"],
        description: [
            "Producto nutricional con delicioso sabor durazno, inulina de agave y mezcla de fibras.",
            "- Equilibria el sistema digestivo",
            "- Gastritis",
            "- Helicobacter pylori",
            "- Colon inflamado, estreñimiento",
            "- Agrieras, úlceras, acidez, gases",
            "- Reflujo, hemorroides",
            "- Mala digestión",
            "- Hígado graso, vesícula",
        ],
        price: 173.0,
    },
    {
        id: 20,
        productName: "Homo Plus",
        img: cajaHomo,
        type: "caja",
        content: "C/30 sobres 180g",
        categorys: [
            "Hombre",
            "Impotencia",
            "Hormonal",
            "Próstata",
            "Acné",
            "Infertilidad",
        ],
        description: [
            "Producto nutricional con licopeno, arándano rojo, boro, uva, vitaminas y minerales.",
            "- Hombre",
            "- Impotencia",
            "- Hormonal",
            "- Próstata",
            "- Acné",
            "- Infertilidad",
        ],
        price: 114.0,
    },
    {
        id: 21,
        productName: "Magnus",
        img: cajaMagnus,
        type: "caja",
        content: "C/30 sobres 405g",
        categorys: ["Energía", "Cansancio", "Depresión"],
        description: [
            "Producto nutricional sabor a cítrico, con vitaminas del complejo B, glicina y taurina. Rinde al 100 y llénate de energía.",
        ],
        price: 120.0,
    },
    {
        id: 22,
        productName: "Omniost Supreme",
        img: cajaOmniost,
        type: "caja",
        content: "C/30 sobres 450g",
        categorys: [
            "Huesos",
            "Lesiones",
            "Osteoporosis",
            "Osteopenia",
            "Calambres",
            "Calcio",
            "Vitaminda D",
        ],
        description: [
            "Malteada sabor plátano, con calcio, vitamina D, zinc y K2.",
            "- Producto diseñado para contribuir a la correcta fijación del calcio en los huesos y dientes",
            "- Ayuda a prevenir la osteoporsis",
            "- Ayuda al fortalecimiento de los huesos y evita calambres",
            "- Especial para personas que desean nutrir el sistema oseo",
            "- Indespensable parap ersonas de la tercera edad",
        ],
        price: 152.0,
    },
    {
        id: 23,
        productName: "Omniplus",
        img: cajaOmniplus,
        content: "C/30 sobres 600ml",
        type: "caja",
        categorys: ["Multivitamínico", "Defensas", "Sistema Inmune"],
        description: [
            "Mezcla líquida, sabor frutas, que contiene vitaminas, minerales, concentrados, extracto de fruto del monje y glicósidos de esteviol, endulzantes de origen natural. Poderoso multi vitamínico que aporta Complejo B y otras vitaminas, extractos de hierbas, frutas y algas marinas. De asimilación y aprovechamiento casi inmediatos por su tecnología Miceslización.",
            "- Combate la desnutrición",
            "- Eleva las defensas",
            "- Beneficia el sistema inmunológico",
            "- Favorece el sistema nervioso y colabora en la producción de energía a partir de los alimentos",
            "- Estabiliza problemas respiratorios como asma, sinusitis, bronquitis, etc.",
            "- Tiene una gran cantidad de beneficios",
        ],
        price: 190.0,
    },
    {
        id: 24,
        productName: "Omniviu Supreme",
        img: cajaOmniviu,
        type: "caja",
        content: "C/30 sobres 150g",
        categorys: ["Vista", "Miopia"],
        description: [
            "Producto nutricional sabor a moras, que contiene luteína, zeaxantina y antioxidantes.",
            "- Orzuelo",
            "- Chalazio",
            "- Conjuntivitis",
            "- Ojo seco",
        ],
        price: 130.0,
    },
    {
        id: 25,
        productName: "One C Mix Plus",
        img: cajaOnecmix,
        type: "caja",
        content: "C/30 sobres 150g",
        categorys: ["Colágeno", "Defensas", "Piel", "Uñas", "Cabello"],
        description: [
            "Suplemento alimenticio, sabor a mango verde, que contiene glutatión, cisteína, vitamina A, complejo B:, tiamina B1, riboflavina B2, niacina B3, ácido pantoténico B5, piridoxina B6, biotina, ácido fólico B9, B12, vitaminas C, D, E y K, además de minerales: calcio, zinc, yodo, cobre, selenio, magnesio,molibdeno y cromo. Con glicósidos de esteviol, endulzante de origen natural.",
            "- Antioxidante",
            "- Colágeno",
            "- Biotina",
            "- Defensas",
            "- Respiratorio",
            "- Vitamina C",
            "- Vitamina E",
            "- Vitamina D",
            "- Vitamina A",
        ],
        price: 103.0,
    },
    {
        id: 26,
        productName: "Optimus",
        img: cajaOptimus,
        type: "caja",
        content: "C/30 sobres 240g",
        categorys: [
            "Cerebro",
            "Concentración",
            "Memoria",
            "Nervios",
            "Colina",
            "Estudiantes",
        ],
        description: [
            "Suplemento alimenticio, sabor a lima-limón, que contiene colina, glicina, vitaminas del complejo B: tiamina B1, riboflavina B2, niacina B3, ácido pantoténico B5, piridoxina B6, biotina, B12, vitaminas C y E, además de minerales: fósforo, calcio, zinc, cobre y cromo. Con extracto de fruto del monje y glicósidos de esteviol, endulzantes de origen natural.",
            "- Cerebro",
            "- Concentración",
            "- Memoria",
            "- Nervios",
            "- Colina",
            "- Neurotransmisores",
            "- Estudiantes",
        ],
        price: 144.0,
    },
    {
        id: 27,
        productName: "Power Maker",
        img: cajaPowermaker,
        type: "caja",
        content: "C/30 sobres 300g",
        categorys: [
            "Regenerador",
            "Músculos",
            "Huesos",
            "Tejidos",
            "Nervios",
            "Proteínas",
        ],
        description: [
            "Suplemento alimenticio, sabor a naranja, que contiene arginina, colina, glicina, vitaminas B5, C y E, además de minerales: calcio, zinc, cobre, cromo y boro. Con extracto de fruto del monje y glicósidos de esteviol, endulzantes de origen natural. Promueve el rejuvenecimiento, mejora la cicatrización y aumento de masa muscular, trae beneficios al aparato circulatorio así como a la función sexual. Caja con 30 sobres, contenido neto 300 gramos",
            "- Regenerador",
            "- Músculos",
            "- Huesos",
            "- Tejidos",
            "- Nervios",
            "- Proteína",
            "- Arginina",
            "- Hormonal",
        ],
        price: 222.0,
    },
    {
        id: 28,
        productName: "Omnilife Probiotic Supreme",
        img: cajaProbiotic,
        type: "caja",
        content: "C/30 sobres 150g",
        categorys: [
            "Flora intestinal",
            "Gastritis",
            "Pre-bioticos",
            "Pro-bioticos",
            "Acidez",
        ],
        description: [
            "Producto nutricional sabor limón-moras, que por su contenido de probióticos, prebióticos y minerales, puede colaborar al cuidado de la flora intestinal.",
            "- Contiene 1 billón de probioticos por cada sobre",
            "- Contienen lactobacilos que ayudan a mejorar la digestión",
            "- Promueven el equilibro de la flora intestinal",
            "- Disimnuye la inflamación, el dolor y el estreñimiento",
            "- Nutre las defensas del sistema digestivo",
        ],
        price: 155.0,
    },
    {
        id: 29,
        productName: "Omnilife Pump Supreme",
        img: cajaPump,
        type: "caja",
        content: "C/12 sobres 480g",
        categorys: ["Proteínas", "Músculos", "Huesos", "Tonificador", "Gym"],
        description: [
            "Malteada sabor a cookies & cream",
            "- Fortalece huesos y músculos",
            "- Acelera la recuperación muscular",
            "- Fortalece la sangre por su alto contenido en hierro",
            "- Rico en vitaminas y minerales",
        ],
        price: 149.0,
    },
    {
        id: 30,
        productName: "Omnilife Shake Supreme",
        img: cajaShake,
        type: "caja",
        content: "C/12 sobres 600g",
        categorys: [
            "Comida completa",
            "Bajar de peso",
            "Nutrición completa",
            "Ansiedad",
        ],
        description: [
            "Malteada sabor cookies & cream, con proteína, carbohidratos, fibra, vitaminas y minerales.",
            "- Mantiene un peso saludable",
            "- Puede sustituir un desayuno o cena",
            "- Ayuda a la pérdida de peso",
            "- Contiene fibra para un buen funcionamiento intestinal",
            "- Controla la ansiedad",
            "- Contiene soya, vitaminas y minerales",
        ],
        price: 161.0,
    },
    {
        id: 31,
        productName: "Starbien",
        img: cajaStarbien,
        type: "caja",
        content: "C/30 sobres 240g",
        categorys: [
            "Estrés",
            "Nervios",
            "Relajación",
            "Insomnio",
            "Hiperactividad",
            "Complejo B",
        ],
        description: [
            "Producto nutricional sabor naranja-limón, con vitaminas del complejo B, las cuales pueden favorecer el funcionamiento del sistema nervioso. Por su parte el extracto de maca puede promover la obtención de energía, colaborando en el estado de alerta del organismo.",
        ],
        price: 128.0,
    },
    {
        id: 32,
        productName: "Super Mix Supreme",
        img: cajaSupermixChocolate,
        type: "caja",
        content: "C/30 sobres 510g",
        categorys: [
            "Nutrición completa",
            "Omega 3",
            "Defensas",
            "Embarazadas",
            "Deportistas",
            "Músculos",
        ],
        description: [
            "Malteada sabor chocolate, con proteínas, carbohidratos, Omega 3, fibra, vitaminas y minerales.",
            "- Nutrición completa",
            "- Proteínas",
            "- Masa muscular",
            "- Vitaminas",
            "- Minerales",
            "- Omega 3",
            "- Defensas",
            "- Embarazadas",
            "- Deportistas",
        ],
        price: 174.0,
    },
    {
        id: 33,
        productName: "Super Mix Vainilla",
        img: cajaSupermixVainilla,
        type: "caja",
        content: "C/30 sobres 510g",
        categorys: [
            "Nutrición completa",
            "Omega 3",
            "Defensas",
            "Embarazadas",
            "Deportistas",
            "Músculos",
        ],
        description: [
            "Malteada sabor chocolate, con proteínas, carbohidratos, Omega 3, fibra, vitaminas y minerales.",
            "- Nutrición completa",
            "- Proteínas",
            "- Masa muscular",
            "- Vitaminas",
            "- Minerales",
            "- Omega 3",
            "- Defensas",
            "- Embarazadas",
            "- Deportistas",
        ],
        price: 174.0,
    },
    {
        id: 34,
        productName: "Teatino Limon",
        img: cajaTeatinoLimon,
        type: "caja",
        content: "C/30 sobres 225g",
        categorys: ["Té verde", "Quemador de grasa", "Colesterol"],
        description: [
            "Producto nutricional sabor limón.",
            "- Té verde",
            "- Quema grasa",
            "- Reductor",
            "- Digestivo",
            "- Limpiador de sangre",
        ],
        price: 134.0,
    },
    {
        id: 35,
        productName: "Teatino Maracuyá Supreme",
        img: cajaTeatinoMaracuya,
        type: "caja",
        content: "C/30 sobres 225g",
        categorys: ["Quemador de grasa", "Bajar de peso", "Ansiedad", "Maracuya"],
        description: [
            "Producto nutricional sabor maracuyá, con extracto de café verde, L-tirosina, L-carnitina y fibra.",
            "Presenta:",
            "- Tirosina",
            "- L-Carnitina",
            "- Reductor",
            "- Digestivo",
            "- Limpiador de sangre",
            "- Ansiedad",
            "- Tiroides",
            "- Café verde",
            "- Té negro",
        ],
        price: 208.0,
    },
    {
        id: 36,
        productName: "Undú",
        img: cajaUndu,
        type: "caja",
        content: "C/30 sobres 561g",
        categorys: [
            "Articulaciones",
            "Cartílagos",
            "Tendones",
            "Ligamentos",
            "Artrosis",
            "Artritis",
            "Lesiones",
        ],
        description: [
            "Producto nutricional sabor cítrico, con glucosamina y polvo de aceituna.",
            "- Glucosamina",
            "- Articulaciones",
            "- Cartílagos",
            "- Tendones",
            "- Ligamentos",
            "- Artrosis",
            "- Artritis",
            "- Lesiones",
        ],
        price: 210.0,
    },
    {
        id: 37,
        productName: "Uzo Supreme",
        img: cajaUzo,
        type: "caja",
        content: "C/30 sobres 240g",
        categorys: ["Defensas", "Células NK", "Anti-cancerígeno", "Sistema Inmune"],
        description: [
            "Producto nutricional sabor vainilla francesa, con salvado de arroz y selenio",
        ],
        price: 314.0,
    },
    {
        id: 38,
        productName: "Chiva Cola",
        img: lataChivacola,
        type: "lata",
        content: "6 pack - 355ml",
        categorys: [
            "Gaseosa",
            "Bebiba saludable",
            "Sin calorías",
            "Sin azúcar",
            "Estevia",
        ],
        description: [
            "Six pack. Disfruta nuestra refrescante bebida sabor cola.",
            "- Beneficio para todos",
            "- Ideal para personas diabéticas",
            "- Mejora el funcionamiento de los riñones",
            "- No daña los dientes",
            "- Libre de cafeína, químicos y azúcares",
            "- 100% natural",
            "- Cero caloría, auxiliar para el control de peso",
            "- No tiene colorante sintéticos",
        ],
        price: 35.0,
    },
    {
        id: 39,
        productName: "Ego Frutas",
        img: lataEgo,
        type: "lata",
        content: "6 pack - 355ml",
        categorys: [
            "Hígado",
            "Reflujos",
            "Acidez",
            "Agruras",
            "Indigestión",
            "Bebida depurativa",
            "Cirrosis",
        ],
        description: [
            "Producto nutricional sabor frutas del bosque, con extracto de regaliz, colina, glicina, vitaminas del complejo B y minerales.",
            "- Hígado",
            "- Reflujos",
            "- Acidez",
            "- Agruras",
            "- Indigestión",
            "- Bebida depurativa",
            "- Hígado graso",
            "- Cirrosis",
        ],
        price: 92.0,
    },
    {
        id: 40,
        productName: "FX",
        img: lataFx,
        type: "lata",
        content: "6 pack - 355ml",
        categorys: [
            "Gaseosa",
            "Bebida nutritiva",
            "Antioxidantes",
            "Vitamina A",
            "Vitamina C",
        ],
        description: ["Deliciosa bebida carbonatada sabor naranja."],
        price: 36.0,
    },
    {
        id: 41,
        productName: "Inca FX",
        img: lataIncafx,
        type: "lata",
        content: "6 pack - 355ml",
        categorys: [
            "Gaseosa",
            "Bebida nutritiva",
            "Antioxidantes",
            "Vitamina A",
            "Vitamina C",
            "Fibra soluble",
        ],
        description: ["Bebida refrescante"],
        price: 36.0,
    },
];

export const CATEGORIAS_TIPO = ["Caja", "Botellas y más"];

export const CATEGORIAS_PRODUCT = getCategorys(
    PRODUCTS.map((item) => item.categorys).flat()
);