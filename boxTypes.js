// Define box types - central configuration for all box types
const boxTypes = {
    'A': {
        function_name: 'Box A',
        description: 'Single input box',
        parameters: [
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
        function_name: 'Box B',
        description: 'Two input box',
        parameters: [
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
        function_name: 'Box C',
        description: 'Three input box',
        parameters: [
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
        function_name: 'Box D',
        description: 'Four input box',
        parameters: [
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
