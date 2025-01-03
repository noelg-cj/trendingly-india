import { motion } from "framer-motion";

const services = [
  {
    title: "Open Creativity",
    description:
      "Alongside our in-house creative team, we have a network of thousands of creators that fuel our creative, content and innovation daily.",
  },
  {
    title: "Social First",
    description:
      "Everything we do starts in social - it's where our insights are found that form the foundations of our work. For us, it's always social-first, but rarely social-only.",
  },
  {
    title: "Communities",
    description:
      "We work with creators, influencers and our own talent to unearth insights that help us develop strategies that speak directly and authentically to today's audiences.",
  },
];

const items = ["Marketing", "Trendingly", "Music", "Influencers", "Sports"];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          zoom: 1.2,
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('/images/hero.jpg')",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center px-4 sm:px-8 lg:px-16 mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-[128px] uppercase text-white leading-tight font-sherman text-stroke">
            Re-Inventing Digital
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white max-w-lg sm:max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Non pellentesque dignissim
            egestas enim rutrum sed leo posuere. Nunc et eget risus enim metus
            fermentum at pellentesque.
          </p>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="sm:h-[70vh] flex flex-col justify-center gap-16 py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 px-4 sm:w-4/5 mx-auto">
          {/* Left Column */}
          <div className="w-full lg:w-2/5  ">
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-sherman">
              Welcome to Trendingly
            </h2>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-3/5 flex items-center">
            <p className="text-sm sm:text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Tristique in eget habitant
              cras fermentum laoreet. Mi ullamcorper purus felis sit. Hendrerit
              nam mauris hac natoque. Fames non in amet bibendum magna sit
              adipiscing. Gravida nunc netus fermentum consectetur non quam.
              Tempor viverra mauris semper sagittis nisi cras in. Lacus
              scelerisque praesent ultrices neque ipsum consequat. Mauris in
              sociis tincidunt vitae consequat sit lacinia. A dignissim egestas
              porttitor ac varius eget.
            </p>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="relative w-full bg-black text-white font-sherman uppercase -rotate-1 mt-2 mb-20">
          <div className="flex flex-col items-center justify-center gap-1 overflow-hidden">
            <div className="flex animate-marquee-right">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex whitespace-nowrap">
                  {items.map((item, index) => (
                    <p
                      key={index}
                      className="text-base sm:text-2xl mx-8 sm:mx-16 py-3 sm:py-6"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blue Section */}
      <div className="h-screen bg-blue-600 flex flex-col items-center justify-center text-white relative px-4">
        <div
          className="absolute inset-0 bg-center opacity-25"
          style={{ backgroundImage: "url('/images/grid.png')" }}
        ></div>
        <div className="text-center w-full sm:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 text-5xl lg:text-8xl font-sherman text-stroke leading-normal"
          >
            From creator marketing to razor-sharp creative & humb-stopping
            content, we'll supercharge your social
          </motion.div>
          <button className="py-3 sm:py-[21px] px-6 sm:px-16 mt-6 bg-white text-black text-sm sm:text-[20px] font-bold rounded hover:bg-opacity-90 transition-all">
            Explore Services
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-12 sm:py-24 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">
          Supercharge Your Social
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {services.map((item, index) => (
            <div key={item.title} className="">
              <img
                src={`/images/image-${index + 1}.jpg`}
                alt={item.title}
                className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-6"
              />
              <h3 className="text-xl sm:text-4xl mb-2 sm:mb-3 uppercase font-sherman">
                {item.title}
              </h3>
              <p className="text-sm sm:text-[20px] text-[#3F3F3F] font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-6 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center justify-center h-auto sm:h-[433px] mx-auto bg-black text-white rounded-xl text-center p-8">
          <h2 className="text-3xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 font-sherman">
            Take Your Brand to the Next Level
          </h2>
          <button className="py-3 sm:py-[21px] px-6 sm:px-16 bg-white text-black text-sm sm:text-[20px] font-bold rounded hover:bg-opacity-90 transition-all">
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}
