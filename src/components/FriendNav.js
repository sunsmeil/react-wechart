import React from 'react';
const coverUrl = require('../images/coverUrl.jpg');
const avatar = require('../images/avatar.jpg');

class FriendNav extends React.Component {
	render() {
    console.log(coverUrl);
    console.log(this.props.userName);
    let userName = this.props.userName;
		return (
			<div className="nav">
				<img src={coverUrl} alt="封面" className="cover"/>
				<img src={avatar} alt="头像" className="avatar"/>
				<p>{userName}</p>
			</div>
		)
	}
}
export default FriendNav;