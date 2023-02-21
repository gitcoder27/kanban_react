
/**
 * 
 * @param {id: string, taskName: string, taskGroup: string} task 
 * @returns 
 */
export const addTask = (task) => {
    return { type: "ADD-TASK", paylaod: task }
}


/**
 * 
 * @param {id:string, movement: 1/-1 } task 
 * @returns 
 */
export const moveTask = (task) => {
    return { type: "MOVE-TASK", paylaod: task }
}

/**
 * 
 * @param {string} taskId
 * @returns 
 */

export const deleteTask = (taskId) => {
    return { type: "DELETE-TASK", paylaod: taskId }
}


