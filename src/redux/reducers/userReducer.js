const initialState = {
    users : [],
};


const userReducer = (state=initialState, action) => {
 
    switch (action.type) {
        case 'ADD_USER':
            console.log('Adding User:', action.payload);
        return{
            ...state,
            users : [...state.users, action.payload],
        };
        default:
            return state;
    }
};

export default userReducer;