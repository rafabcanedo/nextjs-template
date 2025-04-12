export function Footer() {
  return (
    <footer className="flex flex-col md:flex md:flex-row md:justify-between mt-8 p-8 justify-center items-center gap-2 bg-slate-200 shadow rounded-md">
      <div className="flex flex-col md:ml-6 items-center justify-center gap-2">
        <div className="">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
      </div>

      <div className="">
        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>

        <div>
          <span className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} Canedo Dev. All rights reserved
          </span>
        </div>
      </div>

      <div></div>
    </footer>
  );
}
