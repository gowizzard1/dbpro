import React from 'react';
import Checkbox from './Checkbox';
import EditableName from './EditableName';
import styles from './folderTreeCSS.css';
import PropTypes from 'prop-types';

const FolderComponent = ({ level, checked, handleCheck, filename, toggleFolder, open, setMyName, selectMe, selected,numOfFiles,allowCheckbox,allowEdit }) => (
  <div className={styles.folder} style={{marginLeft: getInden(level)}}>
    
    {console.log(allowCheckbox)}
    <a onClick={toggleFolder}><i className={open? [styles.deleteIcon, styles.carat].join(' ')  : [styles.addIcon, styles.carat].join(' ') } /> </a>
    {allowCheckbox?(<Checkbox status={checked} handleCheck={handleCheck} />):""}
    <span className={selected ? [styles.folderText, styles.selected].join(' ') : styles.folderText} onClick={selectMe}>
      <i className={open? styles.foldeOpenIcon : styles.folderIcon} />   
      <EditableName filename={filename} setMyName={setMyName} selected={selected} allowEdit={allowEdit}/>
    
    </span>

  </div>
);

FolderComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  path: PropTypes.array.isRequired, 
  level: PropTypes.number.isRequired,
  checked: PropTypes.number.isRequired,
  filename: PropTypes.string.isRequired,
  selected: PropTypes.number.isRequired,

  selectMe: PropTypes.func.isRequired,
  setMyName: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  toggleFolder: PropTypes.func.isRequired,
}

function getInden(level) {
  return `${5 * level}px`;
}

export default FolderComponent;