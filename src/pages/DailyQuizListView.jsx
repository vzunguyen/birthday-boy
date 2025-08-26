import {Header} from "../components/Header.jsx";
import {Authenticator} from "../components/Authenticator.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const KEY = "quiz_unlocked";
const EXP_KEY = "quiz_unlocked_exp";

export function DailyQuizListView() {
  const navigate = useNavigate();

  useEffect(() => {
    const exp = Number(localStorage.getItem(EXP_KEY) || 0);
    const unlocked = localStorage.getItem(KEY) === "true";

    if (!unlocked || exp <= Date.now()) {
      // expired or missing → clean and bounce
      localStorage.removeItem(KEY);
      localStorage.removeItem(EXP_KEY);
      navigate("/", { replace: true });
      return;
    }

    // Auto relock exactly at expiry while user is on the page
    const t = setTimeout(() => {
      localStorage.removeItem(KEY);
      localStorage.removeItem(EXP_KEY);
      navigate("/", { replace: true });
    }, exp - Date.now());

    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="min-h-screen">
     <Header/>
      <main className="min-h-[calc(100vh-4rem)] grid place-items-center px-4 text-center">
        <div>
          <h1 className="text-xl sm:text-3xl font-semibold py-2 text-slate-800 dark:text-slate-50"> Please be patient ^^</h1>
          <text className="text-slate-800 dark:text-slate-50">Did you know!? Patience is a virtue.</text>
        </div>
      </main>
    </div>
  );
}