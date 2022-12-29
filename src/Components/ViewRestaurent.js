import React,{useState,useEffect} from 'react'
import { Col, Row,Image } from 'react-bootstrap';
import { useParams ,useLocation} from 'react-router-dom';
import RestOpHr from './RestOpHr';
import RestReview from './RestReview';
function ViewRestaurent() {

    const params=useParams()
    console.log(params.id);
    const [res,setRes]=useState([])
    useEffect(()=>{
        resDetails()
      },[])
      const resDetails=async()=>{
       await fetch("/restaurants.json").then(res=>res.json()
        ).then(json=>setRes(json.restaurants))
      }
      const viewRes=res.find(item=>item.id==params.id)
      console.log(viewRes);
  return (
    <>
        {
            viewRes?(
                <Row>
                    <Col md={6} sm={12} className='p-5' >
                        <Image src={viewRes.photograph}  fluid />
                    </Col>
                    <Col className='p-5'>
                    <p>id:{viewRes.id}</p>
                        <h1>NAME : {viewRes.name}</h1>
                        <h4>Neighborhood:{viewRes.neighborhood}</h4>
                        <h4>Adress:{viewRes.address}</h4>
                        <h4>Cuisine Type:{viewRes.cuisine_type}</h4>
                    <RestOpHr operate={viewRes.operating_hours}/>
                    <RestReview reviews={viewRes.reviews}/>
                    </Col>
                </Row>
            ):null
        }
    </>
  )
}

export default ViewRestaurent