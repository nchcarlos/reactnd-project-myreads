import React from 'react';
import ShelfChanger from './ShelfChanger'

const Book = ({ author, coverUrl, title, moveOptions }) => (
    <div className="book">
        <div className="book-top">
            <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${coverUrl}")`
                }}>
            </div>
            <ShelfChanger
                shelfOptions={moveOptions}
            />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
    </div>
);

export default Book;