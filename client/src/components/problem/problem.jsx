import React from 'react'
import ReactMarkdown from 'react-markdown'

import file from '../../assets/sample.md'

import Editor from "@monaco-editor/react";
import ReactResizeDetector from 'react-resize-detector';
import MonacoEditor from 'react-monaco-editor';

import './markdown.css'
import './problem.css'

// import 'https://sindresorhus.com/github-markdown-css/github-markdown.css'

const Problem = () => {

  

  const [MarkdownData, setMarkdownData] = React.useState("");

  React.useEffect(() => {
    fetch(file)
    .then((r) => r.text())
    .then(text  => {
      setMarkdownData(text);
    })
  }, []);

  const editorRef = React.useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current?.getValue());
  }

  return (
    <div className='problemPage'>
      <div className='problemo'>
        <h1>Problems</h1>
        <ReactMarkdown className='markdown-body' children={MarkdownData}/>
      </div>
      <div className='editor'>

      <Editor
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />


      </div>
    </div>
  )
}

export default Problem