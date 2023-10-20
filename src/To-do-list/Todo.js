import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

const Todo = ({ toDo,  setUpdateData, deleteTask }) => {
  return(
    <>
      {toDo && toDo
     
      .map( (task) => {
        return(
          <div key={task.id}>
            <div className="col taskBg">
              <div >
                
                <span className="taskText">{task.title}</span>
              </div>
              <div className="iconsWrap">
               

                {task.status ? null : (
                  <span title="Edit"
                    onClick={ () => setUpdateData({ 
                      id: task.id, 
                      title: task.title, 
                     
                    }) }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                )}

                <span title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
                  <FontAwesomeIcon className="delete" icon={faTrashCan} />
                </span>
              </div>
            </div>
          </div>
        )
      })
      }  
    </>
  )
}

export default Todo;
