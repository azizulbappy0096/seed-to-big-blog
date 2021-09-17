import React, { useState } from "react";




//
const config = {
  placeholder: "Tell your story...",
  toolbar: [
    "heading",
    "removeFormat",
    "|",
    "bold",
    "italic",
    "underline",
    "link",
    "insertTable",
    "bulletedList",
    "numberedList",
    "|",
    "alignment",
    "outdent",
    "indent",
    "|",
    "findAndReplace",
    "fontSize",
    // "fontColor",
    // "fontFamily",
    // "fontBackgroundColor",
    "highlight",
    "|",
    "code",
    "codeBlock",
    "imageUpload",
    "blockQuote",
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
  title: {
    placeholder: "Title"
  },
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
      "toggleImageCaption",
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
  // fontFamily: {
  //   options: [
  //     "default",
  //     "Ubuntu, Arial, sans-serif",
  //     "Ubuntu Mono, Courier New, Courier, monospace",
  //   ],
  // },
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


export default config;
