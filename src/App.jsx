import Navbar from "./components/Navbar";
import FittedText from "./components/FittedText";
import TextBlock from "./components/TextBlock";
import Image from "./components/Image";
import Button from "./components/Button";
import BlogCard from "./components/BlogCard";
import EventCard from "./components/EventCard";

function App() {
  return (
    <div className="px-10">
      <Navbar />
      <header>
        <div className="leading-20 pt-10">
          <FittedText text="The Film Frame" />
        </div>
        <div className="  w-full text-center md:px-50 flex flex-col  lg:grid lg:grid-cols-3 lg:px-0">
          <div className="lg:flex">
            <TextBlock content="See beyond the Ordinary." />
          </div>
          <div className="lg:px-20 lg:text-left">
            <TextBlock content="Discover a world of creative expression, where new talents and timeless stories come together." />
          </div>
          <div className="lg:flex lg:justify-end lg:pt-10">
            <div className="border rounded-full p-2 lg:h-35 lg:w-35 lg:pt-10">
              Discover more
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col  md:flex-row gap-5 pt-5">
          <div className="w-full h-100 md:w-150 ">
            <Image src="FilmFrame/img9.jpg" alt="Cinematic Image" />
          </div>
          <div className="w-full h-100">
            <Image src="FilmFrame/img7.jpg" alt="Cinematic Image" />
          </div>
        </div>
        <div className="w-full h-80 mt-10">
          <Image src="FilmFrame/img12.jpg" alt="Cinematic Image" />
        </div>
      </header>
      <div id="about">
        <div className="w-full my-5 md:grid grid-cols-2 mt-20">
          <div
            id="#about"
            className=" md:flex md:flex-col  justify-between md:h-130 "
          >
            <div className="lg:pr-30">
              <TextBlock
                heading="Our Vision"
                content="Our vision is to craft powerful visual stories that inspire, engage, and leave a lasting impact. We aim to elevate voices—both emerging and established—through thoughtful, cinematic expression. Our mission is to create meaningful content that blends artistry with authenticity, connecting audiences to stories that matter."
              />
            </div>
            <div className="h-50 md:px-30">
              <Image src="FilmFrame/img10.jpg" alt="Cinematic Image" />
            </div>
          </div>

          <div className="mt-5 md:mt-0 md:pl-5 md:h-130 pt-5">
            <Image src="FilmFrame/img11.jpg" alt="Cinematic Image" />
          </div>
        </div>
      </div>
      <div id="blog">
        <div className="md:grid md:grid-cols-3 align-middle mt-20 mb-10 md:my-30">
          <TextBlock heading="Our Inspiration Blog" />
          <TextBlock content="To spark creativity and celebrate the beauty of visual storytelling. From behind-the-scenes moments to creative insights, we share what moves us — and what might move you too. Dive in, stay curious, and let the visuals speak." />
          <div>
            <Button text="Discover more" />
          </div>
        </div>
        <div className="flex flex-col md:grid grid-cols-2 md:gap-10 w-full ">
          <BlogCard
            href="#"
            src="FilmFrame/img17.jpg"
            title="How a Single Frame Can Change the Narrative"
          />
          <BlogCard
            href="#"
            src="FilmFrame/img15.jpg"
            title="From Raw Footage to Final Cut"
          />
          <BlogCard
            href="#"
            src="FilmFrame/img16.jpg"
            title="The Magic of Silence"
          />
        </div>
      </div>
      <div
        id="gallery"
        className="md:grid grid-cols-[1fr_2fr] gap-10 mt-20 md:mt-30"
      >
        <div className="">
          <div className="font-libre py-5">Visit Our Gallery</div>
          <div className="font-libre text-5xl">
            Discover Upcoming Art Events
          </div>
        </div>
        <div>
          <EventCard
            src="FilmFrame/img8.jpg"
            heading="Scene & Still: Photography Showcase"
            content="An intimate exhibit of still frames and visual studies that shaped our recent projects. Meet the artists and experience the moments that didn't make the final cut — but still speak loud."
          />
          <EventCard
            src="FilmFrame/img18.jpg"
            heading="Behind the Frame: Live Panel & Q&A"
            content="Dive into the creative process with a live discussion featuring filmmakers, editors, and visual artists. Unfiltered, unscripted, and all about the craft."
          />
          <EventCard
            src="FilmFrame/img19.jpg"
            heading="Premiere Screening Night"
            content="Join us for an exclusive first look at our latest short film. A night of visuals, stories, and post-screening conversations with the creators."
          />
        </div>
      </div>
      <div id="contact" className="mt-20 md:mt-30 md:grid grid-cols-2 ">
        <div className="h-100 ">
          <Image src="FilmFrame/img20.jpg" alt="Cinematic Image" />
        </div>
        <div className="bg-gray-200"></div>
      </div>
      <footer className="my-30 md:my-30">
      </footer>
    </div>
  );
}

export default App;
