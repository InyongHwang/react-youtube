import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'

import VideoSearch from '../components/videos/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken ] = useState(null); // 다음 페이지 토큰
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        setVideos([]); // 검색어가 변경되면 videos 상태 초기화
        fetchVideos(searchId);
        setLoading(true);
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos((prevVideos) => [...prevVideos, ...data.items]);
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
                setLoading(false);
            });
    };

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    }

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            
            <section id='searchPage' className={searchPageClass}>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
                <div className="video__more">
                    {nextPageToken && (
                        <button onClick={handleLoadMore}>더 보기</button>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Search