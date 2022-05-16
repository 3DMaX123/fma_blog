import React from 'react'

import './HashTag.css';

function CheckIsHasTag(props){
        if(props.hashtag.includes('#')){
            return(
                <p className='HashtagPlate'>{props.hashtag}</p>
            )
        }
        else if(!props.hashtag.includes('#')){
            return(
                <p className='HashtagPlate'>#{props.hashtag}</p>
            )
        }
}

class HashTag extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hashtag: props.HashTag
        };
    }


    render(){
        return (
                <CheckIsHasTag hashtag={this.state.hashtag}/>
        )
    }
}

export default HashTag