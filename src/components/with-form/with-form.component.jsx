import React, { useState } from 'react';

import './with-form.styles.scss';

const WithForm = WrappedComponent => {
    const FormShow = ({title, ...props}) => {
        const [hide, setHide] = useState(true)

        return (
            <div className='form-show'>
                <h3 className='title' onClick={() => setHide(!hide)}>{title} {!hide ? '(-)' : '(+)'}</h3>
                {
                    !hide && <WrappedComponent { ...props }/>
                }
            </div>
        )

    }

    return FormShow

};

export default WithForm;