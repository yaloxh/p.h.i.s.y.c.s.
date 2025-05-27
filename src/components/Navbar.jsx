import { useEffect, useState } from 'react';
import { navLists } from '../constants';
import { FaGithub } from 'react-icons/fa';

const GITHUB_REPO = 'yaloxh/p.h.i.s.y.c.s.';

const Navbar = () => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_REPO}`)
      .then(res => res.json())
      .then(data => setStars(data.stargazers_count))
      .catch(() => setStars(null));
  }, []);

  return (
    <header className="w-full pt-5 pb-0 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-end max-sm:justify-end max-sm:flex-1">
          <a
            href={`https://github.com/${GITHUB_REPO}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray hover:text-white transition-all"
            title="исходники сайта"
          >
            <FaGithub size={22} />
            {stars !== null && (
              <span className="text-sm">{stars} ★</span>
            )}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar