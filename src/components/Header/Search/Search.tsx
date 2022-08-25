import React from 'react';
import {ImageSearch, SearchWrapper, SearchInput} from "./Search.styles";
import closeSvg from "../../../assets/closeInput.svg";
import searchSvg from "../../../assets/search.svg";
import {ISearchProps} from "./Search.interface";

const Search:React.FC<ISearchProps> = ({openSearch, setOpenSearch}) => {
    const close = (e:React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setOpenSearch(false)
    }
    return (
        <SearchWrapper openSearch={openSearch} onClick={() => setOpenSearch(true)}>
            <ImageSearch openSearch={openSearch} src={closeSvg} onClick={close}/>
            <SearchInput openSearch={openSearch}/>
            <ImageSearch src={searchSvg} alt="search" />
        </SearchWrapper>
    );
};

export default Search;