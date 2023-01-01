import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        console.log(e.target.value)
        dispatch(setFilter(e.target.value))
    }
    const style = {
        margin: 10
    }
    return(
        <div style = {style}>
            filter <input onChange = {handleChange}/>
        </div>
    )
}

export default Filter