import React from 'react';

function Form() {
    return (
        <div>
            <form>
                <label>Title</label>
                <input />
                <label>Body</label>
                <textarea></textarea>
                <label>Publish</label>
                <input type= 'Checkbox'/>
                <button type='button'>Done</button>
                <button type='button'>Cancel</button>
            </form>
        </div>
    )
}

export default Form;