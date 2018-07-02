import React from 'react';
import { Base64 } from 'js-base64';
import svgtojsx from 'svg-to-jsx';
import copy from 'copy-to-clipboard';
import Editor from '../components/editor';
import Logo from '../components/logo';
import DropPreview from '../components/drop-preview';
import template from '../utils/template';

class Main extends React.Component {
  state = {
    jsx: null,
    svgData: null,
  };
  processFile = file => {
    console.log({ file });
    const svgData = file.data;
    const encodedData = file.data.replace(/^(.+)\,/, '');
    const decodedData = Base64.decode(encodedData);
    svgtojsx(decodedData).then(jsx => {
      jsx = template(jsx);
      this.setState({ jsx, svgData });
    });
  };

  doCopy = e => {
    copy(this.state.jsx);
  };

  render() {
    return (
      <div className="panes">
        <div className="branding">
          <h2>
            <Logo />
          </h2>
        </div>
        <div className="file-pane">
          <DropPreview
            data={this.state.svgData}
            onReadFile={this.processFile}
          />
        </div>
        {this.state.jsx && (
          <div className="editor-pane">
            <div className="editor">
              <div className="editor-controls">
                <button onClick={this.doCopy}>Copy to clipboard</button>
              </div>
              <Editor value={this.state.jsx} />
            </div>
          </div>
        )}
        <style jsx>{`
          :global(body) {
            background: #2c2a37;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
            font-size: 16px;
          }

          h2 {
            text-align: center;
          }
          .panes {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
          }
          .file-pane {
            flex: 1;
            position: relative;
            margin-bottom: 11px;
          }
          .editor-pane {
            flex: 1;
            position: relative;
          }
          .editor {
            padding: 22px;
            background: #322931;
            border-radius: 8px;
            box-shadow: rgba(0, 0, 0, 0.5) 0 0 11px;
          }
          .editor :global(.CodeMirror) {
            height: 50%;
            maxi-height: 50vh;
            border-radius: 5px;
          }

          .editor-controls {
            text-align: right;
            padding: 11px 0;
          }

          button {
            border: none;
            border-radius: 3px;
            background: #42a980;
            color: white;
            padding: 11px 22px;
            font-size: 18px;
            text-shadow: #34946e 0 1px 2px;
            box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 0;
            display: inline-block;
          }

          button:hover {
            background-color: #34946e;
            cursor: pointer;
          }
          button:hover {
            box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 0;
          }
        `}</style>
      </div>
    );
  }
}

export default Main;
