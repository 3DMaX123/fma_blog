import React, { useEffect } from 'react'

import './MainGrid.css';
import SmallBlogPage from '../SmallBlogPage/SmallBlogPage';
import RollerHashTag from '../../../constants/RollerHashTag/RollerHashTag';
import { variables } from '../../../constants/Variables';
import moment from 'moment';

class MainGrid extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      w: 434,
      post: [],
      hashtag: []
    }
    this.handleClickOnSearch = this.handleClickOnSearch.bind(this);
  }

  handleClickOnSearch(){
    if(this.state.w === 770){
      this.setState({w: 434});
    }else{
      this.setState({w: 770});
    }
  }

  GetListPost(){
    fetch(variables.API_URL+'post')
    .then(response => response.json())
    .then(data => {
      this.setState({post: data});
    });
  }

  componentDidMount(){
    this.GetListPost();
    this.GetListHashtag();
  }

  GetListHashtag(){
    fetch(variables.API_URL+'hashtag')
    .then(response => response.json())
    .then(data => {
      this.setState({hashtag: data});
    });
  }

  render(){

    const style = {
      width: this.state.w
    }

    return (
      <> 
          <div className='mainPage-searchAndHashtag'>
            <div className='mainPage-search' id='mainPage-search' style={style}>
              <input onBlur={() => this.setState({w: 434})} onFocus={this.handleClickOnSearch} id='mainPage-search-input' type='text' placeholder='PPC, #GoogleAnalytics і тд.' />
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.32699" cy="7.32699" r="6.82699" stroke="url(#paint0_linear_0_1)"/>
                <rect x="12.2744" y="11.8164" width="5.30007" height="1.83662" transform="rotate(44.6507 12.2744 11.8164)" fill="url(#paint1_linear_0_1)"/>
                <defs>
                  <linearGradient id="paint0_linear_0_1" x1="2.5" y1="2" x2="12" y2="13" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A9C9FF"/>
                    <stop offset="0.910027" stop-color="#FFBBEC"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_0_1" x1="12.2039" y1="12.847" x2="17.8607" y2="12.8814" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFBBEC"/>
                    <stop offset="1" stop-color="#FFBBEC"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
              <RollerHashTag />
          </div>

          <div className='Maingrid' >
            <SmallBlogPage 
            Title='Як підвищити органічну видачу сайту, або як не зійти з розуму jfbgerbfgergggggggg'
            SubTitle='(Не обіцяємо, що не зійдете з розуму) А взагалі потрібно знайти якогось вченого, забашляти йомуааа'
            Author='3DMaX'
            Time='10'
            Date='12.05.22'
            />
            {
              this.state.post.map(posts =>
                <SmallBlogPage 
                  key={posts.id}
                  Title={posts.title}
                  SubTitle={posts.subtitle}
                  Author='3DMaX'
                  Time={posts.timeToRead}
                  Date={moment(posts.dateCreated).format('DD.MM.YY')}
                  AuthorId={posts.authorId}
                />
              )
            }
            {
              this.state.hashtag.map(hashtags =>
                <p>{hashtags.text}</p>
              )
            }
            
          </div>

      <div className='LoadMore'>
          <div className='LoadMoreClick'>
          <svg width="6" height="60" viewBox="0 0 6 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.71715 59.2828C2.87336 59.439 3.12663 59.439 3.28284 59.2828L5.82842 56.7373C5.98463 56.581 5.98463 56.3278 5.82842 56.1716C5.67221 56.0154 5.41895 56.0154 5.26274 56.1716L3 58.4343L0.737255 56.1716C0.581045 56.0154 0.32778 56.0154 0.17157 56.1716C0.0153602 56.3278 0.0153602 56.581 0.17157 56.7373L2.71715 59.2828ZM2.6 -2.16338e-08L2.6 59L3.4 59L3.4 2.16338e-08L2.6 -2.16338e-08Z" fill="#343434"/>
          </svg>
          <p>Завантажити більше</p>
          </div>
      </div>
    </>
    )
  }
}

export default MainGrid