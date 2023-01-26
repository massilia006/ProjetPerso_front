import React,{useReducer,useEffect} from 'react'
import { Card, Icon } from 'semantic-ui-react'
import axios from 'axios'
function AllForms() {
    const initialState ={
loading:true,
error:'',
forms:{}
    };

    const reducer=(state,action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS':
                return {
                    loading:false,
                    error:'',
                    forms:action.payload
                }
                case 'FETCH_ERROR':
                    return {
                        loading:false,
                        error:action.payload,
                        forms: {}
                    }
                    default: return state

        }
    };
    const[state,dispatch] =useReducer(reducer,initialState);
    useEffect(()=>{
        axios.get("http://localhost:5000/allforms/")
        .then((response)=>{
            dispatch({
                type:"FETCH_SUCCESS",
                payload:response.data
            })
        }).catch((error)=>{
            dispatch({
                type:"FETCH_ERROR",
                payload:error
            });
        });
        // }).catch({
        //     type:"FETCH_ERROR"
        // });
    })
  return (
    <React.Fragment>
{
    state.loading ?'Loading ......': state.forms.data.map((form,index)=>{
return (
// (<div key={index}>
//     username={user.username}
//     email={user.email}
//     age={user.age}
//     Telephone={user.tel}
// </div>)
<Card>
<Card.Content header={form.firstname} />
<Card.Content description={form.lastname} />
<Card.Content extra>
  <Icon name='user' />{form.gender ? "L'utilisateur est male" : "L'utilisateur est female"}
</Card.Content>
</Card>
)
    })
}
    </React.Fragment>
  )
}

export default AllForms