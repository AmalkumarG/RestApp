import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function RestReview({reviews}) {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Button
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}
    >
      View Review
    </Button>
    <Collapse in={open}>
      <div id="example-collapse-text" >
       {
        reviews.map(item=>(
            <h5 className='border mt-2 p-2 border-info rounded'>Reviewed by : {item.name} <br/> {item.date} <br/>Rating : {item.rating}</h5>
        ))
       }
      </div>
    </Collapse>
  </>
  )
}

export default RestReview