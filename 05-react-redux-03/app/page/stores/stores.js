//状态树；configureStore中initialState
import { getItem, getHash } from 'utils';
import { LATEST_NEWS, LIKE_NEWS } from '../constants/constants';

/** other const **/
export const initialState = {
	test:{
		count:10
	},
	args: {
		src: getHash('src'),
	},
	tabs: LATEST_NEWS,
	news: {
		ids: [], // 新闻id
	    listLatest: [],    // 最新新闻
	    listLike: JSON.parse(getItem('like-list')) || [], // 收藏新闻
	    listInfo: {
	        listLatest:{
	            isEnd: false,
				pageSize: 20,
				curPage: 1,
				isLoading: false,
	        },
	        listLike: {
	        	isEnd: false,
				pageSize: 20,
				curPage: 1,
				isLoading: false,
	        }
	    },
	},
	details: {

	},
	comments: {
		
	},
	listLoading: false,
	spinLoading: true
};


