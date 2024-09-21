"use client"

import { Book } from "../../../../type";
import { useState } from "react";

export const SearchKey = () => {
    const [books,setBooks] = useState<Book[] | null>(null);

    async function getBooks() {
        const res = await fetch(
          "/api/search",
        ).then((res) => res.json())
        .then(books =>{
            setBooks(books)
        })
      }

    const SearchButton = () => {

        return (
            <button type="submit" onClick={getBooks}>検索</button>//TODO: 検索ボックスの値を取得 
        )
    }
    return (
        <><div>
            <h1>検索ボックス</h1>
            <form>
                <input type="text" />
            </form>
            </div>
            <SearchButton />
        <table>
                <thead>
                    <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>author</th>
                    <th>label</th>
                    <th>state</th>
                    </tr>
                </thead>
        {books ? (
          Object.values(books).map((book) => (
            <tbody>
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.label}</td>
              <td>{book.state}</td>
            </tr>
      </tbody>
          ))
        ) : (
           <tbody><tr><><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></></tr></tbody> 
        )}

 </table></>)
}
                {/* <tbody>
        {books ?Object.values(books).map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.label}</td>
            <td>{book.state}</td>
          </tr>
        )):}
        </tbody> */}
// export const SearchCategory = ()=>{
//     return(
//         <><label for="ice-cream-choice">Choose a flavor:</label><input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice">

//             <datalist id="ice-cream-flavors">
//                 <option value="Chocolate">
//                     <option value="Coconut">
//                         <option value="Mint">
//                             <option value="Strawberry">
//                                 <option value="Vanilla">
//                                 </datalist>
//                                 )
//                                 }
