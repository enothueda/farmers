import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import './input-search-list.styles.scss';

const InputSearchList = ({ list, inputLabel, name, reference }) => {
    const [search, setSearch] = useState({
        [name]: '',
        found: ''
    });

    const setName = (org) => {        
        setSearch({[name]: org, found: ''})
    }
    
    const searchName = event => {
        const search = event.target.value;
        if(list) {
            const foundName = list
                .filter(name => 
                    search
                    ? name.toLowerCase().includes(search.toLowerCase())
                    : null)
            setSearch({found: foundName, [name]: search})
        }         
    }

    console.log('search list', search);

    return (
        <div>
            <FormInput 
            type='text'
            name={search[name]}
            placeholder={reference}
            value={search[name]}
            label={inputLabel}
            onChange={searchName}
            autoComplete='off'
            />

            <div className='list-display'>
            {
                search.found 
                ? search.found
                    .filter((org, idx) => idx < 10)
                    .map((org, idx) => 
                        <div key={idx} onClick={() => setName(org)}>{org}</div> )
                : null
            }
            </div>
        </div>
    )
}

export default InputSearchList;