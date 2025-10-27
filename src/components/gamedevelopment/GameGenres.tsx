const genres = [
  {
    label: "Casual Games",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355399/1._Casual_Games_vw9tt4.png",
  },
  {
    label: "Arcade Games",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355410/2._Arcade_Games_wdicsd.png",
  },
  {
    label: "Puzzle Games",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355399/3._Puzzle_Games_bvamlu.png",
  },
  {
    label: "Crypto Games",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355401/4._Crypto_Games_mjslde.png",
  },
  {
    label: "Educational Games",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355401/5._Educational_Games_eixubu.png",
  },
  {
    label: "Kids Games",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355402/6._Kids_Games_vmkqqr.png",
  },
  {
    label: "Multiplayer Games",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355402/7._Multiplayer_Games_aknz6o.png",
  },
  {
    label: "Board Games",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355402/8._Board_Games_bwabos.png",
  },
];

const GameGenres = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-12">
          {/* Left Section - Title and Description */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <h2 className="text1 z-[2] relative">
                <div className="absolute left-0 top-0 w-[3rem] h-full bg-yellowClr z-0"></div>
                <span className="">
                  <span className="relative z-[1] font-glacial">
                    Game
                    <br />
                    <span className="bg-yellowClr text-black px-2 py-1">Genres</span>
                  </span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              From hyper-casual to arcade and battle games, we build engaging experiences your
              players will love, crafted precisely to your specs.
            </p>
          </div>

          {/* Right Section - Genre Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {genres.map((genre, index) => (
              <div
                key={index}
                className="group cursor-pointer h-full"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-[#ffd63c] hover:border-black transition-all duration-300 flex flex-col items-center justify-center p-6 h-full">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-black text-center mb-4">
                    {genre.label}
                  </h3>
                  
                  {/* Separator Line */}
                  <div className="w-full h-0.5 bg-black mb-4"></div>
                  
                  {/* Icon */}
                  <div className="flex justify-center flex-grow">
                    <img
                      src={genre.img}
                      alt={genre.label}
                      className="max-h-24 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ffd63c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameGenres;

