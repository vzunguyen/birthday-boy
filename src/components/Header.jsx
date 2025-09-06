import maxLibraryPhoto from '../assets/max-library.png';

export function Header() {
  return (
      <header className="top-0 pb-3">
        <div className="flex space-x-1 place-content-center">
          <img
            src={maxLibraryPhoto}
            alt="A photo of Max"
            className="inline-block h-18 w-18 m-2 rounded-full"
          />
          <div className="self-center pl-1">
            <p className="text-3l font-sans relative text-slate-800 dark:text-slate-50">Max Robert Hunt</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">The Hot Guy At Work 🫢</p>
          </div>
        </div>
      </header>
  )
}