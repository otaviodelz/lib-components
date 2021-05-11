import { useContext } from "react";
import LibContext from "../store/LibContext";

const useLibContext = () => {
  const context = useContext(LibContext);

    if (!context) console.log('Context not defined');

  return context;
};

export default useLibContext;