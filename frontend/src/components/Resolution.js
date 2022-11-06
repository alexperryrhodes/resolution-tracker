import React from 'react';

function Resolution({ resolution }) {
    return (
        <tr>
        <td>{ resolution.name } </td>
        <td>{ resolution.goalCount } </td>
        <td>{ resolution.color }</td>
        <td>{ resolution.records }</td>
    </tr> 
    );
    
}

export default Resolution;