import React from 'react'
import ReactMarkdown from 'react-markdown'

import file from '../../assets/sample.md'

import Theme from 'monaco-themes/themes/monoindustrial.json'

// import Editor from "@monaco-editor/react";
import ReactResizeDetector from 'react-resize-detector';
// import MonacoEditor from 'react-monaco-editor';

import axios from 'axios';

import * as monaco from 'monaco-editor';

import './markdown.css'
import './problem.css'

import rehypeRaw from 'rehype-raw';



const Problem = () => {

  const [MarkdownData, setMarkdownData] = React.useState("");
  const [EditorData, setEditorData] = React.useState("");

  

  
  const [testCases, setTestCases] = React.useState({
    testCaseResult: "Notrun",
    output: "",
  });
  // const [testCasesData, setTestCasesData] = React.useState([]);

  // const InitCode = "#Hey There this is aman \ndef twosum(a, b):\n\treturn a + b";

  const initCode = "#Hey There this is aman \ndef twosum(arr, target):\n\tprint(arr,target)\n\tpass"
  React.useEffect(() => {
    fetch(file)
    .then((r) => r.text())
    .then(text  => {
      setMarkdownData(text);
    })
    setEditorData(initCode);
  }, []);

  const submitCode = () => {
    console.log(EditorData);
    axios.post('http://localhost:3001/problemo/', {
      code: EditorData
    }).then(res => {
      console.log(res.data);
      setTestCases(res.data);
      // setTestCasesData(res.data.testCasesData);
    })
  }


  return (
    <div className='problemPage'>
      <div className='problemo'>
        <h1>Problems</h1>
        <ReactMarkdown className='markdown-body' rehypePlugins={[rehypeRaw]} children={MarkdownData}/>
      </div>
      <div className='codearea'>
        <div className='editor'>
          <MOEditor 
          Theme={Theme} 
          Language="python" 
          InitCode={initCode}
          setEditorData={setEditorData}
          />
        </div>
      </div>
      <div className='RightSideBar'>
        <div className='TestCases markdown-body'>
          <h1>Test Cases</h1>
          {/* {testCases.map((testCase, index) => {
            return (<div key={index}>
              <h2>{testCase.testCaseResult}</h2>
              <p>{testCase.output}</p>
              </div>)
          }
          )} */}
          <h2>{testCases.testCaseResult === "Passed"? "👍 Passed" : testCases.testCaseResult === "Notrun" ? "XX Notrun XX" : " -- Failed -- "}</h2>
          <pre class>{testCases.output}</pre>

          <br />

          <div className='btn btn-primary' onClick={submitCode}>Submit</div>
          
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
      const editor_model = monaco.editor.createModel(this.props.InitCode, this.props.Language);

      // this.monaco_editor = monaco.editor.create(this.editor_div.current, this.props.editorOptions);

      this.monaco_editor = monaco.editor.create(this.editor_div.current, {
        value: this.props.InitCode,
        language: this.props.Language,
        fontSize: "15px",
        minimap: {
          enabled: false
        },
        selectOnLineNumbers: true,
        wordWrap: 'on',
        automaticLayout: true // <<== the important part
   });
      monaco.editor.defineTheme('Green', this.props.Theme);
      monaco.editor.setTheme('Green');
      this.monaco_editor.setModel(editor_model);

      this.monaco_editor.onDidChangeModelContent(e => {
        this.props.setEditorData(this.monaco_editor.getValue());
        // console.log(this.monaco_editor.getValue());
      }
      )
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