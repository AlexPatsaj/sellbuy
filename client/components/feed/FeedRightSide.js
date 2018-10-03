import React from 'react'; 
import FeedNotifications from  './FeedNotifications';
import SideBarFooter from '../general/SideBarFooter'; 

import FeedRightSideStyles from '../../static/comp-styles/feed/FeedRightSide.scss'

/** 
	*	We want to emulate the same behavior as linkedin 
*/
export default class FeedRightSide extends React.Component {

	constructor(props){
		super(props); 
	}

	render(){
		return <div className='feed-rightSide'>
			<FeedNotifications/>
			<SideBarFooter/>
            <style jsx global>{FeedRightSideStyles}</style>
		</div>; 
	}
}