import { Typewriter } from "@/components/ui/typewriter"

const TYPEWRITER_TEXTS = [
  "thinking",
  "innovating",
  "creating",
  "building",
  "solving problems",
  "pushing boundaries"
]

export function CuriosityCollaborator() {
  return (
    <section className="bg-white bg-opacity-90 text-black py-12 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content - Main Heading */}
        <div>
          <h2 className="font-serif text-2xl md:text-3xl leading-[1.2] tracking-tight">
            Your curiosity's collaborator
          </h2>
        </div>

        {/* Right Content - Description */}
        <div className="flex items-center">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            There's never been a worse time to be a problem, or a better time to be a problem solver.
          </p>
        </div>
      </div>

      {/* Centered Typewriter Section */}
      <div className="max-w-[1000px] mx-auto mt-12 flex justify-center">
        <div className="text-center">
          <div className="text-lg md:text-xl font-medium text-gray-800">
            <span>Keep </span>
            <Typewriter
              text={TYPEWRITER_TEXTS}
              speed={80}
              className="text-blue-600 font-semibold"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"_"}
              cursorClassName="ml-1 text-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-[1000px] mx-auto mt-8 flex justify-center">
        <video
          src="/videos/curiosity-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[600px] h-auto rounded-lg shadow-lg min-h-[200px] bg-gray-100 aspect-video object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}