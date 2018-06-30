import React from 'react';

const Title = ( {todoCount} ) => {
    return (
        <div>
            <div>
                <h1>Simple React To-Do ( Current Todos : {todoCount} )</h1>
            </div>
        </div>
    );
}

export default Title;