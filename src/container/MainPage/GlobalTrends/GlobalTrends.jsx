import React from 'react'

import './GlobalTrends.css';
import RollerHashTag from '../../../constants/RollerHashTag/RollerHashTag';
import SmallBlogPageBlack from '../SmallBlogPageBlack/SmallBlogPageBlack';

const GlobalTrends = () => {
  return (
    <div className='app_mainpage_globtrends'>
        <div className='Hashtags'>
            <RollerHashTag color='' />
        </div>
        <div className='globtrends-header'>
            <p>TRENDS</p>
        </div>

        <div className='globtrends-subtitle'>
            <p>Мг... Ви вже на цьому розділі? Я так розумію попередній вам не підійшов, ну що ж важка артилерія! <br />Зацініть наші 12 найтрендовіших статей, цілком об’єктивно(ага, а як же).</p>
        </div>

        <div className='globtrends-grid'>

        </div>
        <div className='globtrends-grid'>
            <SmallBlogPageBlack
                Title='Як підвищити органічну видачу сайту, або як не зійти з розуму jfbgerbfgergggggggg'
                SubTitle='(Не обіцяємо, що не зійдете з розуму) А взагалі потрібно знайти якогось вченого, забашляти йомуааа'
                Author='3DMaX'
                Time='10'
                Date='12.05.22'
            />
            <SmallBlogPageBlack
                Title='Як підвищити органічну видачу сайту, або як не зійти з розуму jfbgerbfgergggggggg'
                SubTitle='(Не обіцяємо, що не зійдете з розуму) А взагалі потрібно знайти якогось вченого, забашляти йомуааа'
                Author='3DMaX'
                Time='10'
                Date='12.05.22'
            />
            <SmallBlogPageBlack
                Title='Органічна видача і ні, це я зараз не про рослини'
                SubTitle='(Не обіцяємо, що не зійдете з розуму) А взагалі потрібно знайти якогось вченого, забашляти йомуааа'
                Author='3DMaX'
                Time='10'
                Date='12.05.22'
            />
            <SmallBlogPageBlack
                Title='Як підвищити органічну видачу сайту, або як не зійти з розуму'
                SubTitle='(Не обіцяємо, що не зійдете з розуму) А взагалі потрібно знайти якогось вченого, забашляти йомуааа'
                Author='3DMaX'
                Time='10'
                Date='12.05.22'
            />
            <SmallBlogPageBlack
                Title='Чому Ford Mustang - це маркетинг на максималках?'
                SubTitle='(Не обіцяємо, що не зійдете з розуму) А взагалі потрібно знайти якогось вченого, забашляти йомуааа'
                Author='3DMaX'
                Time='10'
                Date='12.05.22'
            />
            <SmallBlogPageBlack
                Title='Де взялися ці ваші PPC'
                SubTitle='(Не обіцяємо, що не зійдете з розуму) А взагалі потрібно'
                Author='3DMaX'
                Time='10'
                Date='12.05.22'
            />
        </div>

        <div className='globtrend-loadmore'>
            <div className='globtrend-loadmore-click'>
                <svg width="6" height="60" viewBox="0 0 6 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.71715 59.2828C2.87336 59.439 3.12663 59.439 3.28284 59.2828L5.82842 56.7373C5.98463 56.581 5.98463 56.3278 5.82842 56.1716C5.67221 56.0154 5.41895 56.0154 5.26274 56.1716L3 58.4343L0.737255 56.1716C0.581045 56.0154 0.32778 56.0154 0.17157 56.1716C0.0153602 56.3278 0.0153602 56.581 0.17157 56.7373L2.71715 59.2828ZM2.6 -2.16338e-08L2.6 59L3.4 59L3.4 2.16338e-08L2.6 -2.16338e-08Z" fill="white"/>
                </svg>
                <p>Завантажити більше</p>
            </div>
        </div>
    </div>
  )
}

export default GlobalTrends