import Editor from "@monaco-editor/react";
import JsonContext from "../contexts/JsonContext";
import { useContext } from "react";
import { getSortedArray } from "../Sort";

const JsonEditor = () => {
  const { jsonData, updateJsonData } = useContext(JsonContext);

  function handleEditorChange(value) {
    const data = JSON.parse(value);

    if (data) {
      getSortedArray(data);
    }

    updateJsonData(data);
  }

  const options = {
    padding: {
      top: 15,
    },
    fontSize: 16,
    tabSize: 2,
    minimap: {
      enabled: false,
    },
  };

  return (
    <Editor
      height="100vh"
      width="50%"
      defaultLanguage="json"
      defaultValue={JSON.stringify(jsonData)}
      onChange={handleEditorChange}
      theme="vs-dark"
      options={options}
    />
  );
};

export default JsonEditor;
