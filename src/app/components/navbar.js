import React, { Fragment } from 'react'
import { Navbar } from 'reactstrap'

const Mybar = ({ setKeyword }) => {
    //set input event
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <Fragment>
            <Navbar
                className='navbar-transparent'
                color='light'
                light
                expand='md'
                fixed='top'
            >
                <div className='mx-auto d-block text-center bg-light'>
                    <input
                        onChange={handleChange}
                        className='search form-control form-control-sm'
                        type='text'
                        placeholder='Search Products'
                    />
                </div>
            </Navbar>
        </Fragment>
    )
}

export default Mybar
