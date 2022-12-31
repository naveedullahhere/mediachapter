
import React, { useState } from 'react';
import { AutoComplete } from 'antd';

export const SuggestProjects = ({ projects, setProjectOuterId }) => {



    var labels = projects.map((item) => {
        const obj = {};
        var arr = item.projects.name
        for (let i = 0; i < arr.length; i++) {
            obj["value"] = `${item.projects.name}|${item.projects.id}`;
        };
        return obj;
    })


    // const options = [
    //     { value: 'Burns Bay Road' },
    //     { value: 'Downing Street' },
    //     { value: 'Wall Street' },
    // ];

    // console.log(labels, options);


    const [value, setValue] = useState('');
    return (
        <div>
            <div className='autoComplete'>
                {/* <div>
                    <Autocomplete

                        // Items is the list of suggestions 
                        // displayed while the user type
                        items={labels}

                        // To handle the case that when
                        // the user type, suggested 
                        // values should be independent
                        // of upper or lower case 
                        shouldItemRender={(item, value
                        ) => item.label.toLowerCase()
                            .indexOf(value.toLowerCase()) > -1}
                        getItemValue={item => { setProjectOuterId(item.label.split("|")[1]); return item.label.split("|")[0]; }}
                        renderItem={(item, isHighlighted) =>

                            // Styling to highlight selected item
                            <div style={{
                                background: isHighlighted ?
                                    'var(--primary)' : 'white',
                                color: isHighlighted ?
                                    'var(--white)' : 'black',
                                padding: "12px"
                            }}
                                key={item.id}>
                                {item.label.split("|")[0]}
                            </div>
                        }
                        value={value}

                        // The onChange event watches for
                        // changes in an input field
                        onChange={e => setValue(e.target.value)}

                        // To set the state variable to value
                        // selected from dropdown
                        onSelect={(val) => setValue(val)}

                        // Added style in Autocomplete component
                        inputProps={{
                            placeholder: 'Select Project'
                        }}
                    />
                </div> */}



                <AutoComplete
                    style={{ width: "100%", borderRadius: "0px" }}
                    options={labels}
                    placeholder="Search Projects"
                    filterOption={(inputValue, option) => {
                        return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
                    }
                    }
                />

            </div>
        </div>
    )
}