import React, { useReducer, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Editor as EditorSource } from "ckeditor5-custom-build/build/ckeditor";

// css
import "ckeditor5-custom-build/build/main.css";
import "./index.css";

import config from "./Editor.config";
// components
import EditorModal from "../EditorModal/EditorModal";

function Editor() {
  const [data, setData] = useState("");

  const [seperatedData, seperatedDispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_TITLE":
          return {
            ...state,
            title: action.title,
          };
        case "SET_BODY":
          return {
            ...state,
            title: action.body,
          };
        case "SET_PREVIEW":
          return {
            ...state,
            title: action.preview,
          };
        case "ALL":
          return action.payload;
        default:
          return state;
      }
    },
    {
      title: "",
      body: "",
      preview: "",
    }
  );

  const seperateTitle = (editorData) => {
    let parseData = {
      title: "",
      body: "",
      preview: "",
    };
    const parser = new DOMParser();
    const doc = parser.parseFromString(editorData, "text/html");
    const title = doc.getElementsByTagName("h1")[0];
    const preview = doc.getElementsByTagName("p")[0];

    if (title !== "undefined" && preview !== "undefined") {
      parseData.title = title.innerText || "";
      doc.body.removeChild(title);
      parseData.body = doc.body.innerHTML || "";
      parseData.preview = preview.innerText || "";
      seperatedDispatch({
        type: "ALL",
        payload: parseData,
      });
    }
  };

  const handleTitle = (value) => {
    seperatedDispatch({
      type: "SET_TITLE",
      title: value,
    });

    let titleHTML = `<h1> ${value} </h2>`;
    let concatedData = titleHTML + seperatedData.body;
    setData(concatedData);
  };

  return (
    <div className="container my-4 pt-4">
      <CKEditor
        editor={EditorSource}
        config={config}
        data={data}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const Data = editor.getData();
          setData(Data);
          seperateTitle(Data);
          console.log({ event, editor, Data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      <EditorModal
        title={seperatedData.title}
        preview={seperatedData.preview}
        handleTitle={handleTitle}
      />
    </div>
  );
}

export default Editor;
