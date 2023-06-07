import React from 'react';
import {useParams , useLoaderData} from 'react-router-dom';
import NewsCard from '../Pages/NewsCard/NewsCard';

const Categorry = () => {
    // const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
           {
             categoryNews.map(news => <NewsCard
               key={news._id}
               news = {news}
             >
             </NewsCard>)
           }
        </div>
    );
};

export default Categorry;