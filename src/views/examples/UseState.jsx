import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    
    const [num, setNum] = useState(0)
    const [input, setInput] = useState('')

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>

            <div className='center'>
                <span className='text'>{num}</span>
                <div>
                <button className='btn'  onClick={()=> { setNum(num - 1)}}>-1</button>
                <button className='btn' onClick={() => {setNum(current => current + 1)}}>+1</button>
                </div>
                
            </div>

            
            
            <SectionTitle title="Exercício #02"/>
            <div>
                <input type="text" className="input"
                value={input} onChange={(e)=> setInput(e.target.value)} />
            </div>
        </div>
    )
}

export default UseState
