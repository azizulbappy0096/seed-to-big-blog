import React, { useState } from "react";
import "ckeditor5-custom-build/build/main.css";
import "./index.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Editor as EditorSource } from "ckeditor5-custom-build/build/ckeditor";

import config from "./Editor.config"

import EditorModal from "../EditorModal/EditorModal"

function Editor() {
  const [data, setData] = useState("");

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

    parseData.title = title.innerText || "";
    doc.body.removeChild(title);
    parseData.body = doc.body.innerHTML || "";
    parseData.preview = preview.innerText || "";
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
          console.log({ event, editor, Data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      <EditorModal />
    </div>
  );
}

export default Editor;
