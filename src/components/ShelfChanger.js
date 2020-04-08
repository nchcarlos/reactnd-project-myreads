import React from 'react';

const ShelfChanger = ({ shelfOptions }) => (
    <div className="book-shelf-changer">
        <select>
            {shelfOptions.map((option) => {
                const { value, text, ...opts } = option;
                return(
                    <option value={value} {...opts}>
                        {text}
                    </option>
                );
            })}
        </select>
    </div>
);

export default ShelfChanger;