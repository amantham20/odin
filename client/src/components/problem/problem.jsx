import React from 'react'
import ReactMarkdown from 'react-markdown'

import file from '../../assets/sample.md'

import Editor from "@monaco-editor/react";
import ReactResizeDetector from 'react-resize-detector';
import MonacoEditor from 'react-monaco-editor';

import * as monaco from 'monaco-editor';

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

  const editorOptions =  {
      minimap: {
        enabled: false
      },
      selectOnLineNumbers: true,
      wordWrap: 'on'
    };

  return (
    <div className='problemPage'>
      <div className='problemo'>
        <h1>Problems</h1>
        <ReactMarkdown className='markdown-body' children={MarkdownData}/>
      </div>
      <div className='codearea'>
      <div className='editor'>


        <MOEditor editorOptions={editorOptions}/>


      </div>
      </div>
    </div>
  )
}

class MOEditor extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          width: 0,
          height: 0,
      }
      this.editor_div = React.createRef()

      this.handle_rezise = this.handle_rezise.bind(this);
  }

  componentDidMount() {
      const editor_model = monaco.editor.createModel('#Hey There this is aman', 'python');
      this.monaco_editor = monaco.editor.create(this.editor_div.current, this.props.editorOptions);
      this.monaco_editor.setModel(editor_model);
  }

  componentWillUnmount() {
      this.monaco_editor && this.monaco_editor.dispose();
  }

  handle_rezise(width, height) {
      this.monaco_editor.layout({ height, width });
  }

  render() {
      return(
          <div 
              className="editor-container"
              style={{ height: '100%' }}>
              <ReactResizeDetector
                  handleWidth
                  handleHeight
                  onResize={ this.handle_rezise }
                  refreshMode="debounce"
                  refreshRate={100} />
              <div 
                  className="editor"
                  ref={ this.editor_div }
                  style={{ height: '100%' }} />
          </div>
      )
  }
}


export default Problem