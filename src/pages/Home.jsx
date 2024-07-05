import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

import { todayText } from '../data/today'
import { developerText } from '../data/developer';
import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'

const Home = () => {
    return (
        <Main 
            title='웹스토리보이 유튜브' 
            description='웹스토리보이 유튜브 채널에 오신것을 환영합니다.'
        >
            <Today videos={todayText} id="today"/>
            <Developer id={'developer'} title={'😪 추천 개발자를 소개합니다.'} videos={developerText}/>
            <VideoSlider id={'webd'} title={'😮 웹디자인기능사 준비는 이걸로!'} videos={webdText}/>
            <VideoSlider id={'website'} title={'😛 웹표준 사이트 만들기 기초 다지기'} videos={websiteText}/>
            <VideoSlider id={'gsap'} title={'🤓 GSAP 패럴랙스 효과를 하고 싶다면!'} videos={gsapText}/>
            <VideoSlider id={'portfolio'} title={'🤗 포트폴리오 만드는 방법을 공유합니다.'} videos={portfolioText}/>
            <VideoSlider id={'youtube'} title={'😱 지금 이 코딩을 영상으로'} videos={youtubeText}/>
        </Main>
    )
}

export default Home