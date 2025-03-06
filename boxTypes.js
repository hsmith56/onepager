// Define box types - central configuration for all box types
const boxTypes = {
    'A': {
        name: 'Box A',
        description: 'Single input box',
        inputs: [
            { 
                id: 'input1', 
                label: 'Value', 
                placeholder: 'Enter value',
                required: true,
                validation: (value) => value.trim().length !== 0 ? null : 'This field cannot be blank',
                defaultValue: ''
            }
        ]
    },
    'B': {
        name: 'Box B',
        description: 'Two input box',
        inputs: [
            { 
                id: 'input1', 
                label: 'Name', 
                placeholder: 'Enter name',
                required: false,
                defaultValue: ''
            },
            { 
                id: 'input2', 
                label: 'Value', 
                placeholder: 'Enter value',
                required: false,
                defaultValue: ''
            }
        ]
    },
    'C': {
        name: 'Box C',
        description: 'Three input box',
        inputs: [
            { 
                id: 'input1', 
                label: 'X', 
                placeholder: 'Enter X value',
                required: false,
                defaultValue: ''
            },
            { 
                id: 'input2', 
                label: 'Y', 
                placeholder: 'Enter Y value',
                required: false,
                defaultValue: ''
            },
            { 
                id: 'input3', 
                label: 'Z', 
                placeholder: 'Enter Z value',
                required: false,
                defaultValue: 'default_val'
            }
        ]
    },
    'D': {
        name: 'Box D',
        description: 'Four input box',
        inputs: [
            { 
                id: 'name', 
                label: 'Name', 
                placeholder: 'Enter name',
                required: false,
                defaultValue: ''
            },
            { 
                id: 'age', 
                label: 'Age', 
                placeholder: 'Enter age',
                required: false,
                validation: (value) => {
                    if (value === '') return null;
                    const age = parseInt(value);
                    return isNaN(age) || age < 0 ? 'Age must be a positive number' : null;
                },
                defaultValue: ''
            },
            { 
                id: 'city', 
                label: 'City', 
                placeholder: 'Enter city',
                required: false,
                defaultValue: ''
            },
            { 
                id: 'state', 
                label: 'State', 
                placeholder: 'Enter state',
                required: false,
                defaultValue: ''
            }
        ]
    }
};
