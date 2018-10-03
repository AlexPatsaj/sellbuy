import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SizesModalStyles from '../../static/comp-styles/product-fashion/SizesModal.scss'
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import {ICON_USER_ARROW} from '../static/Icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



export default class SizesModal extends React.Component{
	constructor(props) {
        super (props);
        this.state = {
            categorySelected: 'Women',
            data:[
                {
                    "Women" : {
                        Tops: [
                            ["XSS", "32-34", "81-86"],
                            ["XS", "-38", "86-88"],
                            ["S", "-40", "88-90"],
                            ["L", "-4", "81-86"],
                            ["M", "-3", "81-86"],
                            ["XL", "32-34", "81-86"],
                        ],
                        Trousers: [
                            ["XSS", "2-34", "1-86"],
                            ["XS", "34-38", "86-88"],
                            ["S", "38-40", "88-90"],
                            ["L", "0-43", "81-86"],
                            ["M", "32-34", "81-86"],
                            ["XL", "-34", "81-86"],
                        ],
                        Jackets: [
                            ["XSS", "32-34", "81-86"],
                            ["XS", "34-38", "86-88"],
                            ["S", "38-40", "88-90"],
                            ["L", "40-434", "81-86"],
                            ["M", "32-34", "81-86"],
                            ["XL", "32-34", "81-86"],
                        ],
                        Shorts: [
                            ["XSS", "32-34", "81-86"],
                            ["XS", "34-38", "86-88"],
                            ["S", "38-40", "88-90"],
                            ["L", "40-434", "81-86"],
                            ["M", "32-34", "81-86"],
                            ["XL", "32-34", "81-86"],
                        ],
                        Shoes: [
                            ["XSS", "32-34", "81-86"],
                            ["XS", "34-38", "86-88"],
                            ["S", "38-40", "88-90"],
                            ["L", "40-434", "81-86"],
                            ["M", "32-34", "81-86"],
                            ["XL", "32-34", "81-86"],
                        ],
                    },
                },{
                    "Men" : {
                        Sports: [
                            ["", "32-34", "81-86"],
                            ["", "34-38", "86-88"],
                            ["", "38-40", "88-90"],
                            ["L", "40-", "81-86"],
                            ["M", "32-34", "81-86"],
                            ["XL", "32-34", "81-86"],
                        ],
                        Electronics: [
                            ["XSS", "32-34", "81-86"],
                            ["XS", "34-38", "86-88"],
                            ["S", "38-40", "88-90"],
                            ["L", "40-", "81-86"],
                            ["M", "32-34", "81-86"],
                            ["XL", "32-34", "81-86"],
                        ],
                        Etc: [
                            ["XSS", "32-34", "81-86"],
                            ["XS", "34-38", "86-88"],
                            ["S", "38-40", "88-90"],
                            ["L", "40-", "81-86"],
                            ["M", "32-34", "81-86"],
                            ["XL", "32-34", "81-86"],
                        ],
                        Shorts: [
                            ["XSS", "32-34", "81-86"],
                            ["XS", "34-38", "86-88"],
                            ["S", "38-40", "88-90"],
                            ["L", "40-434", "81-86"],
                            ["M", "32-34", "81-86"],
                            ["XL", "32-34", "81-86"],
                        ],
                        Shoes: [
                            ["XSS", "32-34", "81-86"],
                            ["XS", "34-38", "86-88"],
                            ["S", "38-40", "88-90"],
                            ["L", "40-434", "81-86"],
                            ["M", "32-34", "81-86"],
                            ["XL", "32-34", "81-86"],
                        ],
                    },
                },{
                    "Kids" : {
                        Lego: [
                            ["XSS", "32-34", "81-86"],
                            ["XS", "34-38", "86-88"],
                            ["S", "38-40", "88-90"],
                            ["L", "-434", "81-86"],
                            ["M", "32-34", "81-"],
                            ["XL", "32-34", "81-86"],
                        ],
                        "Lorem Ipsum": [
                            ["XSS", "7-34", "1-"],
                            ["XS", "34-38", "86-"],
                            ["S", "38-40", "88-"],
                            ["L", "-434", "81-86"],
                            ["M", "32-34", "81-86"],
                            ["XL", "32-34", "81-86"],
                        ],
                        "Dolor sit amet": [
                            ["XSS", "32-344", "81-86"],
                            ["XS", "34-318", "86-88"],
                            ["S", "38-40", "88-90"],
                            ["L", "40-434", "821-86"],
                            ["M", "32-34", "81-86"],
                            ["XL", "32-34", "81-86"],
                        ],
                        Shorts: [
                            ["XSS", "32-34", "81-86"],
                            ["XS", "34-38", "86-88"],
                            ["S", "38-40", "88-90"],
                            ["L", "40-434", "81-86"],
                            ["M", "32-344", "81-86"],
                            ["XL", "632-34", "818-86"],
                        ],
                        Shoes: [
                            ["XSS", "32-34", "81-86"],
                            ["XS", "34-38", "861-88"],
                            ["S", "38-40", "118-90"],
                            ["L", "40-43", "51-86"],
                            ["M", "92-34", "31-86"],
                            ["XL", "22-34", "71-86"],
                        ],
                    }
                }
            ]
        }
    }

    componentDidMount(){
        document.body.classList.add('locked');
        document.querySelector('html').classList.add('locked');
    }

    componentWillUnmount() {
        document.body.classList.remove('locked');
        document.querySelector('html').classList.remove('locked');
    }

    appendClasses (modalnode) { 
        if (modalnode &&  modalnode.refs ) {
            console.log("modalnode", modalnode);
            modalnode.refs.content.className  = "modal-bodyClass"; 
            modalnode.refs.overlay.className = 'modal-overlayClass';
            
        }
    }

    categorySelect = async (category) => {
        await this.setState({
            categorySelected: category
        })
    }

   	render(){
    
    const { header, onRequestClose } = this.props;
    console.log("SizeModal Comp. Object.keys(this.state)", Object.keys(this.state), this.state.categorySelected);
    return (
        <Modal
            onRequestClose={onRequestClose}
            effect={Effect.Fall}
            ref={ (modal) => { this.appendClasses(modal) } }
			>
            <div className="modal-wrapper add-form">
                <div className="modal-body">
                    <div className="modal-close" onClick={ModalManager.close}>
                        ×
                    </div>
                    <div className="modal-form sizeguide">
                        <React.Fragment>
                            <div className="header-container">
                                <h1 className="any-block__header">
                                    SIZE GUIDE
                                </h1>
                                <span className="-header__menu">
                                    {
                                        this.state.data.map((category, i) =>{
                                        let currentCategory = Object.keys(category)[0]
                                        console.log("Header Tabs:",  
                                            currentCategory, 
                                            ", this.categorySelected:", this.state.categorySelected,
                                            this.state.categorySelected === currentCategory 
                                            
                                        )
                                        return (
                                                <a  key={i}
                                                    onClick={() => {this.categorySelect(currentCategory)}} 
                                                    className={this.state.categorySelected === currentCategory ? 'active' : ''}>
                                                    { Object.keys(category)[0] }
                                                </a>
                                            )
                                        }
                                    )}
                                </span>
                            </div>
                            {
                                this.state.data.map((cat,i) => {
                                
                                var temp = cat[Object.keys(cat)],
                                    temp2 = Object.keys(temp),
                                    currentCategory2 = Object.keys(cat)[0]

                                    console.log(
                                        "Tabs Comp:", 
                                        "temp", temp, "temp2", temp2,
                                        currentCategory2, 
                                        ", this.categorySelected:", this.state.categorySelected, 
                                        this.state.categorySelected === currentCategory2 
                                    )

                                    if (this.state.categorySelected === currentCategory2) {
                                            return (
                                            <Tabs key={i}>
                                                <TabList>
                                                    {temp2.map((subcategory) => {
                                                        return (
                                                        <Tab>{subcategory}</Tab>
                                                        )
                                                    })}
                                                </TabList>
                                                {temp2.map((subcat, i) => {
                                                    return (
                                                        <TabPanel key={i}>
                                                            
                                                            <table class="size-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Size</th>
                                                                        <th colSpan="2">Chest</th>
                                                                        {/* <th>&nbsp;</th> */}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td colSpan="2" className="fw">Inches</td>
                                                                        <td className="fw">CM</td>
                                                                    </tr>
                                                                    {
                                                                        temp[temp2[i]].map((row, i) => {
                                                                            return (
                                                                            <tr key={i}>
                                                                                {row.map((parameter,i) => {
                                                                                    return (
                                                                                        <td key={i}>{parameter}</td>
                                                                                    )
                                                                                })}
                                                                            </tr>
                                                                        )})
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </TabPanel>
                                                        )
                                                    })}
                                            </Tabs>
                                        )
                                    } else {return null}
                            })}
                        </React.Fragment>
                    </div>
                </div>
                
            </div>
            <style jsx global>{SizesModalStyles}</style>
         </Modal>
      );
   }
}