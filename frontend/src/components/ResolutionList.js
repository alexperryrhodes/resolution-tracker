import React from 'react';
import Resolution from './Resolution'

function ResolutionList( {resolutions}) {
    return (
        <table id="resolutions">
        <thead>
            <tr>
                <th>Name</th>
                <th>Goal Count</th>
                <th>Color</th>
                <th>Records</th>
            </tr>
        </thead>
        <tbody>
            {resolutions.map((resolution, i ) => 
                <Resolution 
                resolution={resolution} 
                key={i} />)}
        </tbody>
    </table>
    );
    
}


export default ResolutionList;