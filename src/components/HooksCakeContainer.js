import React from 'react'
import { useSelector } from 'react-redux'

export default function HooksCakeContainer() {
    const numCakes = useSelector(state => state.numCakes)
  return (
    <div>
        <h2>number of cakes-- {numCakes}</h2>
        <button> buy cake</button>
    </div>
  )
}
