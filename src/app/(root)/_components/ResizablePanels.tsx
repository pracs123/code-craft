"use client";

import EditorPanel from "./EditorPanel";
import OutputPanel from "./OutputPanel";
import { useState, useEffect } from "react";

export default function ResizablePanels() {
  const [editorWidth, setEditorWidth] = useState(50);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = (e: { clientX: number }) => {
    if (!isMobileView) {
      const newWidth = (e.clientX / window.innerWidth) * 100;
      if (newWidth > 35 && newWidth < 80) {
        // Adjusted minimum width to 35%
        setEditorWidth(newWidth);
      }
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 790) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    handleWindowResize(); // Initial check
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 h-full">
      <div
        className={`flex gap-2 relative ${isMobileView ? "flex-col" : "flex-row"} h-full`}
      >
        <div
          className="p-2 overflow-hidden"
          style={{ flexBasis: isMobileView ? "100%" : `${editorWidth}%` }}
        >
          <EditorPanel />
        </div>

        {!isMobileView && (
          <div
            className="w-0.5 bg-gray-800 cursor-col-resize"
            onMouseDown={() => {
              document.addEventListener("mousemove", handleResize);
              document.addEventListener(
                "mouseup",
                () => {
                  document.removeEventListener("mousemove", handleResize);
                },
                { once: true }
              );
            }}
          />
        )}

        <div
          className="p-2 overflow-auto flex-1 "
          style={{ flexBasis: isMobileView ? "100%" : `${100 - editorWidth}%` }}
        >
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
