import { useEffect, useState } from "react";
import { Link, useHistory,useLocation,useParams } from "react-router-dom";
import { taskService } from "../Services/task.services";

const TaskEditPage = () => {
    const location = useLocation();
    const history = useHistory();
    const params = useParams()

    const [description,setDecription] = useState(null);

    const [task,setTask] : any = useState({})
    let taskId = location.pathname.split('/')[3];

    useEffect(()=>{
        console.log("task id --",taskId)
        getListById();
    },[])

    const getListById = () => {
        taskService.getById(taskId).then(res=>{
            console.log("tas====",res)
            setTask(res)
        })
    }

    const handleSubmit = () => {
        const data : any = {
            description : description            
        }
        taskService.update(task._id,data).then(res=>{
            console.log("updated --",res)
        })
    }
    return (
        <form  >
            <div className="form-row">                
                <div className="form-group col-5">
                    <label>First Name</label>
                    <input name="firstName" 
                        defaultValue = {task.description || ""} 
                        type="text" 
                        onChange={(e : any)=>setDecription(e?.target?.value)}
                    />
                </div>
            </div>
            
            <div className="form-group">
                <button type="button" onClick={()=>handleSubmit()}>Save</button>
                <Link to={'..'} className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}

export default TaskEditPage;