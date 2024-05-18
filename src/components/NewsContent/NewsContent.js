import { Container } from '@mui/material';
import React from 'react';
import './NewsContent.css';
import NewsCard from '../NewCard/NewsCard';

const NewsContent = ({ newsResults, dataTotal, loadMore, setLoadMore }) => {
    return (
        <Container maxWidth='md'>
            <div className="content">
                <div className="downloadMessage">
                    <span className="downloadText">For the best experience use inshorts app on your smartphone</span>
                    <img
                        src='https://assets.inshorts.com/website_assets/images/appstore.png'
                        alt='download-logo'
                    />
                    <img
                        src='https://assets.inshorts.com/website_assets/images/playstore.png'
                        alt="logo"
                    />
                </div>
                {newsResults.map((newsItem) => (
                    <NewsCard newsItem={newsItem} key={newsItem.title} />
                ))}
                {
                    loadMore <= dataTotal && (
                        <>
                            <hr />
                            <button className='loadMore' onClick={() => setLoadMore(loadMore + 20)}>Load More</button>
                        </>
                    )
                }
            </div>
        </Container>
    )
};

export default NewsContent;