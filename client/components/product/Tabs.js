import React from "react";
import Link from 'next/link'
import tabsStyles from '../../static/comp-styles/product/Tabs.scss'
import {} from '../static/Icons'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Comments from '../feed/Comments';

export default class TabsComp extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            selected: "description"
        }
    }
    render() {
    return  <div className={"product-page__tabs " + (this.props.mobile ? 'mobile' : '')}>
                <Tabs>
                    <TabList>
                        <Tab>Description</Tab>
                        <Tab>Specifications</Tab>
                        <Tab>Reviews (12)</Tab>
                        <Tab>Seller Garanty</Tab>
                    </TabList>
                    
                    <TabPanel>
                        <p>54.6” screen (measured diagonally from corner to corner) Large enough to provide an immersive experience for everyone in the room. </p>
                        <p>2160p resolution for breathtaking HD images Watch 4K movies and TV shows at 4x the resolution of Full HD, and upscale your current HD content to gorgeous, Ultra HD-level picture quality. </p>
                        <p>Watch high dynamic range (HDR) content on your TV With an HDR-compatible 4K TV, you can enjoy HDR movies and TV shows, in addition to all your current content.</p>
                        <p>Smart TV with access to streaming services for countless entertainment options Stream shows, movies, games and more with the TV’s built-in Wi-Fi and integrated apps. <Link href=""><a className="more">More</a></Link></p>
                    </TabPanel>
                    <TabPanel>
                        <h2>Specifications</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestiae doloremque natus id sit ad, doloribus corrupti vitae veritatis accusantium alias explicabo distinctio nemo sint corporis itaque quidem similique fuga.</p>
                    </TabPanel>
                    <TabPanel>
                        <h2>Reviews (12)</h2>
                        <Comments/>
                    </TabPanel>
                    <TabPanel>
                        <h2>Seller Garanty</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eveniet labore sit ex porro libero vel quisquam nostrum, perferendis ab repellendus expedita vitae incidunt voluptatum magni natus quaerat eos placeat.</p>
                    </TabPanel>
                </Tabs>
            <style jsx global>{tabsStyles}</style>
        </div>
    }
};