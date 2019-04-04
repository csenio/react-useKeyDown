import { useState, useEffect } from "react";

const useKeyDown = () => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [keys]);

  const onKeyDown = ({ key }) => {
    console.log(key);
    setKeys(k => [...new Set(k).add(key)]);
  };
  const onKeyUp = ({ key }) => {
    setKeys(ks => ks.filter(k => k !== key));
  };

  return [...keys];
};

export default useKeyDown;
