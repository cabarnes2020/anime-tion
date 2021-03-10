import React, {useState, useContext, createContext} from 'react'
import SearchBar from '../components/SearchBar/Searchbar'

const SearchContext = createContext()

export const useSearchContext = () => useContext(SearchContext)

const SearchProvider = ({children}) => {
    const [filterAnime, setFilterAnime] = useState([])
    return (
        <SearchContext.Provider value={{filterAnime, setFilterAnime}}>
            {children}
        </SearchContext.Provider>
    )
}
export default SearchProvider