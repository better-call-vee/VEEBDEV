// 🚫 Don’t push, splice, or sort directly.
// ✅ Instead use filter, map, concat, or spread.

import { useState } from 'react';

export default function ShoppingList() {
    const [items, setItems] = useState(['milk', 'bread']);

    function addItem(newItem) {
        // ✅ immutable add
        setItems([...items, newItem]); // makes a brand new array
    }

    function removeItem(index) {
        // ✅ immutable remove
        setItems(items.filter((_, i) => i !== index));
    }

    return (
        <>
            <button onClick={() => addItem('eggs')}>Add Eggs</button>
            <ul>
                {items.map((item, i) => (
                    <li key={i} onClick={() => removeItem(i)}>{item}</li>
                ))}
            </ul>
        </>
    );
}
