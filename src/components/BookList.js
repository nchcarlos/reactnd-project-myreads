import React from 'react';
import Book from './Book';

const BookList = ({ books, moveOptions }) => (
    <div className="bookshelf-books">
        <ol className="books-grid">
            {books.map((book, idx) => (
                <li key={idx}>
                    <Book
                        author={book.author}
                        coverUrl={book.coverUrl}
                        currentShelf={book.currentShelf}
                        title={book.title}
                        moveOptions={moveOptions}
                    />
                </li>
            ))}
        </ol>
    </div>
);

export default BookList;