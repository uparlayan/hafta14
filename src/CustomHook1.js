import { useEffect } from "react";
import useYerelDepo from "./hooks/useYerelDepo";

const CustomHook = () => {
  const [theme, setTheme] = useYerelDepo("theme", "light");

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <span>Current theme: {theme}</span>
      <button onClick={() => setTheme("light")}>Light Theme</button>
      <button onClick={() => setTheme("dark")}>Dark Theme</button>
    </div>
  );
};

export default CustomHook;
