import { useCallback, useEffect, useRef, useState } from "react";

let pressed = false;

export default function useSlides(SIZE) {
    const [posicion, setPosicion] = useState(1);
    const slideContainer = useRef();

    let startX;
    let endX;
    let desplazamiento = 0;

    const desplazar = (pos) =>
        (slideContainer.current.style.transform = `translateX(-${pos}00vw)`);
    const transitionTime = (time) =>
        (slideContainer.current.style.transition = `transform ${time}ms ease`);

    const moveOriginalPosition = () => {
        if (posicion === 1 || posicion === SIZE) {
            desplazar(posicion);
            transitionTime(0);
        }
    };

    const positionLeft = useCallback(
        (prev) => {
            const nuevo = prev - 1;
            desplazar(nuevo);
            return prev === 1 ? SIZE : nuevo;
        },
        [SIZE]
    );

    const positionRight = useCallback(
        (prev) => {
            const nuevo = prev + 1;
            desplazar(nuevo);
            return prev === SIZE ? 1 : nuevo;
        },
        [SIZE]
    );

    const moveRight = () => {
        setPosicion(positionRight);
    };

    const moveLeft = () => {
        setPosicion(positionLeft);
    };

    useEffect(() => {
        const autoPlay = () =>
            setPosicion((prev) => {
                if (!pressed) {
                    transitionTime(250);
                    return positionRight(prev);
                } else {
                    return prev;
                }
            });
        const intervalo = setInterval(autoPlay, 7000);
        return () => clearInterval(intervalo);
    }, [SIZE, positionRight]);

    const movePosition = (posicion) =>
        setPosicion(() => {
            transitionTime(250);
            desplazar(posicion);
            return posicion;
        });

    const saveStartPoint = (pointX) => {
        setPress(true);
        startX = pointX;
    };

    const saveEndPointAndMove = (pointX) => {
        if (pressed) {
            endX = pointX;
            desplazamiento = startX - endX;
            const lengthSlide = slideContainer.current.offsetWidth / (SIZE + 2);
            const desplazamientoAbsoluto = posicion * lengthSlide + desplazamiento;
            slideContainer.current.style.transform = `translateX(-${desplazamientoAbsoluto}px)`;
            transitionTime(0);
        }
    };

    const setFinalMove = () => {
        if (pressed) {
            setPress(false);
            transitionTime(250);
            desplazamiento < -75
                ? setPosicion(positionLeft)
                : desplazamiento > 75
                ? setPosicion(positionRight)
                : desplazar(posicion);
            desplazamiento = 0;
        }
    };

    const setPress = (estado) => (pressed = estado);

    return {
        posicion,
        slideContainer,
        moveOriginalPosition,
        movePosition,
        saveStartPoint,
        saveEndPointAndMove,
        setFinalMove,
        moveRight,
        moveLeft,
    };
}
