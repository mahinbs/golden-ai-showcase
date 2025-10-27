const dataWorkAreas = [
  {
    label: "Customer Analytics & Personalization",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759855407/1._Customer_Analytics_Personalization_fxf1rh.png",
  },
  {
    label: "BI Warehousing for Smarter Sales",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759855407/2._BI_Warehousing_for_Smarter_Sales_a8rden.png",
  },
  {
    label: "Smart Financial Planning",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759855408/3._Smart_Financial_Planning_hvidqc.png",
  },
  {
    label: "Intelligent Manufacturing Solutions",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759855409/4._Intelligent_Manufacturing_Solutions_ji5cgz.png",
  },
  {
    label: "Logistics & Transportation Analytics",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759855410/5._Logistics_Transportation_Analytics_gfcyev.png",
  },
];

const WhereDataWorks = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-12">
          {/* Left Section - Title and Description */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <h2 className="text1 z-[2] relative">
                <span className="">
                  <span className="relative z-[1] font-glacial">
                    Where Data
                    <br />
                    <span className="bg-yellowClr text-black px-2 py-1">Works</span>
                  </span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              Discover how data science transforms industries and drives innovation across various sectors.
            </p>
          </div>

          {/* Right Section - Data Work Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataWorkAreas.map((area, index) => (
              <div
                key={index}
                className="group cursor-pointer h-full"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-[#ffd63c] hover:border-white transition-all duration-300 flex flex-col items-center justify-center p-6 h-full">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-black text-center mb-4">
                    {area.label}
                  </h3>
                  
                  {/* Separator Line */}
                  <div className="w-full h-0.5 bg-black mb-4"></div>
                  
                  {/* Icon */}
                  <div className="flex justify-center flex-grow">
                    <img
                      src={area.img}
                      alt={area.label}
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

export default WhereDataWorks;
