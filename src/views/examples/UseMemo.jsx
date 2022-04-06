import React, {useState, useMemo} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function sum(n1, n2){
    const future = Date.now() + 2000
    while(Date.now() < future) {}
    console.log(typeof(n1)) 
    return n1 + n2
}

const UseMemo = (props) => {

    const [inputValue1, setInputValue1] = useState(0)
    const [inputValue2, setInputValue2] = useState(0)
    const [inputValue3, setInputValue3] = useState(0)


    const result = useMemo(() => sum(inputValue1, inputValue2), [inputValue1, inputValue2])

    console.log(result)
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <input type="number" className="input" value={inputValue1} onChange={e => setInputValue1(parseInt(e.target.value)) }/>
                <input type="number" className="input" value={inputValue2} onChange={e => setInputValue2(parseInt(e.target.value) )}/>
                <input type="number" className="input" value={inputValue3} onChange={e => setInputValue3(parseInt(e.target.value) )}/>
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo


