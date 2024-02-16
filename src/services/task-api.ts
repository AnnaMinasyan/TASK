import { ITaskDTO } from "@/interfaces/interfaces"
import { AddTaskFormValue } from "@/validations/taskValidation"
import axios from "axios"
import { Model, createServer } from "miragejs"

if (window.server) {
  server.shutdown()
}

window.server = createServer({
  models: {
    Tasks: Model,
  },
  seeds(server) {
    server.create('task', {
      title: 'Task1',
      info:
        'Praesent congue erat at massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque commodo eros a enim. Nunc interdum lacus sit amet orci.',
        impotant:true
    });
  },
  routes() {
    this.namespace = 'api/tasks';
    this.get('/', (schema, request) => {
      return schema.tasks.all();
    });
    this.get('/:id', (schema, request) => {
      let id = request.params.id;
      return schema.tasks.find(id);
    });
    this.post('/', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.tasks.create(attrs);
    });
    this.put('/:id', (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let task = schema.tasks.find(id);
      return task.update(newAttrs);
    });
    this.delete('/:id', (schema, request) => {
      let id = request.params.id;
      return schema.tasks.find(id).destroy();
    });
  },
});
export const taskApi = {

    async getTasks():Promise<ITaskDTO[]> {        
        const response= await axios.get(`/api/tasks`)        
        return response.data.tasks
    },
    async postTask(body:AddTaskFormValue):Promise<ITaskDTO> {                
        const response= await axios.post(`/api/tasks`,body)
        return response.data
    },
    async deleteTaskById(id:number) {                
        const response= await axios.delete(`/api/tasks/${id}`)
        return response.data
    },
    async putTask(id:number,body:AddTaskFormValue):Promise<ITaskDTO> {                
        const response= await axios.put(`/api/tasks/${id}`,body)
        return response.data
    },
}