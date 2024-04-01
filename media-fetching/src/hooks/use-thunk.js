import { useState, useCallback } from "react"
import { useDispatch } from "react-redux"

export function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    const runThunk = useCallback((arg) => {
        setIsLoading(true)
        dispatch(thunk(arg))
        // Use `.unwrap' this to convert a 'dispatch' promise to a 'normal' 
         //promise so that we can use `.then' and `.catch'
            .unwrap()
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false))
    }, [dispatch, thunk])

    return [runThunk, isLoading, error]
}