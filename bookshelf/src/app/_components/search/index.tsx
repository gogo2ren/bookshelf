"use client";
import { Book } from "../../../../type";
import { useState } from "react";

export const SearchKey = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  async function getBooks() {
    const res = await fetch(`/api/search?query=${searchTerm}`);
    const data = await res.json();
    console.log(data); // ここでデータを確認
    if (Array.isArray(data)) {
      setBooks(data);
    } else {
      console.error("API response is not an array:", data);
      setBooks([]);
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const SearchButton = () => {
    return (
      <button type="button" onClick={getBooks} style={{ backgroundColor: 'white', color: 'black' }}>検索</button>
    );
  };

  return (
    <>
      <div>
        <h1>検索ボックス</h1>
        <form>
          <input type="text" value={searchTerm} onChange={handleInputChange}  style={{ color: 'black' }} />
        </form>
        <SearchButton />
      </div>
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
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.label}</td>
                <td>{book.state}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No books found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};