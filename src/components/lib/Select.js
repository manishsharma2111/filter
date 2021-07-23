// import React from 'react';
// import {
//     FormControl,
//     FormHelperText,
//     InputLabel,
//     MenuItem,
//     Select as MuiSelect,
// } from '@material-ui/core';

// export default function selectLaunches(props) {
//     const { name, label, value, onChange, options, error = null } = props;
//     return (
//         <FormControl variant='outlined' {...(error && { error: true })}>
//             <InputLabel>{label}</InputLabel>
//             <MuiSelect
//                 label={label}
//                 name={name}
//                 value={value}
//                 onChange={onChange}
//             >
//                 <MenuItem value=''>None</MenuItem>

//                 {options.map((item) => (
//                     <MenuItem key={item.id} value={item.id}>
//                         {item.title}
//                     </MenuItem>
//                 ))}
//             </MuiSelect>
//             {error && <FormHelperText>{error}</FormHelperText>}
//         </FormControl>
//     );
// }
