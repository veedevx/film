import { IKImage } from "imagekitio-react";

const Image = ({ src, className, w, h, alt }) => (
  <IKImage
    urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}  //ImageKit URL Endpoint
    path={src}  // Image path
    className={'w-full h-full object-cover'}  // Optional class for styling
    loading="lazy"  // Lazy loading for better performance
    lqip={{ active: true, quality: 20 }}  // Low-Quality Image Placeholder for faster load
    alt={alt}  // Alt text for SEO and accessibility
    width={w}  // Image width
    height={h}  // Image height
  />
);

export default Image;