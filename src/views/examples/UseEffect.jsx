import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseEffect = (props) => {

    // state
    const [input, setInput] = useState(1)
    const [num, setNum] = useState(1)
    const [isPar, setIsPar] = useState(false)


    useEffect(()=> {

        if (input < 0){
            return setNum('Erro')
        } 

        if( input == 0){
            return setNum(1)
        }

        let contador = 1;
        for (let i = input; i > 1; i--) {
          contador *= i;
        }

        setNum(contador)

        if(input % 2 === 0){
            setIsPar(true)
        }else{
            setIsPar(false)
        }
        
        
        
    }, [input])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title='Exercício #01'/>
            <div className='center'>
                <span className='text'>Fatorial: {num}</span>
                <div>
                    <input type='number' className='input' value={input}
                    onChange={(e)=> setInput(e.target.value)}/>
                    
                </div>
            </div>

            <SectionTitle title="#02 - Exercício 02"/>
            <div className='center'>
                <span className='text'>Par ou impar ? {isPar ? 'Par' : 'Ímpar'}</span>
               
            </div>
        </div>
    )
}

export default UseEffect
