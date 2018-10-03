import React from "react";
import Link from 'next/link'
import BrandsAndHashtagsStyles from '../../static/comp-styles/index/BrandsAndHashtags.scss'
import {} from '../static/Brands';
import PerfectScrollbar from 'react-perfect-scrollbar'

export default class BrandsAndHashtags extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
           
        }
    }

    render() {
    return  <div className="brands-and-hashtags">
                <PerfectScrollbar>
                    <div className="bah-block">
                        <div className="bah-logo">
                            <img src="../static/images/midddly-01.png" alt=""/>
                        </div>
                        <div className="hashtag">#electronics</div>
                    </div>
                    <div className="bah-block">
                        <div className="bah-logo">
                            <img src="../static/images/midddly-01.png" alt=""/>
                        </div>
                        <div className="hashtag">#electronics</div>
                    </div>
                    <div className="bah-block">
                        <div className="bah-logo">
                            <img src="../static/images/midddly-01.png" alt=""/>
                        </div>
                        <div className="hashtag">#electronics</div>
                    </div>
                    <div className="bah-block">
                        <div className="bah-logo">
                            <img src="../static/images/midddly-01.png" alt=""/>
                        </div>
                        <div className="hashtag">#electronics</div>
                    </div>
                    <div className="bah-block">
                        <div className="bah-logo">
                            <img src="../static/images/midddly-01.png" alt=""/>
                        </div>
                        <div className="hashtag">#electronics</div>
                    </div>
                    <div className="bah-block">
                        <div className="bah-logo">
                            <img src="../static/images/midddly-01.png" alt=""/>
                        </div>
                        <div className="hashtag">#electronics</div>
                    </div>
                    <div className="bah-block">
                        <div className="bah-logo">
                            <img src="../static/images/midddly-01.png" alt=""/>
                        </div>
                        <div className="hashtag">#electronics</div>
                    </div>
                    <div className="bah-block">
                        <div className="bah-logo">
                            <img src="../static/images/midddly-01.png" alt=""/>
                        </div>
                        <div className="hashtag">#electronics</div>
                    </div>
                    <div className="bah-block">
                        <div className="bah-logo">
                            <img src="../static/images/midddly-01.png" alt=""/>
                        </div>
                        <div className="hashtag">#electronics</div>
                    </div>
                    <div className="bah-block">
                        <div className="bah-logo">
                            <img src="../static/images/midddly-01.png" alt=""/>
                        </div>
                        <div className="hashtag">#electronics</div>
                    </div>
                    <div className="bah-block">
                        <div className="bah-logo">
                            <img src="../static/images/midddly-01.png" alt=""/>
                        </div>
                        <div className="hashtag">#electronics</div>
                    </div>
                </PerfectScrollbar>
            <style jsx global>{BrandsAndHashtagsStyles}</style>
        </div>
    }
};