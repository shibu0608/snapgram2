import React from 'react'
import Loader from './Loader'
import GridPostList from './GridPostList';
import { Models } from 'appwrite';
type SearchResultProps={
    isSearchFetching:boolean,
    searchedPosts:Models.Document[];
}
const SearchResults = ({isSearchFetching,searchedPosts}:SearchResultProps) => {
    if(isSearchFetching) return <Loader/>

    if(searchedPosts && searchedPosts.documents.length>0)
    {
        return(
            <GridPostList posts={searchedPosts.documents}/>
        )
    }
  return (
    <p className='text-light-4 mt-10 text-center w-full'>No Results

    </p>
  )
}

export default SearchResults