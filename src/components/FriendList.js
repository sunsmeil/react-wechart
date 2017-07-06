import React from 'react';
import {data} from '../data/mock.js';

const msgIcon = require('../images/msg_icon.png');
//朋友圈列表子类
class FriendList extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      showState:false,
      likeState:false,
      data:props.data
    };

  }
	//切换操作列表消失隐藏
	toggleClickHandler(e) {
		this.setState({showState:!this.state.showState});
	}
	//点赞
	likeClickHandler(e) {
		let data = this.props.data;

		if (this.state.likeState) {
			data.likes.pop();
		}else{
			data.likes.push({'likes_userid':66,'likes_nickname':this.props.userName});
		}
		

		this.setState({
			data:data,
			showState:false,
			likeState:!this.state.likeState
		})
	}


	render() {
		let data = this.state.data;
    let commentsList = [];
    let likes = [];

    //循环点赞列表
    data.likes.forEach((value,index) => {
    	likes.push(<span 
					    		id={value.likes_userid} 
					    		key={index}
					    		onClick={this.likeClickHandler.bind(this)}
					    		>{value.likes_nickname}{index == data.likes.length-1?'':','}</span>);
    });

    //循环评论列表
    data.comments.forEach((value,index) => {
    	commentsList.push(
    		<p className="comment-list" 
    			key={value.comment_userid}>
    			<span>{value.comment_nickname}:</span>{value.comment_content}
    		</p>
    	);
    });

		return (
			<li key={data.userid} className="clearfix">
				<img src={data.avatar} className="avatar"/>
				<div className="message">
					<p className="nickname">{data.nickname}</p>
					<p className="content">{data.post_content}</p>
					<time className="time">{data.post_time}</time>
          
          <div className="show">
          	<p className ="likes">
          		<i className="iconfont">&#xe61a;</i>
          		{likes}
          	</p>
          	{commentsList}
          </div>

					{
						this.state.showState?
						<ul className="handle-list">
							<li onClick={this.likeClickHandler.bind(this)}>
									<i className="iconfont">&#xe61a;</i>
								{this.state.likeState?'取消':'赞'}
							</li>
							<li onClick={this.props.commentClickHandler}>
								<i className="iconfont">&#xe630;</i>
								评论
							</li>
						</ul>:null
					}
				
					<img src={msgIcon} className="msg-icon" onClick={this.toggleClickHandler.bind(this)}/>
				</div>
			</li>
		)
	}
}

export default FriendList;