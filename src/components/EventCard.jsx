import TextBlock from "./TextBlock";
import Image from "./Image";
export default function EventCard({src,alt,heading,content }) {
  return (
    <div className="mt-10 md:grid grid-cols-2 gap-10">
      <div className="h-60">
        <Image src={src} alt={alt} />
      </div>
      <div className="mt-5">
        <TextBlock heading={heading} content={content}></TextBlock>
      </div>
    </div>
  );
}
