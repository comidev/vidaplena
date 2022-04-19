import styled from "@emotion/styled";

const rgba = (num) => `${num},${num},${num}`;

export const COLORS = {
    RED: "#E71D36",
    GOLD: "#efb810",
    PRIMARY: "#A14EBF",
    PRIMARY_RGB: "161, 78, 191",
    WHITE: "#ffffff",
    GRIS: "#f9f6f6",
    BLACK: "#000000",
    BLUE: "#48e",

    TEXT: "#666666",
    TEXT2: "#E0E0E0",
    LINK: "#FFF",
    BUTTON: "#FFF",
    BUTTON_H: "#000",

    ERROR: "#F24C00",
    WARNING: "#FC7A1E",
    SUCCESS: "#6AB547",

    RANDOMS: ["#ff3f00", "#ff7f11", "#6AB547", "#7692FF", "#58355e", "#00a6a6"],

    BORDER_LINE: `rgba(${rgba(255)}, 0.2)`,
    BORDER_TRANS: `rgba(${rgba(255)}, 0.9)`,

    BG1: "#F9F4F5",
    BG2: "#171717",
    BG3: "#343434",
    BG4: "#424B54",

    GRADIENT: {
        BG_GLOBAL: "linear-gradient(135deg,rgb(238,238,238) 0%,#F9F4F5 100%)",
        NAVBAR: "linear-gradient(90deg, #A14EBF, #E71D36)",
        FOOTER: "linear-gradient(0deg, #000, #171717)",
        FOOTER2:
            "linear-gradient(to bottom,rgba(20,26,50,0) 0%,rgba(20,26,50,0.01) 1%,rgba(20,26,50,1) 100%)",
        _01: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",

        _02: "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
        _03: "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
        _04: "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
        _05: "linear-gradient(to bottom,rgb(238,238,238,0.7) 0%,#F9F4F5 100%)",

        _06: "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",

        _07: "linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)",

        _08: "linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)",

        _09: "linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%)",

        _10: "linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)",
        _11: "linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)",
        _12: "linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
    },
};

export const MAX_WIDTH = {
    LG: "1540px",
    MD: "1140px",
    SM: "100%",
};

export const BREAK_POINTS = {
    MOBILE: "991px",
    DESKTOP: "1600px",
};

export const FONT = {
    SIZE_SMALL: "13px",
    SIZE_MEDIUM: "20px",
    SIZE_LARGE: "36px",
    SIZE_X_LARGE: "42px",
};

export const Container = styled.div`
    max-width: ${MAX_WIDTH.LG};
    margin: 0 auto;
    padding: 3rem 1.5rem 0;

    color: ${({ color }) => (color ? color : COLORS.BLACK)};
    ${({ bg }) => bg && `background-color: ${bg};`};
    ${({ blur }) => blur && `backdrop-filter: blur(${blur});`}

    @media screen and (max-width: ${BREAK_POINTS.DESKTOP}) {
        max-width: ${MAX_WIDTH.MD};
    }
    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        max-width: ${MAX_WIDTH.SM};
    }
`;

export const Main = styled.main`
    margin-top: 4rem;
    height: 100%;
`;

export const Section = styled.section`
    ${({ bg }) => bg && `background: ${bg};`}
    ${({ pdB }) =>
        pdB &&
        `
    padding-bottom: ${pdB};
    `}
    ${({ bgImg }) =>
        bgImg &&
        `
    background-image: url(${bgImg});
    background-size: cover;
    `}
`;

const title = ({ mt = false, mb = 1, fs, fw, fsPhone, fs320 }) => {
    return `
        text-align: center;

        ${mt ? `margin-top: 0;` : ""}
        margin-bottom: ${mb}rem;

        font-size: ${fs}rem;
        font-weight: 100;

        @media screen and (max-width: ${BREAK_POINTS.PHONE}) {
            font-size: ${fsPhone}rem;
        }

        @media screen and (max-width: 320px) {
            font-size: ${fs320}rem;
        }
    `;
};
export const H1 = styled.h1`
    ${title({ mt: true, mb: 4, fs: 3.5, fsPhone: 3.2, fs320: 2.8 })}
    font-weight: 800;
    font-size: calc(1.25vw + 1.25vh + 1.8rem);
    ${({ start }) => start && `text-align: start;`}
    ${({ maxwidth }) => maxwidth && `max-width: ${maxwidth};`}
    margin-top: 1.5rem;
`;
export const H2 = styled.h2`
    ${title({ mt: true, mb: 2, fs: 2.5, fsPhone: 2.2, fs320: 2 })}
`;
export const H3 = styled.h3`
    ${title({ fs: 2, fw: 100, fsPhone: 1.7, fs320: 1.5 })}
    ${({ height }) => height && `height: ${height};`}
`;
export const H4 = styled.h4`
    ${title({ fs: 1.5, fw: 100, fsPhone: 1.5, fs320: 1.3 })}
`;

export const P = styled.p`
    color: ${({ color }) => color || COLORS.TEXT};
    line-height: 1.5rem;
`;
