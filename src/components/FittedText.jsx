import { useState, useEffect } from "react";
import { ReactFitty } from "react-fitty";
//Scales up (or down) text so it fits perfectly to its parent container.

export default function FittedText({ text }) {
    const [isFontReady, setIsFontReady] = useState(false);

    useEffect(() => {
      document.fonts.ready.then(() => {
        setIsFontReady(true);
      });
    }, []);
  
    if (!isFontReady) return null; // Don't render until font is ready
  return <ReactFitty>{text}</ReactFitty>;
}
