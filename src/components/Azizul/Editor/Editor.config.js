import React, { useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";


//
const config = {
  placeholder: "Start writing...",
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "underline",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "findAndReplace",
    "alignment",
    "outdent",
    "indent",
    "removeFormat",
    "|",
    "fontSize",
    // "fontColor",
    "fontFamily",
    "fontBackgroundColor",
    "highlight",
    "|",
    "code",
    "codeBlock",
    "imageUpload",
    "blockQuote",
    "insertTable",
    "|",
    "horizontalLine",
    "specialCharacters",
    "strikethrough",
    "subscript",
    "superscript",
    "|",
    "undo",
    "redo",
  ],
  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      {
        model: "heading1",
        view: "h2",
        title: "Heading 1",
        class: "ck-heading_heading2",
      },
      {
        model: "heading2",
        view: "h3",
        title: "Heading 2",
        class: "ck-heading_heading3",
      },
    ],
  },
  alignment: {
    options: ["left", "center", "right"],
  },
  highlight: {
    options: [
      {
        model: "yellowMarker",
        class: "marker-yellow",
        title: "Yellow marker",
        color: "var(--ck-highlight-marker-yellow)",
        type: "marker",
      },
      {
        model: "greenMarker",
        class: "marker-green",
        title: "Green marker",
        color: "var(--ck-highlight-marker-green)",
        type: "marker",
      },
      {
        model: "blueMarker",
        class: "marker-blue",
        title: "Blue marker",
        color: "var(--ck-highlight-marker-blue)",
        type: "marker",
      },
      {
        model: "redPen",
        class: "pen-red",
        title: "Red pen",
        color: "var(--ck-highlight-pen-red)",
        type: "pen",
      },
    ],
  },
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "linkImage",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties",
    ],
  },
  fontFamily: {
    options: [
      "default",
      "Ubuntu, Arial, sans-serif",
      "Ubuntu Mono, Courier New, Courier, monospace",
    ],
  },
  simpleUpload: {
    // The URL that the images are uploaded to.
    uploadUrl: "http://localhost:2000/upload",

    // Enable the XMLHttpRequest.withCredentials property.
    // withCredentials: true,

    // // Headers sent along with the XMLHttpRequest to the upload server.
    // headers: {
    //     'X-CSRF-TOKEN': 'CSRF-Token',
    //     Authorization: 'Bearer <JSON Web Token>'
    // }
}
};

function EditorConfig() {
  const [data, setData] = useState("")

  const seperateTitle = (blog) => {
    
  }

  return (
    <CKEditor
      editor={Editor}
      config={config}
      data={data}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        const Data = editor.getData();
        setData(Data)
        console.log({ event, editor, Data });
      }}
      onBlur={(event, editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor);
      }}
    />
  );
}

export default EditorConfig;
