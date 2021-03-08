const GET_ANIME = 'anime/getAnime'
const GET_TRENDING_ANIME = 'anime/getTrendingAnime'
const GET_ONE_ANIME = 'anime/getOneAnime'

const initialState = {}

const getAnime = (payload) => {
    return {
        type: GET_ANIME,
        payload: payload
    }
}

const getTrendingAnime = (payload) => {
    return {
        type: GET_TRENDING_ANIME,
        payload: payload
    }
}

const getOneAnime = (anime) => {
    return {
        type: GET_ONE_ANIME,
        payload: anime
    }
}

export const getAll = () => async (dispatch) => {
    const res = await fetch('/api/anime')

    if(res.ok){
        const animeList = await res.json()
        dispatch(getAnime(animeList))
    }
}

export const getTrending = () => async (dispatch) => {
    const res = await fetch('/api/anime/trending')

    if(res.ok){
        const trendingAnime = await res.json()
        dispatch(getTrendingAnime(trendingAnime))
    }
}


export const getOne = (id) => async (dispatch) => {
    const res = await fetch(`/api/anime/${id}`);

    if(res.ok){
        const anime = await res.json()
        dispatch(getOneAnime(anime))
    }
}

const animeReducer = (state = initialState, action) => {
    let newState

    switch (action.type) {
        case GET_ONE_ANIME:
            newState = Object.assign({}, state)
            newState[action.payload.id] = action.payload
            return newState
        case GET_ANIME:
            newState = Object.assign({}, state)
            for(let id in action.payload){
                newState[id] = action.payload[id]
            }
            return newState
        case GET_TRENDING_ANIME:
            newState = Object.assign({}, state)
            newState.trendingAnime = action.payload
            return newState
        default:
            return state
    }
}

export default animeReducer
