import {Authenticator} from "./Authenticator.jsx";
import {Header} from "./Header.jsx";
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'

import { useState, useId } from "react";

export function DailyQuiz({ clueNo, question, image, alt = "Quiz image" }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="pb-3">
    <div className="border border-[#5E5E64] rounded-lg bg-white/10 transition-transform sm:w-80">
      {/* Header (click target) */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
      >
        <span className="flex-1 text-slate-800 dark:text-slate-50">{clueNo}</span>
        <ChevronUpDownIcon
          aria-hidden="true"
          className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
        />
      </button>

      {/* Collapsible panel */}

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className={`border-t border-gray-200 dark:border-slate-700 p-4 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}>
            <p className="text-slate-800 dark:text-slate-50">{question}</p>

            {image && (
              <img
                src={image}
                alt={alt}
                className="mt-3 w-full max-h-80 object-contain rounded-md"
              />
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
