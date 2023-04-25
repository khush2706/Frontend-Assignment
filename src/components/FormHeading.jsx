import { useContext } from "react";
import JsonContext from "../contexts/JsonContext";

const FormHeading = () => {
  const { jsonData, updateJsonData } = useContext(JsonContext);
  return (
    <div
      className="w-full text-lg font-medium tracking-wide leading-snug"
      placeholder={jsonData[0].placeholder}
    >
      {jsonData[0].formName}
      <div className="divider m-0"></div>
    </div>
  );
};

export default FormHeading;
