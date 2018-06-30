import React from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/hopscotch.css';

// For SSR, CodeMirror will throw an error, so return a div instead
let CodeMirror = 'div';
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  CodeMirror = require('react-codemirror2').Controlled;
  require('codemirror/mode/jsx/jsx');
}

const noop = () => {};

const Editor = ({ value }) => (
  <CodeMirror
    value={value}
    options={{
      theme: 'hopscotch',
      lineNumbers: false,
      mode: 'jsx',
    }}
    onBeforeChange={noop}
    onChange={noop}
  />
);

export default Editor;
