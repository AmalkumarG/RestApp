import React ,{useEffect, useState} from 'react'
import ResCards from './ResCards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestListAction } from '../actions/restaurantListRed';
import { useDispatch, useSelector } from 'react-redux';
function ResDetails() {
  const dispatch=useDispatch()
  const result=useSelector(state=>state.Reducer)
  const {restlist}=result
    const [res,setRes]=useState([])
    useEffect(()=>{
        // resDetails()
        dispatch(RestListAction())
       
      },[])
      // const resDetails=async()=>{
      //  await fetch("/restaurants.json").then(res=>res.json()
      //   ).then(json=>setRes(json.restaurants))
      // }
  console.log("resulttt",result);
  return (
    <div  >
    <Row >

    

    {
      restlist.map((item,index)=>(
           
<Col sm={12} md={6} lg={4} xl={3} key={index}>
<ResCards restaurant={item}/>
</Col>
            
           
        ))
    }
    </Row>
    </div>
  )
}

export default ResDetails