import React, { useEffect } from 'react';
import "./topicHeroSection.css";
import { useSelector } from 'react-redux';


const TopicHeroSection = () => {

    const topic = useSelector(state => state.topicReducer.topic);
    console.log(topic);
    let loaded = (Boolean(topic?.cover_photo?.urls?.regular));

    if (loaded) {
        var imageStyle = {
            backgroundImage: `url(${topic?.cover_photo?.urls?.regular})`,

        }
    }

    return (
        <div className='container'>
            <div className='heroSectionContainer' style={imageStyle}>
                <div className='backShadow'></div>
                <div className='heroContent'>

                    <div className='topicDetail'>
                        <span className='topicTitle'>{topic.title}</span>
                        <span className='topicDescription'>{topic.description}</span>
                        <button className='topicSubmit'>Submit to <b> {topic.title} </b></button>
                    </div>
                </div>

                <div className='heroFooter'>
                    <span >Photo by Person</span>
                    <span >Read more about the Unsplash Licence</span>
                    <span >Extra Detail If Any</span>
                </div>
            </div>
        </div>
    )
}

export default TopicHeroSection