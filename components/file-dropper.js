import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FileDropper extends Component {
  static propTypes = {
    onReadFile: PropTypes.func.isRequired,
  };

  static defaultProps = {
    label: 'Drag an SVG File Here',
    className: 'file-dropper',
    maxSize: 1024 * 1024, // 1Mb,
    fileTypes: ['jpg', 'jpeg', 'gif', 'png'],
    onReadFile: () => {},
  };

  state = {
    hover: false,
  };

  handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ hover: true });
  };

  handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ hover: false });
  };

  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ hover: false });
    let file = e.dataTransfer.files[0];
    this.handleFile(file);
  };

  typeisValid = fileType => {
    const { fileTypes } = this.props;
    return fileTypes.some(type => fileType.indexOf(type) > -1);
  };

  handleFile = file => {
    let reader = new FileReader();
    const { fileTypes, maxSize } = this.props;

    // Validate File Type
    if (!this.typeisValid(file.type)) {
      alert(
        'Invalid File Type. The following formats are allowed: ' +
          fileTypes.join(', ')
      );
      console.log('FILE TYPE GIVEN-->', file.type);
      return false;
    }

    // Validate Max Size
    if (file.size > maxSize) {
      alert('File size is to large.  Max file size:' + maxSize + 'MB');
      return false;
    }

    reader.onload = e => {
      this.props.onReadFile({ data: e.currentTarget.result, file: file });
    };

    reader.readAsDataURL(file);
  };

  handleNativeUploader = e => {
    e.preventDefault();
    const file = e.target.files[0];
    this.handleFile(file);
  };

  render() {
    const { className, label, render = () => {} } = this.props;
    const { hover } = this.state;
    return (
      <div
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragLeave}
      >
        <label>
          <input type="file" ref="input" onChange={this.handleNativeUploader} />
        </label>
        {render(hover)}
        <style jsx>{`
          div {
            box-sizing: border-box;
            padding: 100px;
            background: ${hover ? '#FCEC4E' : '#E04964'};
            color: #999;
            width: 100%;
            position: relative;
            transition-property: background;
            transition-duration: 0.5s;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            font-size: 22px;
            box-shadow: rgba(0, 0, 0, 0.5) 0 0 ${hover ? '22px' : '11px'};
          }

          label {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            opacity: 0;
            position: absolute;
            background: rebeccapurple;
            transition-property: opacity;
            transition-duration: 0.15s;
            border-radius: 8px;
          }

          label:active {
            opacity: 0.7;
          }

          input {
            visibility: hidden;
          }
        `}</style>
      </div>
    );
  }
}

export default FileDropper;
