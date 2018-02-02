// creates a single label and text input box

import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <textarea {...input} style={{ marginBottom: '5px' }} rows="30" cols="50" />
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
};