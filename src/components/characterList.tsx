import React, { useState, useEffect } from "react";
import StarCharacter from "./characterDesc";
import { Character } from "../types/characterType";

const CharactersPage = () => {
  const [chars, setChars] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1)
  const [previous, setPrevious] = useState<string>();
  const [next, setNext] = useState<string>();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setPrevious(data.previous)
        setNext(data.next)
        setChars(data.results)
      },);
  },[page]);

  const handlePreviousPage=()=>{
    if(previous !== null){
      const number = Number( previous?.split('=')[1])
      setPage(number)
    }else{
      setPage(page)
    }
  }

  const handleNextPage=()=>{
    if(next !== null){
      const number = Number( next?.split('=')[1])
      setPage(number)
    }else{
      setPage(page)
    }
  }


  return(
    <div className="col-md-12">
      <div className="col-md-12 row h-100 mt-4 pb-5">
        <h1 className="h6 text-center mb-2  headline">CHARACTERS</h1>
       
        {chars.map((char:Character, index:number)=> <StarCharacter {...char} key={index}/>)}
        {/* {chars.map((char:Character, index:number)=> <StarCharacter character={char} key={index}/>)} For alternative // or {character}:{character:Character} as props*/} 
       
    </div>
    <div className="d-flex justify-content-center align-items-center mb-2 fixed-bottom">
      <button className="btn btn-sm bg-dark text-light mx-2" onClick={handlePreviousPage} disabled={previous==null}>Previous Page</button>
      <button className="btn btn-sm bg-dark text-light mx-2" onClick={handleNextPage} disabled={next==null} >Next Page</button>
    </div>
    </div>
  )
};


export default CharactersPage
