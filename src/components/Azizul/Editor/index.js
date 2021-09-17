import React from 'react'
import "ckeditor5-custom-build/build/main.css";
import "./index.css"
import EditorConfig from './Editor.config'


function Editor() {
    return (
        <div className="container my-4 pt-4">
            <EditorConfig />
        </div>
    )
}

export default Editor
