import React from "react"
import Link from 'next/link'
import addPostStyles from '/static/comp-styles/feed/AddPost.scss'
import Textarea from "react-textarea-autosize"
import {ICON_IMAGE, ICON_VIDEO, ICON_PRODUCT, ICON_CREATE_LIST,ICON_CIRCLE_FLAG_EMPTY} from '../static/Icons' 
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'
import Midddly from '../../models/Midddly'
import ProductPostPreview from "./ProductPostPreview"

import SitePostPreview from './SitePostPreview'; 
import FormData from 'form-data'; 
import AddProductModal from "./AddProductModal";

import MidddlyUser from '../../models/MidddlyUser'; 

export default class AddPost extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            blobs: [],
            imgs:[], //file references 
            vdos: [],
            products:[],
            text: '',
            siteMeta:null,
            posts: [], 
            isLoggedIn: false 
        }
    }

    clear(){
        this.setState({
            'blobs':[],
            'imgs':[],
            'vdos':[], 
        }); 

        document.getElementById('postTitle').value = '';
        document.getElementById('postDescription').value = '';
    }

    componentDidMount(){ 
        this.state.products.push(Midddly.getProductById(1));
        this.state.products.push(Midddly.getProductById(3));
        this.state.products.push(Midddly.getProductById(4));
        this.state.products.push(Midddly.getProductById(6));

        this.setState({
            'products':   this.state.products
        });
        
         this.setState({
            'isLoggedIn':  MidddlyUser.isLoggedIn()
         });

        // this.textarea.value = this.state.text;  
    }

    removeImg(idx){
        this.state.blobs.splice(idx,1); 
        this.setState({
            'blobs': this.state.blobs
        }); 
    }

    /* 
        * @param id int - the product id 
        * removes the product of id: id from this post 
    */
    removeProduct(id){
        let products = this.state.products; 

        for(let x=0; x< products.length; ++x){
            if(products[x].id == id){
                products.splice(x,1); 
            }
        }
        this.setState({
            'products':products
        }); 
    }

    handleImages = (e) => {
        if (this.refs.uploadImg.files.length <= 10 && this.state.blobs.length <= 10) {
            const images    = this.refs.uploadImg.files
            console.log(images);
            for(let x=0; x<images.length; ++x){
                let currFile = this.refs.uploadImg.files[x]; 
                this.state.blobs.push(URL.createObjectURL(currFile)); 
                this.state.imgs.push(currFile);
            }

           /* var arr = this.state.blobs.slice();
            for (var i = 0; i < images.length; i++) {
                arr.push(URL.createObjectURL(images[i]));
            }*/

            this.setState({
                blobs: this.state.blobs,
                imgs: this.state.imgs 
            })
        }
        else {
            return
        }
        
    }

    handleVideo = (e) => {
        // const videos    = this.refs.uploadVdo.files
        // for (var i = 0; i < videos.length; i++) {
        //     this.state.vdos.push(URL.createObjectURL(videos[i]));
        // }
        // this.forceUpdate()
    }

    /*
        * If the user pasted some text, check if it's a url and get info associated with it from the api 
    */
    pastedText(event){
        let text= event.clipboardData.getData('Text');
        let url = this.extractUrl(text);

        console.log("pasted "+text+ " extracted url " + url ); 
        if(url){ 
            Midddly.scrapeUrl(url, (resp) =>{
                this.setState({
                    siteMeta : resp.data
                });
            });
        }
    }


    /*
        * Analise the text and return the first url in it if exists else null 
    */
    extractUrl(text){
        let reg = /(https?:\/\/[^\s]+)/g; 
        let urls = reg.exec(text); 
        console.log(urls); 
        return urls ? urls[0] : null; 
    }

    /*
        * the user may not want to attach the preview, remove it. 
    */ 
    removePostPreview(){
        this.setState({
            'siteMeta':null
        });
    }

    submitPost(event){
        if(!this.state.isLoggedIn){
            alert("Open the login popup with a message. You can't post if not loggedIn. \nRegister!\n No really.. create a damn account, it's working. \nThen login. "); 
            return; 
        }

        event.stopPropagation(); 
        event.preventDefault(); 

        let formData = new FormData(); 
        formData.append('title', document.getElementById('postTitle').value);
        formData.append('description',document.getElementById('postDescription').value); 
        
        if(this.state.siteMeta){
            formData.append('meta_id', this.state.siteMeta.id); 
        }
        

        for(let x=0; x< this.state.imgs.length; ++x){
            formData.append('img[]',this.state.imgs[x], this.state.imgs[x].fileName);
        }

        Midddly.postAdd(formData,(resp) => {
            let post = resp.data;  
            this.props.addpost(post); 
            this.clear(); 
        });
    } 

    openModal = (e)=> {
        e.preventDefault();
        ModalManager.open(<AddProductModal onRequestClose={() => true}/>);
    }

    render() {
    console.log('rerender', this.state);
    return  <div className="add-post">
                <div className="add-post__avatar">
                    <img src="../static/images/mind.png" alt=""/>
                </div>
                <div className="add-post__title">
                    <input type="text" placeholder="Title (optional)" autoFocus defaultValue="" maxLength="90" id="postTitle"/>
                </div>
                <div className="add-post__textarea">
                    <Textarea placeholder="What's on your mind?" autoFocus defaultValue="" onPaste={(event) => {this.pastedText(event); }} id="postDescription"/>
                </div>
                
                { this.state.blobs.length > 0 && 
                    <div className="images-droparea">
                        {/*   */
                            this.state.blobs.map((item, idx)=> {
                                return <div className="droparea-image-wrapper" key={'new-post-img-'+idx}>
                                    <div className="droparea-image-remove" title="Remove" onClick={()=>{ this.removeImg(idx); }}>
                                        ×
                                    </div>
                                    <img src={ item } alt=""/>
                                </div>;
                            }) 
                        } 
                        
                            {/* <label htmlFor="add-file-droparea">
                                <input type="file" name="add-file-droparea" id="add-file-droparea"/>
                                <div className="droparea-square">
                                    {ICON_CREATE_LIST}
                                </div>
                            </label> */}
                        
                    </div>
                }
                { this.state.vdos.length > 0 && 
                    <div className="images-droparea">
                        {/*   */
                            this.state.vdos.map((item, idx)=> {
                                return <div className="droparea-image-wrapper" key={'new-post-img-'+idx}>
                                    <div className="droparea-image-remove" title="Remove" onClick={()=>{ this.removeImg(idx); }}>
                                        ×
                                    </div>
                                    <img src={ item } alt=""/>
                                </div>;
                            }) 
                        } 
                        
                            {/* <label htmlFor="add-file-droparea">
                                <input type="file" name="add-file-droparea" id="add-file-droparea"/>
                                <div className="droparea-square">
                                    {ICON_CREATE_LIST}
                                </div>
                            </label> */}
                        
                    </div>
                }
                <div className="add-product-wrapper">
                    {
                        this.state.products.map((prod , idx)=>{
                            return <ProductPostPreview editable product={prod} callback={this.removeProduct.bind(this)} key={'new-post-product'+idx}/> 
                        })
                    } 

                    {/* { this.state.products.length > 0 && 
                        <div className="product-block empty">
                            {ICON_CREATE_LIST}
                        </div>
                    } */}
                </div>
                <form onSubmit={this.onSubmit}  className="add-post__controls">   
                    <div className="add-post-additional">
                        <div className="file-input">
                            <input multiple type="file" name="" id="image-upload" ref="uploadImg"  onChange={this.handleImages} accept="image/png, image/jpeg"/>
                            <label htmlFor="image-upload">{ICON_IMAGE}</label>
                        </div>
                        <div className="file-input">
                            <input multiple type="file" name="" id="video-upload" ref="uploadVdo" onChange={this.handleVideo} accept="video/mp4,video/x-m4v,video/*"/>
                            <label htmlFor="video-upload">{ICON_VIDEO}</label>
                        </div>
                        <div className="file-input"  onClick={this.openModal}>
                            <label htmlFor="">{ICON_PRODUCT}</label>
                        </div>
                        
                    </div>
                    
                    {this.state.siteMeta && <SitePostPreview meta={this.state.siteMeta} callback={this.removePostPreview.bind(this)}/> }
                    <div className="add-post-send">
                        <button className="btn" onClick={(event) => { this.submitPost(event); }}>Post</button>
                    </div>
                </form>
            <style jsx global>{addPostStyles}</style>
        </div>
    }
};