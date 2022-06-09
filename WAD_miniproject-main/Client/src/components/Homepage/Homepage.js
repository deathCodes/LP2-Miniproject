import React, {useState, useEffect} from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardGroup, CardBody, CardSubtitle, Button } from "reactstrap";
import style from './homepage.module.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

// importing dummy image
import cover_img from '../dummy_images/book_cover.jpg'

const Homepage = () => {
  
  const usenav = useNavigate();

  const [booksData, setbookData] = useState();
  useEffect(()=>{
    // getdate();
    axios.get('http://localhost:5000/books')
    .then(res => {
      console.log("books fetched successfully=> ", res);
      setbookData(res.data);
    })
  },[])
  

  return (
    <div className={style.container}>
      <h1>Featured books</h1>

      {!booksData && <span className="loading_text"></span>}
      <div className={style.bookrow}>
        {
        
        booksData && booksData.map((item, index) => {
          return(
            <Card 
                className="col-sm-6 col-md-4 col-lg-3"
                onClick={()=>usenav('/book', {state:item})} 
                key = {item._id}
                >
              <CardImg
                alt="Card image cap"
                src={item.image}
                top
                width="150px"
                height="150px"
                className="card_img"
                
              />
              <CardBody>
                <CardTitle tag="h5">
                  {item.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                  >
                  {item.author}
                </CardSubtitle>
                {/* <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText> */}
                {/* <Button>
                  Button
                </Button> */}
              </CardBody>
            </Card>
          );
        })
      }

      </div>
    </div>
  )
}

export default Homepage