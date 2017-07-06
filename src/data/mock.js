var Mock = require('mockjs')
//占位符
Mock.Random.image();
Mock.Random.time();
Mock.Random.string();
Mock.Random.cname();//常见中文姓名
Mock.Random.cparagraph();//中文汉字段落

export const data = function (type) {
	if (type == 'like') {
		return Mock.mock({
			'like_nickname':'@cname()'
		})
	}else{
		//列表数据
		return Mock.mock({
			'list|6': [{
				'userid|+1':1,
				'nickname':'@cname()',
				'avatar': '@image("100x100","#50B347","#fff","avatar")',
				'post_time':'@time("HH:mm:ss")',
				'post_content':'@cparagraph(1,3)',
				'post_imgs|0-9': [{
						'links': '@image("100x100","#50B347","#fff","配图")'
				}],
				'likes|0-5': [{
					'likes_userid|+1':11,
	        'likes_nickname':'@cname()'
				}],
				'comments|0-5': [{
					'comment_userid|+1':21,
					'comment_nickname':'@cname()',
					'comment_content':'@cparagraph(1)'
				}]
			}]
		})
	}
}
