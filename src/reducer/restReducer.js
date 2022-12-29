import { R_success, R_fail} from "../constants/restConstants";

const Reducer=(state={restlist:[]},action)=>{
    switch(action.type){
        case R_success:return{...state.restlist,
            restlist:action.payload
        }
        case R_fail:return{
            ...state.restlist,
            restlist:action.error
        }
        default:return state
    }
}
export default Reducer