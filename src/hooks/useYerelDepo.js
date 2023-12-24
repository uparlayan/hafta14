import { useState } from "react";

export default function useYerelDepo(anahtar, ilkDeger) {
  const [saklananDeger, degerGuncelle] = useState(() => {
    try {
      const item = window.localStorage.getItem(anahtar);
      return item ? JSON.parse(item) : ilkDeger;
    } catch (error) {
      console.log(error);
      return ilkDeger;
    }
  });

  const degeriDegistir = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(saklananDeger) : value;
      degerGuncelle(valueToStore);
      window.localStorage.setItem(anahtar, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [saklananDeger, degeriDegistir];
}
