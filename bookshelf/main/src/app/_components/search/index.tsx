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
                {books ? Object.values(books).map((books: Book) => (
                    <tbody>
                    <tr>
                        <><td>{books.id}</td><td>{books.name}</td><td>{books.author}</td><td>{books.label}</td><td>{books.state}</td></>
                    </tr>
                    </tbody>
                )) : <tbody>
                    <tr><><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></></tr></tbody>}
            </table></>
    )
}
