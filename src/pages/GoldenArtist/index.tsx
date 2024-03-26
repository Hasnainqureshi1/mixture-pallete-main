import React, { useEffect, useState } from "react";

import { styled } from "styled-components";
import ReactPlayer from "react-player";

const SMALL_SCREEN_SIZE = 1050;

export default function NewGolderArtist() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = windowSize.width < SMALL_SCREEN_SIZE;

  return (
    <div id="home">
      <Banner isSmallScreen={isSmallScreen} />

      <Boxes />

      <Features />

      <HowToUseMixter isSmallScreen={isSmallScreen} />

      <Testimonial
        imageSrc="images/img_image.png"
        text="TripSync transformed my travel planning. With activities seamlessly integrated into my calendar, it made my trip organized and stress-free. A must-have for every traveler!"
        author="Olivia Hales"
        location="Trip to New York City"
        rating="5"
      />

      <ChooseOfEveryArtist />
    </div>
  );
}

/**
 * ==========================================================
 * BANNER COMPONENTS AND ITS STYLES *
 * ==========================================================
 */
function Banner({ isSmallScreen }: { isSmallScreen: boolean }) {
  return (
    <Container>
      <BannerContainer>
        <ImageStyled
          src={
            isSmallScreen
              ? "images/newdo2.jpg"
              : "images/img_tubes_acrylic_p.png"
          }
          alt="tubesacrylicp"
          $widthPercentage={!isSmallScreen ? "18%" : undefined}
        />
        <FlexColumn $alignItems="center" $justifyContent="center">
          <Heading $size="2xl" as="h1" $center>
            Virtual Paint Mixers
          </Heading>
          <Text $size="lg" as="p" $center>
            With these tools artists can explore and experiment with oil or
            acrylic color mixtures, sample color from images, match colors from
            RGB and CMYK color systems, and save & share palettes and mixtures.
          </Text>
          <Button
            $size="md"
            $shape="round"
            $variant="fill"
            $color="indigo_A100"
          >
            Get Started
          </Button>
        </FlexColumn>
        <ImageStyled
          src={
            isSmallScreen
              ? "images/image2-resize.jpg"
              : "images/img_tubes_acrylic_p_408x249.png"
          }
          alt="tubesacrylicp"
          $widthPercentage={!isSmallScreen ? "18%" : undefined}
        />
      </BannerContainer>
    </Container>
  );
}

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (max-width: 1050px) {
    flex-direction: column;
  }

  @media (min-width: 500px) and (max-width: 1050px) {
    padding: 1.25rem;
    position: relative;
    isolation: isolate;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.5);
      z-index: -1;
      backdrop-filter: blur(3px);
    }

    & > img {
      width: min(100%, 300px);
      position: absolute;
      z-index: -2;

      &:first-child {
        top: 0;
        left: 0;
      }

      &:last-child {
        bottom: 0;
        right: 0;
      }
    }
  }
`;

/**
 * ==========================================================
 * BOXES
 * ==========================================================
 */
function Boxes() {
  return (
    <BoxesContainer>
      {[...Array(2)].map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {[...Array(12)].map((_, colIndex) => (
            <div
              key={colIndex}
              className={`box ${
                rowIndex === 0 && colIndex === 3
                  ? "third-box"
                  : rowIndex === 0 && colIndex === 4
                  ? "fourth-box"
                  : ""
              }`}
            >
              {/* You can add content inside the box here if needed */}
            </div>
          ))}
        </div>
      ))}
    </BoxesContainer>
  );
}

const BoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  overflow: hidden; /* Hide overflow */
  position: relative;

  .row {
    display: flex;
    gap: 4px;
  }

  .box {
    width: 140px;
    height: 160px;
    background-color: #d9d9d9;
    border-radius: 16px;
  }

  .red-box {
    background-color: red;
  }

  .third-box {
    background-color: #c77676; /* Color for the third box */
  }

  .fourth-box {
    background-color: #9b3636; /* Color for the fourth box */
  }

  .row:nth-child(2n) .box {
    animation: moveRowLeftToRight 10s linear infinite;
  }

  .row:nth-child(2n + 1) .box {
    animation: moveRowRightToLeft 10s linear infinite;
  }

  @keyframes moveRowLeftToRight {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(calc(100% + 4px)); /* Adjusted for gap */
    }
  }

  @keyframes moveRowRightToLeft {
    0% {
      transform: translateX(calc(100% + 4px)); /* Adjusted for gap */
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

/**
 * ==========================================================
 * FEATURES COMPONENTS AND ITS STYLES *
 * ==========================================================
 */
const homePageFeatures = [
  {
    title: "Match Color",
    content:
      'Select colors from the two pre-loaded images or images your upload. (NOTE: the mixer doesnt save uploaded images) Simply tap or click on the image to move the picker icon to the color you\'d like to match. When you have selected a color, click "MATCH COLOR" and a mixture will be created from the paint colors in the selected palette.',
    image: {
      url: "images/img_image_3.png",
      alt: "imagethree_one",
    },
  },
  {
    title: "Color System",
    content:
      "Matches colors using either RGB or CMYK color systems using the paints (colors) in the palette selected.",
    image: {
      url: "images/img_image_4.png",
      alt: "imagefour_one",
    },
  },
  {
    title: "Palette Builder",
    content:
      "Select colors from the two pre-loaded images or images your upload. (NOTE: the mixer doesnt save uploaded images) Simply tap or click on the image to move the picker icon to the color you&#39;d like to match. When you have selected a color, click &quot;MATCH COLOR&quot; and a mixture will be created from the paint colors in the selected palette.",
    image: {
      url: "images/img_image_5.png",
      alt: "imagefive_one",
    },
  },
  {
    title: "Mixture / Swatch",
    content:
      "Is where the resulting mixture appears from any inputs you provide in the palette and matching tools.",
    image: {
      url: "images/img_image_6.png",
      alt: "imagesix_one",
    },
  },
];
function Features() {
  return (
    <Container>
      <FeaturesContainer>
        {homePageFeatures.map((feature, index) => (
          <FeatureCard key={index} $reverse={index % 2 !== 0}>
            <FeatureTextContainer>
              <Heading as="h3">{feature.title}</Heading>
              <Text $size="md">
                {feature.content.replace(/&quot;/g, '"').replace(/&#39;/g, "'")}
              </Text>
            </FeatureTextContainer>
            <FeatureImageContainer>
              <ImageStyled src={feature.image.url} alt={feature.image.alt} />
            </FeatureImageContainer>
          </FeatureCard>
        ))}
      </FeaturesContainer>
    </Container>
  );
}

const FeaturesContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

const FeatureCard = styled.div<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 120px;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  }
`;

const FeatureTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  padding-top: 11px;
  gap: 29px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FeatureImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 4px 120px 0 #3a564e12;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 5px;
  }
`;

/**
 * ==========================================================
 * How To Use Mixter
 * ==========================================================
 */
function HowToUseMixter({ isSmallScreen }: { isSmallScreen: boolean }) {
  const [showVideo, setShowVideo] = useState(false);

  const videoHeight = isSmallScreen ? "300px" : "600px";

  const handleImageClick = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Container>
        <HowToUseMixterContainer>
          <Heading as="h6" className="mt-4 text-center">
            How to use Mixter?
          </Heading>
          <VideoWrapper>
            {showVideo ? (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=XOUaDTg9pzY&ab_channel=SalmanBediya"
                width="100%"
                height={videoHeight}
                controls={true}
                onPause={handleImageClick} // Handle pause event to show image again
              />
            ) : (
              <VideoOverlay
                onClick={handleImageClick}
                style={{ height: videoHeight }}
              >
                <PlayIconWrapper>
                  <ImageStyled
                    src="images/img_play.svg"
                    alt="play_one"
                    $widthPercentage="75%"
                  />
                </PlayIconWrapper>
              </VideoOverlay>
            )}
          </VideoWrapper>
        </HowToUseMixterContainer>
      </Container>
    </div>
  );
}

const HowToUseMixterContainer = styled.div<{
  $gap?: `${number}rem`;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.$gap || "1rem"};

  background-color: var(--white-A700);
  padding: 5rem 0;
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  border-radius: 40px;
  overflow: hidden;
`;

const VideoOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  cursor: pointer;
`;

const PlayIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8%;
  min-width: 100px;
  aspect-ratio: 1;
  padding: 27px;
  background-color: #fff;
  border-radius: 50%;
`;

/**
 * ==========================================================
 * Testimonial
 * ==========================================================
 */
const UNFILLED_STAR = "images/img_star_background.svg";
const FILLED_STAR = "images/img_star.svg";

type TestimonialProps = {
  imageSrc: string;
  text: string;
  author: string;
  location: string;
  rating: "1" | "2" | "3" | "4" | "5";
};

function Testimonial({
  imageSrc,
  text,
  author,
  location,
  rating,
}: TestimonialProps) {
  return (
    <TestimonialContainer>
      <TestimonialGrid>
        <TestimonialContentWrapper>
          <TextWrapper>
            <TestimonialText>{text}</TestimonialText>
            <TestimonialAuthor>{author}</TestimonialAuthor>
            <TestimonialLocation>{location}</TestimonialLocation>
            <TestimonialRating>
              {[1, 2, 3, 4, 5].map((star) => (
                <TestimonialRatingStar
                  key={star}
                  src={star <= parseInt(rating) ? FILLED_STAR : UNFILLED_STAR}
                  alt="star"
                />
              ))}
            </TestimonialRating>
          </TextWrapper>
          <ImageWrapper>
            <TestimonialImage src={imageSrc} alt="testimonial" />
          </ImageWrapper>
        </TestimonialContentWrapper>
        <TestimonialPaginationDots>
          {Array.from({ length: 3 }).map((_, index) => (
            <TestimonialPaginationDot key={index} data-active={index === 0} />
          ))}
        </TestimonialPaginationDots>
      </TestimonialGrid>
    </TestimonialContainer>
  );
}

const TestimonialContainer = styled.div`
  padding: 56px 28px;
  background-color: #fff;
`;

const TestimonialGrid = styled.div`
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 278px 1fr;
  }
`;

const TestimonialContentWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 1rem;

  grid-column: 1;

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
    grid-auto-rows: 1fr auto;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;


const TextWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  margin: auto;
  @media (min-width: 768px) {
    width: 278px;
  }
`;

const TestimonialImage = styled.img`
  width: 100%;
  border-radius: 24px;
`;
const TestimonialText = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  color: var(--blue_grey_500);
`;

const TestimonialAuthor = styled.h6`
  font-size: 1.125rem;
  color: var(--indigo_A100);
  font-weight: 700;
  font-family: Helvetica, sans-serif;
`;

const TestimonialLocation = styled.p`
  color: var(--teal);
  font-family: Helvetica, sans-serif;
`;

const TestimonialRating = styled.div`
  display: flex;
  gap: 0.5rem;
  order: -1;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const TestimonialRatingStar = styled.img`
  height: 19px;
  width: 19px;
  border-radius: 1px;
`;

const TestimonialPaginationDots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;

  @media (min-width: 768px) {
    grid-column: 2;
    grid-row: 2;
  }
`;

const TestimonialPaginationDot = styled.button`
  display: block;
  padding: 0;
  border: 0;
  outline: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
  opacity: 0.1;
  cursor: pointer;

  &[data-active="true"] {
    opacity: 1;
  }
`;

/**
 * ==========================================================
 * ChooseOfEveryArtist
 * ==========================================================
 */
function ChooseOfEveryArtist() {
  return (
    <Container>
      <TwoEvenColumns>
        <FlexColumn $gap="1.5rem">
          <Heading as="h2" $size="xl">
            Choose of every Artist
          </Heading>
          <Text as="p" $size="lg" $color="var(--blue_grey_500)">
            Get ready to create memories that last a lifetime. Start planning
            your dream getaway with our user-friendly tools. Your journey begins
            here.
          </Text>
          <Button $color="indigo_A100" $size="sm" $shape="pill">
            Get Started
          </Button>
        </FlexColumn>

        <ImageGrid>
          <Img src="images/img_image_160x160.png" alt="image_three" />
          <Img src="images/img_image_240x160.png" alt="image_five" />
          <Img src="images/img_image_128x192.png" alt="image_seven" />
          <Img src="images/img_image_1.png" alt="image_nine" />
          <Img src="images/img_image_2.png" alt="image_eleven" />
        </ImageGrid>
      </TwoEvenColumns>
    </Container>
  );
}

const TwoEvenColumns = styled.div`
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;

  display: grid;
  gap: 1.5rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageGrid = styled.div`
  --gap: 0.75rem;
  --col-width: 100px;
  --col-count: 2;

  display: grid;
  grid-template-columns: repeat(
    var(--col-count),
    minmax(var(--col-width), 1fr)
  );
  grid-auto-rows: 150px;
  gap: var(--gap);

  @media (min-width: 700px) {
    --col-width: 100px;
    --col-count: 6;
    --row-count: 4;
    --row-height: 150px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;

  &:nth-child(1) {
    grid-column: 1;
    grid-row: 2;
  }

  &:nth-child(2) {
    grid-column: 2;
    grid-row: 1 / span 2;
  }

  &:nth-child(3) {
    grid-column: 1 / span 2;
    grid-row: 3 / span 2;
  }

  &:nth-child(4) {
    grid-column: 1 / span 2;
    grid-row: 5 / span 3;
  }

  &:nth-child(5) {
    grid-column: 1 / span 2;
    grid-row: 8 / span 2;
  }

  @media (min-width: 700px) {
    &:nth-child(1) {
      grid-column: 2 / span 2;
      grid-row: 2;
    }

    &:nth-child(2) {
      grid-column: 4 / span 2;
      grid-row: 1 / span 2;
    }

    &:nth-child(3) {
      grid-column: 1 / span 2;
      grid-row: 3;
    }

    &:nth-child(4) {
      grid-column: 3 / span 2;
      grid-row: 3 / span 2;
    }

    &:nth-child(5) {
      grid-column: 5 / span 2;
      grid-row: 3;
    }
  }
`;

/**
 * ==========================================================
 * SHARED STYLED COMPONENTS
 * ==========================================================
 */
const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  max-width: 1350px;

  @media (min-width: 1280px) {
    padding-left: 5rem; /* xl:px-20 */
    padding-right: 5rem; /* xl:px-20 */
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ImageStyled = styled.img<{ $widthPercentage?: string }>`
  display: block;
  width: ${(props) => props.$widthPercentage ?? "100%"};
  object-fit: cover;
  margin-inline: auto;
`;

const sizes = {
  "2xl":
    "font-size: 56px; font-weight: bold; @media (min-width: 768px) { font-size: 50px; } @media (max-width: 767px) { font-size: 42px; }",
  xl: "font-size: 40px; font-weight: bold; @media (min-width: 768px) { font-size: 38px; } @media (max-width: 767px) { font-size: 32px; }",
  s: "font-size: 14px; font-weight: bold;",
  md: "font-size: 25px; font-weight: bold; @media (min-width: 768px) { font-size: 23px; } @media (max-width: 767px) { font-size: 21px; }",
  xs: "font-size: 12px; font-weight: 600;",
  lg: "font-size: 32px; font-weight: 600; @media (min-width: 768px) { font-size: 34px; } @media (max-width: 767px) { font-size: 32px; }",
};

export type HeadingProps = Partial<{
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  $size: keyof typeof sizes;
  $center: boolean;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

export const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  $size = "xl",
  $center = false,
  as = "h6",
  ...restProps
}) => {
  const Component = as;

  return (
    <Component>
      <StyledHeading $size={$size} $center={$center} {...restProps}>
        {children}
      </StyledHeading>
    </Component>
  );
};

const StyledHeading = styled.span<{
  $size: keyof typeof sizes;
  $center: boolean;
}>`
  display: block;

  text-align: ${({ $center }) => ($center ? "center" : "left")};
  ${({ $size }) => sizes[$size]};
`;

// Text Component
const txtsizes = {
  xs: "font-size: 16px; font-weight: normal;",
  s: "font-size: 17px; font-weight: normal;",
  md: "font-size: 18px; font-weight: normal;",
  lg: "font-size: 20px; font-weight: normal; line-height: 2rem;",
  xl: "font-size: 22px; font-weight: normal; line-height: 1.5;",
};

type TextProps = Partial<{
  className: string;
  as: any;
  $size: keyof typeof txtsizes;
  $center: boolean;
  $color?: string;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  as = "span",
  $size = "s",
  $center = false,
  $color = "inherit",
  ...restProps
}) => {
  const Component = as;

  return (
    <Component {...restProps}>
      <StyledText $size={$size} $center={$center} $color={$color}>
        {children}
      </StyledText>
    </Component>
  );
};

const StyledText = styled.span<{
  $size: keyof typeof txtsizes;
  $center: boolean;
  $color: string;
}>`
  display: block;
  text-transform: capitalize;
  text-align: ${({ $center }) => ($center ? "center" : "left")};
  color: ${({ $color }) => $color};
  ${({ $size }) => txtsizes[$size]};
`;

// Button Component
const StyledButton = styled.button<{
  $shape?: keyof typeof shapes;
  $size?: keyof typeof btnsizes;
  $bgColor?: string;
}>`
  color: #fff;
  background-color: ${({ $bgColor }) => $bgColor || "#4b0082"};
  border: none;
  border-radius: ${({ $shape }) => shapes[$shape] || "24px"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${({ $size }) => btnsizes[$size]};
`;

const shapes = {
  round: "24px",
  pill: "100vw",
};

const variants = {
  fill: {
    indigo_A200: "#4b0082",
    indigo_A100: "#7772ff",
  },
};

const btnsizes = {
  xs: "padding: 0.5rem 2.5rem; font-size: 14px;",
  sm: "padding: 0.75rem 3.75rem; font-size: 16px;",
  md: "padding: 1rem 5rem; font-size: 18px;",
};

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    $shape: keyof typeof shapes;
    $variant: keyof typeof variants;
    $size: keyof typeof btnsizes;
    $color: keyof typeof variants.fill;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  $shape,
  $variant = "fill",
  $size = "xs",
  $color = "indigo_A200",
  ...restProps
}) => {
  return (
    <StyledButton
      className={className}
      $shape={$shape}
      $size={$size}
      $bgColor={
        ($variant &&
          variants[$variant]?.[
            $color as keyof (typeof variants)[typeof $variant]
          ]) ||
        ""
      }
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </StyledButton>
  );
};

const FlexColumn = styled.div<{
  $gap?: `${number}rem`;
  $alignItems?: "center" | "flex-start";
  $justifyContent?: "center" | "flex-start";
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $alignItems }) => $alignItems ?? "flex-start"};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? "flex-start"};
  gap: ${(props) => props.$gap || "1rem"};
`;

//global styles