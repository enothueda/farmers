import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component';

import { setInputSearch } from '../../redux/records/records.actions';
import { selectInputSearch } from '../../redux/records/records.selectors';

import './input-search-list.styles.scss';

const InputSearchList = ({ list, inputLabel, name, reference, setInput, input }) => {
    const [search, setSearch] = useState({
        [name]: '',
        found: ''
    });

    useEffect(() => {
        setSearch({...search, [name]: input[name]})
    }, [input])

    const setName = (org) => {        
        setSearch({[name]: org, found: ''})
        setInput({ [name]: org })
    }
    
    const searchName = event => {
        const inputSearch = event.target.value;
        if(list) {
            const foundName = list
                .filter(name => name.toLowerCase().includes(inputSearch.toLowerCase()))
            setSearch({found: foundName, [name]: inputSearch})
            setInput({ [name]: inputSearch })
        }         
    }

    console.log('search list', search.found);

    return (
        <div>
            <FormInput 
                type='text'
                name={name}
                placeholder={reference}
                value={search[name]}
                label={inputLabel}
                onChange={searchName}
                autoComplete='off'
            />

            <div className='list-display'>
            {
                search[name]
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

const mapStateToProps = state => ({
    input: selectInputSearch(state)
})

const mapDispatchToProps = dispatch => ({
    setInput: input => dispatch(setInputSearch(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputSearchList);