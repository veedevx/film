import Image from "./Image";
export default function BlogCard({ href, src, title }) {
  return (
    <a href={href} className="hover:opacity-80">
      <div className="relative w-full lg:h-80 h-50 overflow-hidden ">
        {/* Image as background layer */}
        <div className="absolute left-0 top-0 z-0 brightness-50 ">
          <Image src={src} />
        </div>
        {/* Content on top */}
        <div className="relative z-10 p-2 font-libre h-full text-white ">
          {title}
        </div>
      </div>
    </a>
  );
}
