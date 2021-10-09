import React from 'react'

const SpinnnerOverlay = () => (
    <div className='spinner-overlay'></div>
)

const SpinnerContainer = () => (
    <div classsName='spinner-container'></div>
)
const Loader = (WrappedComponent) => {
    const spinner = ({isLoading,...otherProps}) => {
        return (
            isLoading ? 
            <SpinnnerOverlay>
                <SpinnerContainer></SpinnerContainer>
            </SpinnnerOverlay> 
            :
            <WrappedComponent {...otherProps}></WrappedComponent>
        )
    }

    return spinner
}

export default Loader;