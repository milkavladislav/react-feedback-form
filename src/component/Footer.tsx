import styled from "styled-components";

type ImagePosition = {
    top: string;
    left: string;
};

type SocialIconType = {
    img: string;
    alt: string;
    link: string;
};

const FooterDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 200px;
    left: 0px;
    top: 928px;
    overflow: hidden;
    background: #fafafa;
    border-top: 1px solid #d8d8d8;
    @media (max-width: 450px) {
        top: 750px;
    }
`;

const Image = styled.img`
    position: absolute;
    top: ${(props: ImagePosition) => props.top};
    left: ${(props: ImagePosition) => props.left};
    @media (max-width: 500px) {
        display: none;
    }
`;

const SocialIcon = styled.img`
    height: 16px;
`;

const SocialIconGroup = styled.div`
    position: absolute;
    display: flex;
    left: 343px;
    top: 80px;
    justify-content: space-evenly;
    width: 150px;
    @media (max-width: 500px) {
        left: 270px;
    }
    @media (max-width: 450px) {
        left: 100px;
    }
`;

const socialIcons: SocialIconType[] = [
    {
        img: require("../assets/img/social_icon/linkedin.png"),
        alt: "linkedin",
        link: "https://www.linkedin.com/",
    },
    {
        img: require("../assets/img/social_icon/twitter.png"),
        alt: "twitter",
        link: "https://www.twitter.com/",
    },
    {
        img: require("../assets/img/social_icon/facebook.png"),
        alt: "facebook",
        link: "https://www.facebook.com/",
    },
    {
        img: require("../assets/img/social_icon/pin.png"),
        alt: "pinterest",
        link: "https://www.pinterest.com/",
    },
];

export const Footer = () => {
    return (
        <FooterDiv>
            <Image
                top={"0px"}
                left={"1230px"}
                alt="green-man"
                src={require("../assets/img/green_man.png")}
            />
            <Image
                top={"51px"}
                left={"1356px"}
                alt="yellow-man"
                src={require("../assets/img/yellow_cartoon.png")}
            />
            <Image
                top={"-38px"}
                left={"15px"}
                alt="yellow-man"
                src={require("../assets/img/red_cartoon.png")}
            />
            <SocialIconGroup>
                {socialIcons.map(({ alt, link, img }: SocialIconType) => (
                    <a href={link}>
                        <SocialIcon alt={alt} src={img} />
                    </a>
                ))}
            </SocialIconGroup>
        </FooterDiv>
    );
};
