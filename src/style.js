const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  textGradient: "text-gradient",
  bgBlueGradient: "bg-blue-gradient",
  bgBlackGradient: "bg-black-gradient",
  bgBlackGradient2: "bg-black-gradient-2",
  bgGrayGradient: "bg-gray-gradient",
  bgDiscountGradient: "bg-discount-gradient",
  boxShadow: "box-shadow",
  sidebar: "sidebar",
  featureCardHover: "hover:bg-black-gradient hover:box-shadow",
  feedbackCard: "feedback-card",
  feedbackCardHover: "hover:bg-black-gradient",
  blueGradient: "blue__gradient",
  pinkGradient: "pink__gradient",
  whiteGradient: "white__gradient",

  toggleButton: "transition-transform duration-500 ease-in-out transform hover:scale-105 my-4 py-2 px-4 text-white font-semibold bg-blue-500 rounded border border-blue-700 hover:bg-blue-600",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
