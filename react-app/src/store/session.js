const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser'
const MAKE_VAULT = 'session/makeVault'

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const user = await response.json()

    if(!user.errors){
        dispatch(setUser(user))
    }
    return user
}

export const login = (email, password) => async (dispatch) => {
    
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    
    const user = await response.json()
    console.log("USER", user)

    if (!user.errors) {
        dispatch(setUser(user))
    }
    return user
}

export const logout = () => async (dispatch) => {
    const response = await fetch("/api/auth/logout", {
        headers: {
            "Content-Type": "application/json",
        }
    });
    const user = await response.json()

    if (!user.errors) {
        dispatch(removeUser(user))
    }
    return user
};


export const signUp = (username, email, password, profile_pic, fav_anime_id) => async (dispatch) => {

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("fav_anime_id", fav_anime_id)
    if (profile_pic) formData.append("profile_pic", profile_pic);


    const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: formData,
    })

    const user = await response.json()
    console.log("USERRR", user)
    if (!user.errors) {
        dispatch(setUser(user))
    }
    return user
}

export const createVault = (name) => async (dispatch) => {

    const form = new FormData()
    form.append("name", name)

    const res = await fetch('/api/vaults/new', {
        method: 'POST',
        body: form
    })

    if(res.ok){
        const user = await res.json()
        dispatch(setUser(user))
    }
}



const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {

    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload
            return newState
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state
    }
}

export default sessionReducer;