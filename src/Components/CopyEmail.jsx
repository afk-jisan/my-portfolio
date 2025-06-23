import { useState } from "react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "baktier.galib.jisan@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="relative px-5 py-2 bg-[#69070a] text-white font-semibold rounded-lg shadow-md hover:bg-[#69070a80] active:scale-95 transition-transform duration-150"
    >
      Copy Email
      {copied && (
        <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#69070a] text-white text-xs px-2 py-1 rounded animate-fade-in-out">
          Copied!
        </span>
      )}
    </button>
  );
};

export default CopyEmailButton;
