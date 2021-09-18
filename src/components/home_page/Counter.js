import React from 'react'
import {useStore1} from '../store/counterStore';

export default function Counter() {

const count = useStore1(state => state.count)
const increase = useStore1(state => state.increase)
const decrease = useStore1(state => state.decrease)
    return (
        <div>
         count: {count}
         <button onClick={increase}>increase</button>
         <button onClick={decrease}>decrease</button>    
        </div>
    )
}
