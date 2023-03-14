import * as types from './actionType';

const initiaState = {
    users:[],
    user:{},
    loading:true
}

const usersReducers = (state = initiaState,action) => {
            switch (action.type) {
              case types.GET_USERS:
                return{
                    ...state,
                    users:action.payload,
                    loading:false,
                } ;
                
                case types.DELETE_USERS:
                    return{
                        ...state,
                        loading:false,

                    }


                    case types.ADD_USERS:
                        case types.UPDATE_USERS:


                    case types.GETSINGLE_USERS:
                        return {
                            ...state,
                            user:action.payload,
                            loading:false,
                        }

                    
                default:
                    return state;

            }
};

export default usersReducers;