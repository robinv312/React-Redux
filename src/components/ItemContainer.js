import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'
import { buyCake } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item-{props.item}</h2>
            <button onClick={props.buyitem}>But Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
const dispatchFunction = ownProps.cake ? ()=>dispatch(buyCake()): ()=>dispatch(buyIceCream())
return {
    buyitem: dispatchFunction
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
