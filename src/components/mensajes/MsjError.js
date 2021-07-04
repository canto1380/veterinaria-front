import React from 'react';
import {Container} from 'react-bootstrap'

const MsjError = () => {
    return (
        <div className="row mt-4">
        <div className="col-12 alert alert-danger">
            <h5 className="text-center">ERROR!</h5>
            {/* <p className="text-center">{props.text1} <strong>{props.text2}</strong></p> */}
        </div> 
        </div>
    );
};

export default MsjError;