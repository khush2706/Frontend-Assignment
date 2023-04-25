import { createContext, useState } from "react";

const JsonContext = createContext();

export default JsonContext;

export function JsonProvider({ children }) {
  const [jsonData, setJsonData] = useState([]);

  const updateJsonData = (jsonData) => {
    setJsonData(jsonData);
  };

  return (
    <JsonContext.Provider value={{ jsonData, updateJsonData }}>
      {children}
    </JsonContext.Provider>
  );
}
