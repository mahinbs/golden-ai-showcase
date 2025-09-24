import React from "react";

/**
 * A reusable page banner component with modern design
 * @param {Object} props
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Optional subtitle text
 * @param {string} props.highlightedWord - Optional word to highlight in the title
 * @param {string} props.banner - Banner image source
 * @param {string} props.bottomText - Bottom text content
 * @param {string} props.tagline - Tagline text content
 * @param {string} props.titleHtml - Optional HTML title content
 * @returns {JSX.Element} The rendered page banner component
 */
const PageBanner = ({
  title,
  subtitle,
  highlightedWord = null,
  banner,
  bottomText,
  titleHtml,
}) => {
  // Split the title to highlight a specific word if provided
  let titleContent;

  if (highlightedWord && title && title.includes(highlightedWord)) {
    const parts = title.split(highlightedWord);
    titleContent = (
      <>
        {parts[0]}
        <span className="text-yellowClr font-glacial">{highlightedWord}</span>
        {parts[1]}
      </>
    );
  } else {
    titleContent = title;
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <img
        src={banner}
        className="w-full h-full absolute top-0 left-0 object-cover brightness-[20%]"
        alt=""
      />
      {/* Decorative elements */}
      <div className="absolute flex flex-col justify-between top-0 left-0 w-full h-full overflow-hidden">
        <div className="wrapper relative z-10 flex flex-col justify-center h-full py-24">
          <div className="max-w-4xl space-y-4">
            {titleHtml ? (
              <div
                dangerouslySetInnerHTML={{ __html: titleHtml }}
              />
            ) : (
              <h1 className="text_xl">
                {titleContent}
              </h1>
            )}

            {subtitle && (
              <p
                className="text-lg !font-normal max-w-2xl"
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="pb-5 flex justify-center">
          <h4
            className="text3 !font-normal"
            dangerouslySetInnerHTML={{ __html: bottomText }}
          />
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
