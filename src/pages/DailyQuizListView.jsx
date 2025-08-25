import {Header} from "../components/Header.jsx";
import {Authenticator} from "../components/Authenticator.jsx";

export function DailyQuizListView() {
  return (
    <div className="min-h-screen">
     <Header/>
      <main className="min-h-[calc(100vh-4rem)] grid place-items-center px-4 text-center">
        <div>
          <h1 className="text-xl sm:text-3xl font-semibold py-2 text-slate-800 dark:text-slate-50"> Please be patient ^^</h1>
          <text className="text-slate-800 dark:text-slate-50">Did you know!? Patience is virtue.</text>
        </div>
      </main>
    </div>
  );
}