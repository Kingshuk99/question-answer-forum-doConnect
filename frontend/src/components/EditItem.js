import React, { useState } from "react"
import headers from './headers.json'

const EditItem = ({initialValue, rerender, updateUrl}) => {
  const [button, setButton] = useState(null);

  const onSubmit = async(data) => {
    if(button==='submit' && data && data.length>0) {
        const response = await fetch(updateUrl,{
            credentials: 'include',
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({statement: data})
        });
        const isStatusCorrect = response.ok;
    }
    rerender();
}
  return (
    <>
      <form className="row g-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e.target[0].value);
      }}
      >
        <input type="text" className="form-control" id="inputAnswer" defaultValue={initialValue}/>
        <div className="col-auto">
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group me-2" role="group" aria-label="First group">
                <button type="submit" className="btn btn-success" name="submit" 
                onClick={()=>setButton('submit')}>Submit</button>
                </div>
                <div className="btn-group me-2" role="group" aria-label="Second group">
                <button type="submit" className="btn btn-danger" name="cancel" 
                onClick={()=>setButton('cancel')}>Cancel</button>
                </div>
            </div>
        </div>
    </form>
    </>
  )
};

export default EditItem;
