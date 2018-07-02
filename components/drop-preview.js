import FileDropper from '../components/file-dropper';
import Drop from '../components/drop-default';
import SGVPreview from '../components/svg-preview';
export default ({ data, onReadFile }) => (
  <FileDropper
    fileTypes={['svg']}
    onReadFile={onReadFile}
    render={(hover = false) => {
      if (data) {
        return <SGVPreview svg={data} />;
      } else {
        return <Drop hover={hover} />;
      }
    }}
  />
);
