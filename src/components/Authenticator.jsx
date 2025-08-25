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
      navigate("/daily-quiz", { replace: true });
    }
  }, [navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    const ok = answer.trim().toLowerCase() === secret.toLowerCase();
    setStatus(ok ? "ok" : "err");
    if (ok) {
      localStorage.setItem("quiz_unlocked", "true");
      setTimeout(() => navigate("/daily-quiz"), 600); // tiny pause for feedback
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-2">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 sm:p-8 shadow-sm flex flex-col items-center">

          {/* Drawing */}
          <img
            src={maxDrawing}
            alt="Max Drawing"
            className="w-50 h-50 object-fit mb-4 rounded-xl shadow"
          />

          {/* Prompt */}
          <h2 className="text-center text-lg sm:text-2xl font-semibold text-slate-800">
            Hm… What do you reckon the word is on the sweater? 🤔
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
              } `}
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-sky-600 text-slate-800 font-medium py-3 shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 active:scale-[.98] transition"
            >
              Submit
            </button>
          </form>

          {/* Feedback */}
          {status === "err" && (
            <p
              role="alert"
              aria-live="polite"
              className="mt-3 text-center text-sm text-rose-600"
            >
              Close — but not quite. Try again!
            </p>
          )}

          {status === "ok" && (
            <p
              aria-live="polite"
              className="mt-3 text-center text-sm text-emerald-600 "
            >
              Nailed it! 🎉
            </p>
          )}
        </div>

        {/* Optional hint */}
        <p className="mt-3 text-center text-xs text-slate-500 ">
          Hint: check the sweater 😉
        </p>
      </div>
    </div>
  );
}
