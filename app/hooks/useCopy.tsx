import { useState } from "react";
import { useCopyToClipboard } from "react-use";

const useCopy = () => {
  const [_, copyToClipboard] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const copy = (value: string) => {
    if (!value) return;

    copyToClipboard(value);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return { isCopied, copy };
};

export default useCopy;
