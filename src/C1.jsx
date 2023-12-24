import {memo} from "react";
const C1 = ({isim}) => {
  console.log("C1 render oldu..");

  return (
    <>
      <section style={{ backgroundColor: "lightyellow", padding: "1rem" }}>
        Ben C1. Üst komponentten gelen isim: {isim}
      </section>
    </>
  );
};

export default memo(C1); // memo, react ile gelen yerleşik bir fonksiyon ve parametresindeki bileşende bir değişiklik yok ise hiç bir şey yapmıyor.
