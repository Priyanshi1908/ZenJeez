export const addUser = (user) => {
    return(dispatch) => {

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Add the new user to the array
        existingUsers.push(user);
    
        // Update the 'users' key in local storage with the updated array
        localStorage.setItem('users', JSON.stringify(existingUsers));
        dispatch({
            type : 'ADD_USER',
            payload:user,  
        });

    };
};


