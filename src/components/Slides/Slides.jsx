import {
    SlidesContainer,
    SlidesViewport,
    BolitasContainer,
    Bolitas,
    Bolita,
} from "./styles";
import useSlides from "../../hooks/useSlides";

export default function SlidesModel({ children }) {
    return (
        <SlidesViewport>
            <Slides>{children}</Slides>
        </SlidesViewport>
    );
}

function Slides({ children }) {
    const SIZE = children.length;
    const {
        posicion,
        slideContainer,
        moveOriginalPosition,
        movePosition,
        saveStartPoint,
        saveEndPointAndMove,
        setFinalMove,
    } = useSlides(SIZE);
    const botones = [...Array(SIZE).keys()];

    const handleTransitionEnd = () => moveOriginalPosition();

    const handleMouseDown = (e) => saveStartPoint(e.clientX);
    const handleMouseMove = (e) => saveEndPointAndMove(e.clientX);
    const handleMouseUp = () => setFinalMove();
    const handleMouseLeave = () => setFinalMove();

    const handleTouchStart = (e) => saveStartPoint(e.changedTouches[0].clientX);
    const handleTouchMove = (e) => saveEndPointAndMove(e.changedTouches[0].clientX);
    const handleTouchEnd = (e) => setFinalMove();

    const handleClick = (pos) => movePosition(pos);

    return (
        <>
            <SlidesContainer
                width={SIZE + 2}
                ref={slideContainer}
                onTransitionEnd={handleTransitionEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}>
                {children[SIZE - 1]}
                {children}
                {children[0]}
            </SlidesContainer>
            <BolitasContainer>
                <Bolitas>
                    {botones.map((index) => (
                        <Bolita
                            onClick={() => handleClick(index + 1)}
                            isActive={posicion === index + 1 ? "true" : undefined}
                            key={index}
                        />
                    ))}
                </Bolitas>
            </BolitasContainer>
        </>
    );
}
