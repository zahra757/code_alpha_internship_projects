import React, { useState, useEffect } from 'react';

export default function Skills() {
  // Step 1: Set up state to store the progress for each skill
  const [jsProgress, setJsProgress] = useState(0);
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [tailwindProgress, setTailwindProgress] = useState(0);
  const [reactProgress, setReactProgress] = useState(0);

  // Step 2: Use useEffect to animate progress when the component mounts
  useEffect(() => {
    // Increase JS Progress
    const jsInterval = setInterval(() => {
      if (jsProgress < 65) {
        setJsProgress(jsProgress + 1); // Increase JS by 1 each time
      } else {
        clearInterval(jsInterval); // Stop when we reach 65%
      }
    }, 20); // Update every 20ms

    // Increase HTML Progress
    const htmlInterval = setInterval(() => {
      if (htmlProgress < 100) {
        setHtmlProgress(htmlProgress + 1); // Increase HTML by 1 each time
      } else {
        clearInterval(htmlInterval); // Stop when we reach 100%
      }
    }, 20);

    // Increase Tailwind Progress
    const tailwindInterval = setInterval(() => {
      if (tailwindProgress < 80) {
        setTailwindProgress(tailwindProgress + 1); // Increase Tailwind by 1 each time
      } else {
        clearInterval(tailwindInterval); // Stop when we reach 80%
      }
    }, 20);

    // Increase React Progress
    const reactInterval = setInterval(() => {
      if (reactProgress < 75) {
        setReactProgress(reactProgress + 1); // Increase React by 1 each time
      } else {
        clearInterval(reactInterval); // Stop when we reach 75%
      }
    }, 20);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(jsInterval);
      clearInterval(htmlInterval);
      clearInterval(tailwindInterval);
      clearInterval(reactInterval);
    };
  }, [jsProgress, htmlProgress, tailwindProgress, reactProgress]);

  return (
    <div>
      <div>
        <h3 className='underline text-center mt-10 font-bold text-3xl'>SKILLS</h3>
        <span className='opacity-25 flex justify-center flex-wrap font-bold text-5xl'>SKILLS</span>
      </div>

      <div className="mt-8 p-10">
        <div className="flex flex-wrap gap-8 justify-center">
          {/* First Progress Bar */}
          <div className="w-full sm:w-[20rem]">
            <span className="block font-semibold mb-2">JS</span>
            <div className="h-2 rounded-md w-full bg-neutral-200 dark:bg-neutral-600">
              <div
                className="h-2 rounded-md"
                style={{
                  width: `${jsProgress}%`, // Dynamic width based on state
                  backgroundColor: 'yellowgreen',
                }}
              ></div>
            </div>
            <span className="block text-right font-semibold mt-1">{jsProgress}%</span>
          </div>

          {/* Second Progress Bar */}
          <div className="w-full sm:w-[20rem]">
            <span className="block font-semibold mb-2">HTML5</span>
            <div className="h-2 rounded-md w-full bg-neutral-200 dark:bg-neutral-600">
              <div
                className="h-2 rounded-md"
                style={{
                  width: `${htmlProgress}%`,
                  backgroundColor: 'yellowgreen',
                }}
              ></div>
            </div>
            <span className="block text-right font-semibold mt-1">{htmlProgress}%</span>
          </div>

          {/* Third Progress Bar */}
          <div className="w-full sm:w-[20rem]">
            <span className="block font-semibold mb-2">TAILWIND CSS</span>
            <div className="h-2 rounded-md w-full bg-neutral-200 dark:bg-neutral-600">
              <div
                className="h-2 rounded-md"
                style={{
                  width: `${tailwindProgress}%`,
                  backgroundColor: 'yellowgreen',
                }}
              ></div>
            </div>
            <span className="block text-right font-semibold mt-1">{tailwindProgress}%</span>
          </div>

          {/* Fourth Progress Bar */}
          <div className="w-full sm:w-[20rem]">
            <span className="block font-semibold mb-2">REACTJS</span>
            <div className="h-2 rounded-md w-full bg-neutral-200 dark:bg-neutral-600">
              <div
                className="h-2 rounded-md"
                style={{
                  width: `${reactProgress}%`,
                  backgroundColor: 'yellowgreen',
                }}
              ></div>
            </div>
            <span className="block text-right font-semibold mt-1">{reactProgress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
