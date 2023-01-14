import { connect } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const Filter = (props) => {

    const handleChange = (e) => {
        console.log(e.target.value)
        props.setFilter(e.target.value)
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

const mapStateToProps = (state) => {
    return {
        notification: state.notification,
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = {
    setFilter
}

const ConnectedFilter = connect(
    mapStateToProps, mapDispatchToProps
) (Filter)

export default ConnectedFilter