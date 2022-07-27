import React, { useEffect } from 'react';

const Component = ({ getCompute }) => {

    useEffect(() => {
        console.log('render ComponentUseCallBack');
    }, [getCompute])

    return (
        <div className="menu-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            useCallback {getCompute(42)}
        </div>
    )
}

export default Component;