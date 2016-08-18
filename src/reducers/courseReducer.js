import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE:
            // state.push(action.course);   logically
            // return state;
      //      debugger;
            return [...state,
                Object.assign({}, action.course)   // copy state, override course
            ];
        
        default:
            return state;
    }
}