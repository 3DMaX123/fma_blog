import React from 'react'

import './SmallPlatesBlogPage.css';
import ScrollContainer from "react-indiana-drag-scroll";
import HashTag from '../../../constants/HashTag/HashTag';
import images from '../../../constants/images';

class SmallPlatesBlogPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            logo: this.props.logo,
            hashtag: this.props.hashtag,
            name: this.props.name
        };
    }

    render(){

        return(
            <div className='rec_profile'>
                <img className='rec_profile_logo' src={this.state.logo} alt="default"/>
                <div className='column_sort'>
                    <div className='tags_line'>
                        <ScrollContainer className='lowBlogPage-Hashtags'>
                            <HashTag HashTag = {this.state.hashtag}/>
                            <HashTag HashTag = {this.state.hashtag}/>
                            <HashTag HashTag = {this.state.hashtag}/>
                        </ScrollContainer>
                    </div>
                    <div className='rec_name'><p>{this.state.name}</p></div>
                </div>
            </div>
        )
    }
}
export default SmallPlatesBlogPage