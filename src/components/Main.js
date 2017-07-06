import 'styles/App.scss';
import React from 'react';
import {data} from '../data/mock.js';
import FriendNav from './FriendNav.js';
import FriendList from './FriendList.js';

//获取信息假数据
const listJsonData = data();

class MainByReactApp extends React.Component {

	//构造函数
	constructor(props) {
		super(props);
		this.userName = '陌白'; 
		this.state = {
			commentState:false
		}
	} 
  commentClickHandler(e) {
  	this.setState({commentState:!this.state.commentState});
  }

	render() {
		let messageList = [];

		listJsonData.list.forEach((value,index) => {
			messageList.push(<FriendList data={value} key={value.userid} userName={this.userName} commentClickHandler={this.commentClickHandler.bind(this)}/>);
		});

		return (
			<div className="main" ref="main">
				<FriendNav userName={this.userName}/>
				<ul className="friend-list">
					{messageList}
				</ul>
				<div className="add-comment">
					<input type="text" placeholder="评论"/>
					<button>发送</button>
				</div>
			</div>	
		);
	}
}

export default MainByReactApp;