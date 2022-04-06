import React, {useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

// Context
import DataContext from '../../data/dataContext'
import { ContextState } from '../../data/store'

const UseContext = (props) => {

    // EX 1
    const context = useContext(DataContext)

    function  addNumber(n) {
        context.setState({
            ...context.state,
            number: context.state.number + n
        })
    }

     //EX 2
    const {number, text , modNumber} = useContext(ContextState)


    
    
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn" onClick={() => addNumber(-1)} >-1</button>
                    <button className="btn" onClick={() => addNumber(1)} >+1</button> 
                </div>
                
            </div>
        
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <span className='text'>{text}</span>
                <span className='text'>{number}</span>
                <div>
                    <button 
                    className="btn" 
                    onClick={()=> modNumber( number -1)}>-1</button>
                    <button className="btn" onClick={()=> modNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
