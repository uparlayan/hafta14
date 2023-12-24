import { useCallback, useState } from "react";

export default function useToggle(ilkDeger = false) {
  const [value, setValue] = useState(ilkDeger);

  const toggle = useCallback(() => {
    setValue((eskiDeger) => !eskiDeger);
  }, []);

  return [value, toggle];
}
