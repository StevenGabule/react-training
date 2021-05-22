export const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    client_id: "6e9ed022b1c6d3c035f6ae1f55cc57daa77b59276690ba346ab363fd9fd75f45",
    client_secret: "e94cfe8795fc56e5b06938b85111a4c2a33303f9a37c1f949d2666caa36662ea",
    redirect_uri: "http://localhost:3000/login",
    proxy_url: "http://localhost:5000/authenticate"
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                user: action.payload.user
            };
        }
        case "LOGOUT": {
            localStorage.clear()
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        }
        default:
            return state;
    }
};
