/* eslint-disable react/prop-types */
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './same.css';
import moment from 'moment/moment';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa"
import Rating from 'react-rating';

// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: "40px" }} src={news.author?.img} roundedCircle />

                <div className='flex-grow-1 ms-2 pt-2'>
                    <p className='mb-0'>{news.author?.name}</p>
                    <p> {moment(news.author?.published_date).format("YYYY-MM-D")} </p>
                </div>

                <div>
                    <button className='border-line'>
                        <FaRegBookmark></FaRegBookmark>    </button>
                    <button className='border-line'>
                        <FaShareAlt></FaShareAlt>
                    </button>

                </div>

            </Card.Header>

            <Card.Body>
                <Card.Title>{news.title}</Card.Title>

                <Card.Img variant="top" src={news.image_url} className='pt-3' />

                <Card.Text className='py-3'>
                    {news.details < 200 ? news.details : news.details?.slice(0, 200)}...<Link to={`/news/${news._id}`} className='text-decoration-none   link-color'> Read More </Link>
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        readonly
                        placeholderRating={news.rating?.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />  <span className='ps-3'>{news.rating?.number}</span>
                </div>

                <div>
                    <FaEye> </FaEye> <span className='ms-2'>  {news.total_view} </span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;