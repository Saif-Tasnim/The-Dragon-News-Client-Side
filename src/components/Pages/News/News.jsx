import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData, Link } from 'react-router-dom';
import EdittorsInsight from '../../EditorsInsight/EdittorsInsight';

const News = () => {
    const news = useLoaderData();

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={news.image_url} />
                <Card.Body>
                    <Card.Title className='mb-3 mt-3'> {news.title} </Card.Title>
                    <Card.Text className='pt-2 mb-3'>
                        {news.details}
                    </Card.Text>

                    <Link to={`/category/${news.category_id}`}>

                        <Button variant="danger"
                            className='mt-3 ms-3'> <FaArrowLeft></FaArrowLeft>  All News In This Category </Button>

                    </Link>
                </Card.Body>
            </Card>

            <h4 className='mt-4'> Editors Insight </h4>
            <EdittorsInsight></EdittorsInsight>
        </div>

    );
};

export default News;