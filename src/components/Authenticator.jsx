import {useEffect, useState} from "react";
import maxDrawing from "../assets/max-drawing.png";
import { useNavigate } from "react-router-dom";

export function Authenticator() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  const secret = "continuation";

  useEffect(() => {
    if (localStorage.getItem("quiz_unlocked") === "true") {
      navigate("/daily-quiz-list", { replace: true });
    }
  }, [navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    const ok = answer.trim().toLowerCase() === secret.toLowerCase();
    setStatus(ok ? "ok" : "err");
    if (ok) {
      localStorage.setItem("quiz_unlocked", "true");
      setTimeout(() => navigate("/daily-quiz-list"), 700); // tiny pause for feedback
    }
  };

  const resetGate = () => {
    // delete just our key
    localStorage.removeItem("quiz_unlocked");
    setStatus(null);
    setAnswer("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center md:px-2">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl backdrop-blur p-5 sm:p-8 flex flex-col items-center">

          {/* Drawing */}
          <img
            src={maxDrawing}
            alt="Max Drawing"
            className="w-50 h-50 md:w-75 md:h-75 object-fit mb-4 rounded-xl shadow"
          />

          {/* Prompt */}
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-50">
            Hm… What do you reckon the word on the sweater is? 🤔
          </h2>

          {/* Form */}
          <form onSubmit={onSubmit} className="mt-6 space-y-3 w-full">
            <input
              type="text"
              placeholder="Enter your answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className={`w-full rounded-xl px-4 py-3 shadow-inner bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 border ${
                status === "err" ? "border-rose-300" : "border-slate-300"
              } bg-slate-950`}
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-sky-600 text-slate-800 dark:text-slate-50 font-medium py-3 shadow active:scale-[.98] transition"
            >
              Submit
            </button>

            {/* Reset / delete localStorage key */}
            {/*<button*/}
            {/*  type="button"*/}
            {/*  onClick={resetGate}*/}
            {/*  className="mt-4 text-xs text-gray-500 underline underline-offset-2 hover:text-gray-700"*/}
            {/*  title="Delete unlock state"*/}
            {/*>*/}
            {/*  Reset &amp; relock*/}
            {/*</button>*/}
          </form>

          {/* Feedback */}
          {status === "err" && (
            <p
              role="alert"
              aria-live="polite"
              className="mt-3 text-center text-sm text-rose-600"
            >
              Nuh uh ☺️
            </p>
          )}

          {status === "ok" && (
            <p
              aria-live="polite"
              className="mt-3 text-center text-sm text-emerald-600 "
            >
              You nailed it! Gud boyo! 🎉 REDIRECTING...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
