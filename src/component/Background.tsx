import styled from "styled-components";

type ImagePosition = {
    top: string;
    left: string;
    opacity?: string;
};

const Image = styled.img`
    position: fixed;
    top: ${(props: ImagePosition) => props.top};
    left: ${(props: ImagePosition) => props.left};
    opacity: ${(props: ImagePosition) => (props.opacity ? props.opacity : "1")};
`;

const MapImage = styled.img`
    position: absolute;
    top: 45px;
    right: 350px;
    overflow: hidden;
    @media (max-width: 1000px) {
        width: 450px;
        height: 450px;
        top: 0px;
        right: 100px;
    }
`;

const MapDiv = styled.div`
    position: fixed;
    top: -45px;
    right: -350px;
    width: 970px;
    height: 970px;
    overflow: hidden;
    border-radius: 50%;
    @media (max-width: 1000px) {
        width: 450px;
        height: 450px;
        top: 50px;
        right: -100px;
    }
`;

const BackgroundDiv = styled.div`
    overflow: hidden;
`;

export const Background = () => {
    const cloudImage = require("../assets/img/cloud.png");

    const cloudsPosition: ImagePosition[] = [
        {
            top: "330px",
            left: "-41px",
        },
        {
            top: "556px",
            left: "394px",
        },
        {
            top: "35px",
            left: "838px",
        },
        {
            top: "190px",
            left: "756px",
            opacity: "0.5",
        },
        {
            top: "680px",
            left: "794px",
            opacity: "0.4",
        },
        {
            top: "65px",
            left: "680px",
            opacity: "0.2",
        },
        {
            top: "420px",
            left: "1232px",
            opacity: "0.4",
        },
        {
            top: "695px",
            left: "204px",
            opacity: "0.3",
        },
    ];

    return (
        <BackgroundDiv>
            {cloudsPosition.map((cloud: ImagePosition) => (
                <Image
                    top={cloud.top}
                    left={cloud.left}
                    opacity={cloud.opacity}
                    alt="cloud"
                    src={cloudImage}
                />
            ))}
            <Image
                top={"23px"}
                left={"29px"}
                alt="yellow-man"
                src={require("../assets/img/yellow_cartoon.png")}
            />
            <Image
                top={"558px"}
                left={"762px"}
                alt="red-man"
                src={require("../assets/img/red_cartoon.png")}
            />
            <Image
                top={"516px"}
                left={"762px"}
                alt="yellow-man"
                src={require("../assets/img/yellow_man.png")}
            />

            <MapDiv>
                <MapImage alt="cloud" src={require("../assets/img/map.png")} />
            </MapDiv>
        </BackgroundDiv>
    );
};
