import { useEffect, useRef, useState } from "react";

let currentWord = 0;
const CURSOR = "|";

export const useTyping = (
  words: string[],
  ref: { current: any },
  property: string,
  options: {
    autoStart?: boolean;
  } = {
    autoStart: true,
  }
) => {
  const [run, setRun] = useState<boolean>(true);
  let intervalId = useRef<NodeJS.Timer | null>(null);
  let timeoutId = useRef<NodeJS.Timeout | null>(null);
  let cursorIntervalId = useRef<NodeJS.Timeout | null>(null);
  let clearTextIntervalId = useRef<NodeJS.Timeout | null>(null);
  const stopInterval = (ref: { current: NodeJS.Timer | null }) => {
    if (!ref.current) return;
    clearInterval(ref.current);
    ref.current = null;
  };
  const stopTimeout = (ref: { current: NodeJS.Timer | null }) => {
    if (!ref.current) return;
    clearTimeout(ref.current);
    ref.current = null;
  };

  const glimpseCursor = () => {
    if (
      ref.current[property].charAt(ref.current[property].length - 1) === CURSOR
    ) {
      ref.current[property] = ref.current[property]?.slice(0, -1);
    } else {
      ref.current[property] += CURSOR;
    }
  };

  const generateTyping = () => {
    let currentLetter = 0;
    const startTyping = () => {
      ref.current[property] = "";
      intervalId.current = setInterval(() => {
        if (words[currentWord].length > currentLetter) {
          ref.current[property] =
            ref.current[property].slice(0, -1) +
            words[currentWord].charAt(currentLetter) +
            CURSOR;
          currentLetter += 1;
          return;
        }
        currentLetter = 0;
        stopInterval(intervalId);
        cursorIntervalId.current = setInterval(glimpseCursor, 400);

        timeoutId.current = setTimeout(() => {
          stopInterval(cursorIntervalId);

          clearTextIntervalId.current = setInterval(() => {
            if (ref.current[property].length > 0) {
              ref.current[property] = ref.current[property]?.slice(0, -1);
            } else {
              stopInterval(clearTextIntervalId);
              startTyping();
            }
          }, 50);
        }, 2000);

        if (words.length - 1 > currentWord) {
          currentWord += 1;
          return;
        }
        currentWord = 0;
      }, 50);
    };

    startTyping();
  };

  useEffect(() => {
    if (options) {
      generateTyping();
    }
    return () => {
      [intervalId, clearTextIntervalId, cursorIntervalId].map((id) =>
        stopInterval(id)
      );
      stopTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!run) {
      [intervalId, clearTextIntervalId, cursorIntervalId].map((id) =>
        stopInterval(id)
      );
      stopTimeout(timeoutId);
      ref.current[property] = "";
    } else {
      if (!intervalId.current) generateTyping();
    }
  }, [run]);

  return {
    stopTyping: () => setRun(false),
    startTyping: () => setRun(true),
  };
};
