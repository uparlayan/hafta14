import { useEffect, useState } from "react";
import useToggle from "./hooks/useToggle";

function CustomHook2() {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [okumaModu, okumaModuAcKapa] = useToggle(true);

  return (
    <div>
      <button onClick={toggleModal}>
        {isModalOpen ? "Close Modal" : "Open Modal"}
      </button>
      {isModalOpen && <div>Modal Content</div>}
      <div>
        <button onClick={okumaModuAcKapa}>{okumaModu ? "✒" : "📖"}</button>
        {okumaModu ? "Şu anda sayfa okuma modunda" : "Sayfa yazma modunda"}
      </div>
    </div>
  );
}

export default CustomHook2;
