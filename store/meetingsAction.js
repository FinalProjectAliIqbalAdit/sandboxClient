import axios from '../config/axios'

export function fetchMeetings(payload) {
    return (dispatch) => {

        dispatch({type : 'FETCH_MEETINGS_CALL'})

        axios.get('/meetings')
            .then((result) => {
                console.log(result);
                dispatch({type : 'FETCH_MEETINGS_COMPLETE', payload : result})
            }).catch((err) => {
                console.log(err);
                dispatch({type : 'FETCH_MEETINGS_ERROR', payload : err})                
            });

    }  
  
}

