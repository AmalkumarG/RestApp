import axios from "axios";
import { R_success,R_fail } from "../constants/restConstants";

export const RestListAction=()=>async(dispatch)=>{
    
   try{
          const data =await axios.get('./restaurants.json')
          
          console.log("dataaaaaaaaaa",data.data.restaurants);
          

          dispatch({type:R_success,payload:data.data.restaurants})
   }
     catch(err){
          // const dispatch=useDispatch()
          dispatch({type:R_fail,error:err})
     }
     

}