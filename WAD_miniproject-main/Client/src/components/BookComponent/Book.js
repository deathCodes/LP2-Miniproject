import React from 'react'
import classes from './book.module.css'
import {Card, CardTitle, CardText, Button} from 'reactstrap'
import { useNavigate, useLocation } from 'react-router-dom'
// import StarRating from 'react-star-rating'
// import starRatings from 'react-star-ratings/build/star-ratings'
import ReactStars from 'react-rating-stars-component';

import cover_img from '../dummy_images/book_cover.jpg'


const Book = () => {
  const nav = useNavigate();
  let location = useLocation();
  let book = location.state
  
  return (
    <div className='book_container'>
      
      <h1><i onClick={()=>nav(-1)} className="fas fa-angle-left" style={{marginRight:"20px"}}></i>Book Details</h1>
      <div className='row gx-0 justify-content-md-center book_img_col'>
        <div className='col-md-6 col-sm-12'>
          <img src={book.image} className='book_img'/>
        </div>
        <div className='col-md-6 col-sm-12'>
              <Card body className="book_details_card">
                <CardTitle tag="h5">
                  {book.name}
                </CardTitle>
                <CardText>
                  Author : {book.author}
                </CardText>
                <CardText>
                  Book description : {book.description}
                </CardText>
                <CardText>
                  Rating :
                  <ReactStars value={book.rating} size={25} edit={false}/>
                </CardText>
                <CardText>
                <ul>
                  
                    {
                      book.review && book.review.map((review,index)=>{
                        return(
                          <li key = {index}>
                            {/* <starRatings
                              rating={review.rating}
                            /> */}
                            {review.comment}, {review.rating}</li>
                        );
                      })
                    }
                  
                </ul>
                </CardText>
                
              </Card>
          
        </div>
        </div>


    </div>
  )
}

export default Book