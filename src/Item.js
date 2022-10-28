import React from 'react'

export default function Item( {item, toggleItem} ) {
    function handelToggle() {
        toggleItem(item.id)
    }

    return (
        <label>
            <input type="checkbox" checked={item.completed} onChange={handelToggle}/>
            {item.name}
        </label>
    )
}
