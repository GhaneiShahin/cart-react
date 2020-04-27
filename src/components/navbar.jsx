import React from 'react';
import {connect} from 'react-redux';
import {
    Navbar,
    NavbarBrand,
    Badge
}from 'reactstrap';


const TheNavbar = ({totalCounters}) => {
        return(
            <div style={{direction:"ltr"}}>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Basket</NavbarBrand>
                    <Badge color="primary" pill className="m-2">
                        {totalCounters}
                    </Badge>
                </Navbar>
            </div>
        )
    }

export default connect(state => {
    return{
        totalCounters: state.filter(c => c.value > 0).length
    }
})(TheNavbar);