import { useEffect, useState } from "react";
import { Link, useHistory,useLocation,useParams } from "react-router-dom";
import { taskService } from "../services/task.services";
import { BehaviorSubject } from 'rxjs';

const TaskAddPage = () => {
    const history = useHistory();
    const [description,setDecription] = useState(null);
    const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || '{}'));

    const handleSubmit = () => {
        const data : any ={
            "userId" : currentUserSubject.value._id,
            "description" :description
        }
            
        taskService.create(data).then(res=>{
            console.log("task create ---",res)
            if(res._id){
                history.push('/task');
            }
        })        
    }
    return (
        <form  >
            <h1>Add Task</h1>
            <div className="form-row">                
                <div className="form-group col-5">
                    <label>Description</label>
                    <input name="firstName" type="text" onChange={(e : any)=>setDecription(e?.target?.value)}/>
                </div>
            </div>
            
            <div className="form-group">
                <button type="button" onClick={()=>handleSubmit()}>Save</button>
                <Link to={'..'} className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}

export default TaskAddPage;