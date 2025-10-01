import img from "../../assets/how we build/How We Build 1.png";
import video from "../../assets/how we build/How We Build 2.mp4";
import ReactPlayer from "react-player";

interface HowWeBuildProps {
  title?: string;
  description?: string;
  processImage?: string;
  videoUrl?: string;
}

const HowWeBuild = ({
  title = "How We Build",
  description = "At Specslo, every project follows a clear, collaborative process turning your specs into a scalable solution, step by step.",
  processImage = img,
  videoUrl = "https://res.cloudinary.com/drdjii8fe/video/upload/v1758986364/How_We_Build_2_x6kuyo.mp4"
}: HowWeBuildProps) => {
  return (
    <div className="py-[5rem] bg-white text-black">
      <div className="wrapper grid lg:grid-cols-[65%,1fr] gap-10">
        <div className="flex justify-center">
          <img
            src={processImage}
            alt="How we build process"
            className="max-h-[30rem] object-contain"
          />
        </div>
        <div className="flex items-end justify-between gap-10 flex-col">
          <div className="space-y-4 flex flex-col lg:items-end lg:text-end">
            <div className="border-y-2 border-black py-3 w-fit">
              <h2 className="text1 z-[2] relative">
                <div className="absolute right-0 top-0 w-[3rem] h-full bg-yellowClr z-0"></div>
                <p className="pl-4">
                  <span className="relative z-[1] font-glacial">
                    {title}
                  </span>
                </p>
              </h2>
            </div>
            <p className="desc">
              {description}
            </p>
          </div>
          <div className="max-w-[20rem]">
            <video
              src={videoUrl}
              width="100%"
              height="100%"
              playsInline
              autoPlay
              loop
              muted
            ></video>
            {/* <ReactPlayer
              className="h-full w-full"
              url={video}
              width="100%"
              height="100%"
              pip={false}
              playsinline={true}
              playing
              loop
              muted
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload noplaybackrate",
                    disablePictureInPicture: true,
                  },
                },
              }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeBuild;
