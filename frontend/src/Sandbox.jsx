import React, { Component } from 'react';
import FolderComponent from './Components/FolderComponent'; 
import FileComponent from './Components/FileComponent';
import FolderTree from './Components/FolderTree';
import {testData} from './testData'
import styles from './Components/folderTreeCSS.css';
// import { Checkbox } from 'react-bootstrap';

function onChange(data) {
  console.log(data);
}

export default class Sandbox extends Component {
  state = {
    data: 1,
    testData: testData,
  }

  changeData = () => {
    console.log('change data!')
    let newTestData = {};
    let newData = this.state.data * (-1);
    if (newData === 1) 
      newTestData = testData;
    else 
      newTestData = testData;
    this.setState({testData: newTestData, data: newData});
  }

	render() {
		return (
      <div>
      <div className={styles.app}>
      <div className={styles.scroller}>
			<div>
        {/* <FolderTree data={testData} showToolbar={true} /> */}

			  <FolderTree
			  	data={this.state.testData}
			    fileComponent={FileComponent}
			    folderComponent={FolderComponent}
          onChange={onChange}
          showToolbar={true} 
			  />
        
      </div>
      </div>
      </div>
      {/* <button onClick={this.changeData} >click me </button> */}
      </div>
		);
	}
}

