import { produce } from 'immer'
import { useReducer } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

// Community convention is to use variable names instead of raw stings
const INCREMENT_COUNT = 'increment-count'
const DECREMENT_COUNT = 'decrement-count'
const CHANGE_VALUE_TO_ADD = 'change-value-to-add'
const ADD_VALUE = 'add-value-to-count'

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            // Immer allows us to modify the state object
            state.count = state.count + 1
            return
        case DECREMENT_COUNT:
            // Without Immer
            return {
                // Good practice to copy over all state items to the new
                // object to account for new properties that will be
                // included in the future
                ...state,
                count: state.count - 1
            }
        case CHANGE_VALUE_TO_ADD:
                state.valueToAdd = action.payload
                return
        case ADD_VALUE:
            state.count = state.count + state.valueToAdd
            state.valueToAdd = 0
            return
        default:
            return
    }
}

function CounterPage({ initialCount }) {
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    })

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        })
    }
    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        })
    }
    const handleChange = (event) => {
        // Use `// 0` to use `0` if NaN returned 
        const value = parseInt(event.target.value) || 0

        // Community convention is to provide an 'action object' to the
        // dispatch function that specifies and action type along with an
        // additional payload value
        dispatch({
            type: CHANGE_VALUE_TO_ADD,
            payload: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch({
            type: ADD_VALUE
        })
    }

    return (
        <Panel className="m-3">
            <h1 className='text-lg'>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit} >
                <label>Add a lot!</label>
                <input 
                    value={state.valueToAdd || ""} // dont show `0`
                    onChange={handleChange}
                    type='number' 
                    className='p-1 m-3 bg-gray-50 border border-gray-300' 
                />
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage