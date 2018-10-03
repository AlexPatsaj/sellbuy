/**
* 	A list of API endpoints  
*/
let domain = 'http://api.gloocle.com/api/v1'; 

export const SIGN_IN =   domain + "/user/token"; 
export const ENDPOINT_ME = domain+'/user/me'; //returns a user object complete with profile pic , name 
export const ENDPOINT_LOGOUT = domain +"/logout"; // invaildates the token 

export const ENDPOINT_REGISTER = domain+"/user"; // registers a new account
export const ENDPOINT_RECOVER_PASSWORD = domain+'/recover-password'; //send email to reset password 


export const ENDPOINT_SCRAPE_URL = domain+ '/scrape'; 

//FEED 
export const ENDPOINT_POST_LIST = domain+'/posts_timeline'; //main feed 
export const ENDPOINT_FEED_MINE = domain+'/posts'; //the user's posts 
export const ENDPOINT_FEED_NOTIFICATIONS  = domain+'/notifications'; //returns notifications for this user 

//	POSTS 
export const ENDPOINT_POST_ADD = domain+'/posts'; 
export const ENDPOINT_POST_DELETE = domain+'/post/delete'; 
export const ENDPOINT_POST_COMMENTS = domain+'/post/comments';
//export const ENPOINT_POST_ADD_IMGS = domain+'/post/add-img';

//pages  
export const ENDPOINT_STATIC_PAGE = domain+'/page';

// STATIC CONTENT  Lists and stuff 
export const ENDPOINT_COUNTRIES_LIST = domain + "/countries/list"; 
export const ENDPOINT_CITIES_LIST = domain + "/cities/list";

// Followers / following
export const ENDPOINT_FOLLOWERS_LIST = domain + "/followers";
export const ENDPOINT_FOLLOWING_LIST = domain + "/followings";
export const ENDPOINT_UNFOLLOW = domain + "/unfollow";
export const ENDPOINT_FOLLOW = domain+'/follow';// post /follow/{id}


//---							MARKETPLACE 

//	Category 
export const ENDPOINT_CATEGORIES = domain+'/category';//returns a list of categories and their children


