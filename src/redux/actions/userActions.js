export const addUser = (user) => {
    return(dispatch) => {
        dispatch({
            type : 'ADD_USER',
            payload:user,  
        });

        localStorage.setItem('user', JSON.stringify(user));    
        console.log('User data saved in local storage:', user);
    
    };
};


