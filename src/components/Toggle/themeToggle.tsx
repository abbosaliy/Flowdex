import { useEffect, useState } from 'react';
import { BsBrightnessHigh } from 'react-icons/bs';
import { PiMoonDuotone } from 'react-icons/pi';

function ThemaToggle() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const savedThema = localStorage.getItem('thema');
    if (savedThema === 'dark') {
      document.documentElement.classList.add('dark');
      setToggle(true);
    } else {
      document.documentElement.classList.remove('dark');
      setToggle(false);
    }
  }, []);

  function handleToggle() {
    setToggle(!toggle);
    if (!toggle) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('thema', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('thema', 'light');
    }
  }

  return (
    <button
      className="flex items-center gap-2 text-xl transition hover:scale-110 hover:cursor-pointer"
      onClick={handleToggle}
    >
      {toggle ? <PiMoonDuotone /> : <BsBrightnessHigh />}
    </button>
  );
}

export default ThemaToggle;
