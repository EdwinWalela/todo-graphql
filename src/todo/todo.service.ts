import { Injectable } from "@nestjs/common";
import { CreateTodoInput, Todo, UpdateTodoInput } from "src/graphql";

let data:Todo[] = []

for (let index = 0; index < 10; index++) {
  let todo = new Todo();
  todo.title = `Complete ticket DEV-${index}`;
  todo.description = `Work on task ${index}`;
  todo.id = `DEV${index}`;
  todo.createdAt = new Date();
  todo.isComplete = index % 2 == 0;
  data.push(todo);
}

@Injectable()
export class TodoService{
  findById(id: string){
    return data.filter(t=>t.id==id)[0];
  }

  all(){
    return data;
  }

  update(input: UpdateTodoInput){
    let index = data.findIndex(t=>t.id==input.id);
    if(input.description){
      data[index].description = input.description;
    }
    if(input.title){
      data[index].title = input.title;
    }
    if(input.isComplete){
      data[index].isComplete = input.isComplete;
    }
    return data[index]
  }

  delete(id: string){
    let index = data.findIndex(t=>t.id==id);
    if(index !== -1){
      data = data.filter(t=>t.id !== id);
      return true
    }
    return false;
  }

  create(input: CreateTodoInput){
    let todo = new Todo();
    todo.title = input.title;
    todo.description = input.description;
    todo.isComplete = false;
    todo.createdAt = new Date();
    todo.id = `DEV${data.length}`;

    data.push(todo);
    return todo.id;
  }
}