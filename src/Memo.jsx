import { useCallback, useEffect, useState } from "react";
import C1 from "./C1";

const Memo = () => {
  const [sayi, sayiGuncelle] = useState(0);
  const [isim, isimGuncelle] = useState("Uğur");

  const tiklama = useCallback(() => {
    sayiGuncelle((eski) => eski + 5);

  }, []);

  useEffect(() => {
    if (sayi === 25) {
      isimGuncelle("Berkan");
    }
  }, [sayi]); 

  return (
    <>
      <h1>Memo Komponenti</h1>
      <C1 isim={isim} tiklama={tiklama} />
      <button
        onClick={tiklama}
      >Arttır
      </button>
      <hr />
      Sayı: {sayi}
    </>
  );
};

export default Memo;
