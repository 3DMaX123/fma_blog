import React from 'react'

import './BlogPage.css';
import  images  from '../../constants/images';
import HashTag from '../../constants/HashTag/HashTag';
import ScrollContainer from "react-indiana-drag-scroll";
import SmallPlatesBlogPage from './SmallPlatesBlogPage/SmallPlatesBlogPage';


const BlogPage = () => {
  return (
    <div className='BlogPage_main'>
      <div className='date'>
        <div className='date_label'>6 Травня 2022</div>
        <svg className='arrow1' width="74" height="25" viewBox="0 0 74 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.5659 21.4112L65.5426 20.9117L65.5659 21.4112ZM72.8937 20.715C73.0979 20.901 73.1126 21.2172 72.9267 21.4213L69.8966 24.7483C69.7107 24.9525 69.3944 24.9672 69.1903 24.7813C68.9861 24.5954 68.9714 24.2791 69.1573 24.075L71.8507 21.1177L68.8934 18.4243C68.6892 18.2383 68.6744 17.9221 68.8604 17.7179C69.0463 17.5138 69.3626 17.499 69.5667 17.6849L72.8937 20.715ZM65.5426 20.9117L72.5337 20.5852L72.5803 21.5841L65.5892 21.9106L65.5426 20.9117ZM0.95314 0.603773C19.402 14.802 42.2881 21.9978 65.5426 20.9117L65.5892 21.9106C42.0984 23.0078 18.9796 15.7388 0.343244 1.39625L0.95314 0.603773Z" fill="url(#paint0_linear_1077_567)"/>
<defs>
<linearGradient id="paint0_linear_1077_567" x1="-23.5564" y1="120.964" x2="49.8026" y2="135.803" gradientUnits="userSpaceOnUse">
<stop stop-color="#7AE8FC"/>
<stop offset="0.494792" stop-color="#9394F2"/>
<stop offset="1" stop-color="#E5BCF8"/>
</linearGradient>
</defs>
</svg>

<svg className='arrow2' width="71" height="30" viewBox="0 0 71 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64.7558 5.55416L64.4304 5.1745L64.7558 5.55416ZM70.1085 0.501465C70.3838 0.522673 70.5898 0.763061 70.5686 1.03839L70.223 5.5251C70.2018 5.80042 69.9614 6.00643 69.6861 5.98522C69.4108 5.96401 69.2048 5.72363 69.226 5.4483L69.5332 1.46011L65.545 1.15292C65.2697 1.13171 65.0637 0.891326 65.0849 0.615998C65.1061 0.340673 65.3465 0.134666 65.6218 0.155874L70.1085 0.501465ZM64.4304 5.1745L69.7447 0.620327L70.3954 1.37965L65.0811 5.93383L64.4304 5.1745ZM0.997928 28.8499C24.2773 28.712 46.7535 20.323 64.4304 5.1745L65.0811 5.93383C47.2246 21.2363 24.5199 29.7106 1.00385 29.8499L0.997928 28.8499Z" fill="url(#paint0_linear_1077_569)"/>
<defs>
<linearGradient id="paint0_linear_1077_569" x1="55.6346" y1="138.86" x2="122.624" y2="105.481" gradientUnits="userSpaceOnUse">
<stop stop-color="#7AE8FC"/>
<stop offset="0.494792" stop-color="#9394F2"/>
<stop offset="1" stop-color="#E5BCF8"/>
</linearGradient>
</defs>
</svg>

        <div className='date_read'>10 хв читання</div>
      </div>
      <div className='text'>
        <img className='blog_picture' src='https://smurfmania.com/wp-content/uploads/2022/03/scuba-gragas.jpg' alt="Scuba"/>

        <div className='blog_name'><p>Як підвищити органічну видачу сайту, або як не зійти з розуму?</p></div>
      
        <div className='blog_describe'><p>Ми навіть не уявляємо, як працюємо ми, то чому ми змогли уявити, що нам під силу дізнатися як працює SEO?</p></div>
        <div className='blog_describe_label'><p>-Короткий опис теми</p></div>
      </div>
     
      <div className='other'>
        <div className='other2'>
          <div className='search'>
        <input type='text' className="search_input" placeholder='PPC, #GoogleAnalitics і т.д'/>
        <svg className='search_but' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.32699" cy="7.32699" r="6.82699" stroke="url(#paint0_linear_0_1)"/>
<rect x="12.2734" y="11.8164" width="5.30007" height="1.83662" transform="rotate(44.6507 12.2734 11.8164)" fill="url(#paint1_linear_0_1)"/>
<defs>
<linearGradient id="paint0_linear_0_1" x1="2.5" y1="2" x2="12" y2="13" gradientUnits="userSpaceOnUse">
<stop stop-color="#A9C9FF"/>
<stop offset="1" stop-color="#FFBBEC"/>
<stop offset="1" stop-color="#FFBBEC"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1" x1="12.2029" y1="12.847" x2="17.8597" y2="12.8814" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFBBEC"/>
<stop offset="1" stop-color="#FFBBEC"/>
</linearGradient>
</defs>
</svg>
        </div>
        


        <div className='other_tag_links'>
        <div className='tags'>
        <ScrollContainer className='BlogPage-Hashtags'>
                                <HashTag HashTag='Мужская' />
                                <HashTag HashTag='Эстетика' />
                                <HashTag HashTag='Position' />
                        </ScrollContainer>
        
        </div>
        <div className='link'>
        <img className='facebook_link' src={images.facebook}></img>
        <img className='twitter_link' src={images.twitter}></img>
        <img className='instagram_link' src={images.instagram}></img>
        </div>
        </div>
        <div className='profile'>
          <div className='logo_name'>
          <img className='profile_logo' />
          <div className='profile_name'>Главный гачист страны</div>
          </div>
          <div className='subscriber_count'>1,488</div>
          <div className='profile_describe'>У мене є багато аналітики щодо гачі відео та порад, як потрапити до зйомок у якості актора, підписуйся та насолоджуйся</div>
          <input type='button' className='profile_subscribe' value='Стати'/>
          <div className='border_line'></div>
        </div>
        <div className='recomendation'>
          <div className='rec_first'>Ми підібрали вам дещо:</div>
          <div className='rec_second'>*по секретній формулі</div>
          <div className='rec_profile'>
            <img className='rec_profile_logo' src='https://lastfm.freetls.fastly.net/i/u/300x300/f939d9be5da0095a78bfb5cf45aecf39'/>
            <div className='column_sort'>
            <div className='tags_line'>
            <ScrollContainer className='lowBlogPage-Hashtags'>
                                <HashTag HashTag='Гачи' />
                                <HashTag HashTag='Эстетика' />
                                <HashTag HashTag='Топ'  />
                        </ScrollContainer>
            </div>           
            <div className='rec_name'>Мій профіль сконцентрований на гачі костюмах, приєднуйся </div>
            </div>
          </div>
          <SmallPlatesBlogPage
          logo= "data:image/jpeg;base64,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"
          hashtag='Гачи'
          name='I love penises'
          />
            
          
        </div>
      </div>
      </div>
    </div>   
  )
}


export default BlogPage


