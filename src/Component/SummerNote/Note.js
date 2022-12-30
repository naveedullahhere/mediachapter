import React, { useState, useEffect, useContext } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { AppContext } from '../../context/AppContext';


export const Note = () => {

    const { setNoteValue } = useContext(AppContext);


    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setNoteValue(html);
    }, [editorState]);

    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
        />
    )
}
