import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TreeNode extends Component {
	static propTypes = {
    id: PropTypes.number.isRequired,
    path: PropTypes.array.isRequired,
  	level: PropTypes.number.isRequired,
  	children: PropTypes.array.isRequired,
  	checked: PropTypes.number.isRequired,
    filename: PropTypes.string.isRequired,
    selected: PropTypes.number.isRequired,

  	fileComponent: PropTypes.func.isRequired,
    folderComponent: PropTypes.func.isRequired,

  	setName: PropTypes.func.isRequired,
  	setPath: PropTypes.func.isRequired,
    handleCheck: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.toggleFolder = this.toggleFolder.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.setMyName = this.setMyName.bind(this);
		this.setMyPath = this.setMyPath.bind(this);
	
		this.state = {
			level: props.level,
		  open: props.open === undefined ? true : props.open,
		  children: this.props.children,
		};
	  }
	
	  componentWillReceiveProps(nextProps) {
		if (nextProps.children !== this.state.children)
		  this.setState({children: nextProps.children});
	  }
	
	  toggleFolder() {
			  this.setState(prevState => ({ open: !prevState.open }));
	  }
	
	  handleCheck(e) {
		  if (e.target.checked)
			  this.props.handleCheck(this.props.path, 1);
		  else
			  this.props.handleCheck(this.props.path, 0);
	  }
	
	  setMyName(name) {
		  this.props.setName(this.props.path, name);
	  }
	
	  setMyPath() {
		  this.props.setPath(this.props.path);
	  }
	
		 render() {
			 const { fileComponent: FileComponent, folderComponent: FolderComponent } = this.props;
	
			 if (this.state.children.length > 0) {
				 return (
			  <div>
				  <FolderComponent
				open={this.state.open}
				path={this.props.path}
				level={this.state.level}
				checked={this.props.checked}
				filename={this.props.filename}
				selected={this.props.selected}
				numOfFiles={this.props.numOfFiles}
				allowCheckbox={this.props.allowCheckbox}
				allowEdit={this.props.allowEdit}
				selectMe={this.setMyPath}
				setMyName={this.setMyName}
				handleCheck={this.handleCheck}
					  toggleFolder={this.toggleFolder}
				  />
	
				  <ul style={{ margin: 0 }}>
					{this.state.open &&
						this.state.children.map( (child, index) => {
							return (
								<TreeNode
									id={child.id}
									key={child.id}
									checked={child.status}
									selected={child.selected}
						filename={child.filename}
						open={child.open}
						level={this.state.level + 1}
						path={this.props.path.concat(index)}
									children={child.children? child.children : []}
									fileComponent={FileComponent}
									folderComponent={FolderComponent}
						allowCheckbox={this.props.allowCheckbox}
						allowEdit={this.props.allowEdit}
						handleCheck={this.props.handleCheck}
						setPath={ path => { this.props.setPath(path) } }
									setName={(path, name) => { this.props.setName(path, name); } }
	
								/>
							)
						})
					}
				  </ul>
	
			  </div>
			)
			 } else {
				 return (
			  <FileComponent
			  path={this.props.path}
					 level={this.state.level}
			  checked={this.props.checked}
			  selected={this.props.selected}
			  filename={this.props.filename}
			  numOfFiles={this.props.numOfFiles}
			  allowCheckbox={this.props.allowCheckbox}
			  allowEdit={this.props.allowEdit}
				  selectMe={this.setMyPath}
			  setMyName={this.setMyName}
			  handleCheck={this.handleCheck}
	
				 />
				 
			)
			 }
	  }
	
	}
	
	export default TreeNode;
	
