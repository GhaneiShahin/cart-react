import React from 'react';
import {connect} from 'react-redux';
import{deleteCounter, addCounter} from '../actions/index';
import {
    Button,
    Badge,
    Container
} from 'reactstrap';



const Counter = ({dispatch, counter}) => {
    return(
        <Container>
            <Badge color={getBdgeColor(counter)} className="m-2">{formatCount(counter)}</Badge>
            <Button
                color="danger"
                className="btn-sm m-2"
                onClick={() => dispatch(deleteCounter(counter.id))}>
                Delete
            </Button>
            <Button
                color="success"
                className="btn-sm"
                onClick={() => dispatch(addCounter(counter))}>
                Add
            </Button>
        </Container>
    );
}

    const getBdgeColor = (counter) => {
        return counter.value === 0 ? 'secondary' : 'primary';
    }

    const formatCount = (counter) => {
        const {value} = counter;
        return value === 0 ? "Zero" : value;
    }


export default connect(state => {
    return{
        state
    }
})(Counter);