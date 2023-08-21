import React from 'react';

function List() {
    const student = [{id:1,name:'A'},{id:2,name:'B'},{id:3,name:'C'}];
    return(
        <>
        <ul>
            {student.map((student) => (
                <li key={student.id}>{student.name}</li>
            ))}
        </ul>
        </>
    )
}

export default List;