import React, {useState, useRef, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge (s1,s2){
    return s1 + s2
}


const UseRef = (props) => {

     // states
     const [inputValue1, setinputValue1] = useState('')
     const [inputValue2, setinputValue2] = useState('')

     // useRef
     const count = useRef(0)

     const myInput1 = useRef(null)
     const myInput2 = useRef(null)

     useEffect(() => {
        count.current ++
        myInput2.current.focus()
     },[inputValue1])

     useEffect(()=> {

        count.current++
        myInput1.current.focus()
     }, [inputValue2])



    return (

        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle text="Exercício #01"/>
            <div className="center">
                <div>
                <span className='text'>Valor: </span>
                <span className='text'>{merge(inputValue1, inputValue2)} [</span>
                <span className='text red'> {count.current} </span>
                <span className='text'>]</span>
                </div>
                <input type="text" 
                className="input" 
                onChange={e => setinputValue1(e.target.value)} 
                ref={myInput1}
                />
            </div>
            <SectionTitle text="Exercício #01"/>
            <div className="center">
                <input type="text" 
                className="input" 
                value={inputValue2} 
                onChange={(e)=> setinputValue2(e.target.value)} 
                ref={myInput2}
                />
            </div>
        </div>

    )
}

export default UseRef
