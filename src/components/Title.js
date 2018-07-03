import React from 'react';

const Title = ( {todoCount, customPropsObj, customPropsArr} ) => {
    //Modifying props - by changing the child objs
    customPropsObj.age += 1;
    console.log('updated props customPropsObj age : ', customPropsObj);
    customPropsArr.push(4);
    console.log('updated props customPropsArr added new element', customPropsArr);
    return (
        <div>
            <div>
                <h1>Simple React To-Do ( Current Todos : {todoCount} )</h1>
            </div>
        </div>
    );
}

export default Title;