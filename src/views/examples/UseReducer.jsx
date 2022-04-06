import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

// Importar configurações do reducer
import { initialState, reducer } from '../../store'

// Importação de action
import { numberAdd2, login } from '../../store/actions'

const UseReducer = (props) => {

    // Inicia o reducer com o estado e a função que atualiza o estado.
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle/>
            <div className="center">
                <span className='text'>
                    {state.user ? state.user : 'Usuário não logado'}
                </span>
                <span className="text">{state.number}</span>
                <div>
                    <button 
                    className="btn"
                    onClick={()=>  numberAdd2(dispatch) }
                    >+2</button>

                    <button
                        className="btn"
                        onClick={() => login(dispatch, "joão")}
                    > Login
                    </button>

                    <button className="btn"
                    onClick={()=> dispatch({type: 'mult7'})}
                    >X 7</button>

                    <button className="btn"
                    onClick={()=> dispatch({type: 'div25'})}
                    > / 25</button>

                    <button className="btn"
                    onClick={()=> dispatch({type: 'numberInt'})}
                    >Inteiro</button>

                    <button className="btn"
                    onClick={()=> dispatch({type: 'addN', payload: 10})}
                    >+ 10</button>

                    <button className="btn"
                    onClick={()=> dispatch({type: 'addN', payload: -10})}
                    >- 10</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
