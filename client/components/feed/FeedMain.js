import React from "react";
import Link from 'next/link'
import feedMainStyles from '/static/comp-styles/feed/FeedMain.scss'
import {} from '../static/Icons'; 
import AddPost from  './AddPost'
//import FeedCategories from  './FeedCategories' we will not have this filter here 
import Posts from  './Posts'; 
import PostDefault from './PostDefault';

import Midddly from '../../models/Midddly';
import MidddlyUser from '../../models/MidddlyUser'; 

export default class FeedMain extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            posts:[],
            page:0 
        }; 
    } 

    componentDidMount(){
        Midddly.getPosts(0,(resp)=>{
            console.log("received resp ", resp); 
            this.setState({
                posts :  resp.data
            }); 
        })
    }

    deletePost(post){ 
        for(var x=0; x<this.state.posts.length; ++x){
            if(this.state.posts[x].id == post.id){
                this.state.posts.splice(x,1); 
            }    
        }  

        this.setState({
            'posts': this.state.posts
        }); 
    }

    addPost(post){
        this.state.posts.splice(0,0,post);  
        this.setState({
            'posts': this.state.posts
        }); 
    }

    render() {
    console.log("Feed  POSTS", this.state.posts); 
    return  <div className={"feed-main " + (this.props.mobileScrolled ? 'expanded' : "")}>
                 <AddPost addpost={this.addPost.bind(this)}/>

                <div className="posts">
                    {   /** Remember to diferenciate between types when we implement the notifications **/ 
                        this.state.posts && this.state.posts.map((post,idx) => {
                            return <PostDefault key={"post"+idx} post={post} deletepost={this.deletePost.bind(this)}/>; 
                        })
                    }
                </div>
                {/*<FeedCategories categories={['All','Men','Women','Baby&Kids','Electronics','Sports']}/>*/}
                <Posts />
                <style jsx global>{feedMainStyles}</style>
        </div>
    }
};