import JsonContext from "../contexts/JsonContext";
import { useContext, useRef, useState } from "react";
import FormHeading from "./FormHeading";
import InputField from "./InputField";
import FieldWrapper from "./FieldWrapper";
import RadioField from "./RadioField";
import SelectField from "./SelectField";
import Info from "./Info";
import { getSortedArray } from "../Sort";

const getElement = (dataItem, index) => {
  const {
    uiType,
    label,
    description,
    validate,
    jsonKey,
    placeholder,
  } = dataItem ?? {};
  const { required, immutable, options } = validate ?? {};

  if (!uiType || !jsonKey) {
    return null;
  }

  switch (uiType) {
    case "Input":
      return (
        <InputField
          label={label}
          required={required}
          placeholder={placeholder}
          immutable={immutable}
          description={description}
          jsonKey={jsonKey}
          key={jsonKey}
        />
      );
      break;

    case "Group":
      if (!dataItem.subParameters) return null;
      getSortedArray(dataItem.subParameters);
      return (
        <div className="w-full" key={index}>
          <div className="border-b-2 pb-3 mb-3 flex items-center">
            {dataItem.label.replace("_", " ")}
            {description && (
              <Info description={description} label={label} />
            )}
          </div>
          {dataItem.subParameters?.map((param, index) => {
            return <div key={jsonKey}>{getElement(param)}</div>;
          })}
        </div>
      );
      break;

    case "Radio":
      if (!dataItem.validate.options) return null;
      return (
        <RadioField
          key={jsonKey}
          options={dataItem.validate.options}
          defaultValue={dataItem.validate.defaultValue}
          jsonKey={dataItem.jsonKey}
          required={dataItem.validate.required}
          description={description}
        />
      );
      break;

    case "Ignore":
      // return <></>;
      if (!dataItem.subParameters || !dataItem.conditions)
        return null;
      getSortedArray(dataItem.subParameters);
      return (
        <>
          <div className="w-full">
            {dataItem.subParameters?.map((param, index) => {
              return <div key={index}>{getElement(param)}</div>;
            })}
          </div>
        </>
      );
      break;

    case "Select":
      if (!dataItem.validate.options) return null;
      return (
        <SelectField
          key={index}
          options={dataItem.validate.options}
          defaultValue={dataItem.validate.defaultValue}
          label={dataItem.label}
          jsonkey={dataItem.jsonKey}
          required={dataItem.validate.required}
          description={description}
        />
      );
      break;

    default:
      return null;
  }
};

const Form = () => {
  const { jsonData, updateJsonData } = useContext(JsonContext);
  const [radioState, setRadioState] = useState([])

  return (
    <form className="flex flex-col bg-base-100 w-10/12 h-4/6 overflow-auto rounded-xl border-2 border-indigo-400 px-3 py-4 shadow-lg">
      {jsonData?.length !== 0 &&
        jsonData?.map((dataItem, index) => {
          return (
            <FieldWrapper>{getElement(dataItem, index)}</FieldWrapper>
          );
        })}
    </form>
  );
};

export default Form;
