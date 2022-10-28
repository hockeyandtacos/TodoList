import React from 'react'
import Item from './Item'

export default function ItemList( {items, toggleItem} ) {
  return (
    items.map(item => {
        return (
            <>
                <Item key={item.id} item={item} toggleItem={toggleItem} />
                <br/>
            </>
        )
    })
  )
}
