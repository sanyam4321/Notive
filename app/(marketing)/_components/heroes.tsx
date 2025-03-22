import Image from "next/image";
import React from "react";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4">
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Image
            src="/hero-light-mode.webp"
            alt="documents"
            width={1792}
            height={1024}
            className="w-full h-auto object-contain dark:hidden"
            priority
          />
          <Image
            src="/hero-dark-mode.webp"
            alt="documents"
            width={1792}
            height={1024}
            className="w-full h-auto object-contain hidden dark:block"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
