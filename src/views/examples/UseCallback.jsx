import React, {useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallbackButton from './UseCallbackButton'

const UseCallback = (props) => {

    function inc(delta){
        setCount( count + delta)
    }

    const [count, setCount] = useState(0)

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <SectionTitle title='Exercício #02'/>
            <div className="center">
                <spam className="text">{count}</spam>
                
                <UseCallbackButton inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback
