import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { TodoService } from "./todo.service";
import { CreateTodoInput, UpdateTodoInput } from "src/graphql";


@Resolver('Todo')
export class TodoResolver {
  constructor(
    private todoService: TodoService
  ){}

  @Query('todo')
  todo(@Args('id') id:string){
    return this.todoService.findById(id);
  }
  @Query('todos')
  allTodos(){
    return this.todoService.all();
  }
  @Mutation('updateTodo')
  updateTodo(@Args("input") args: UpdateTodoInput){
    return this.todoService.update(args);
  }
  @Mutation('deleteTodo')
  deleteTodo(@Args('id') id:string){
    return this.todoService.delete(id);
  }
  @Mutation('createTodo')
  createTodo(@Args("input") args: CreateTodoInput){
    return this.todoService.create(args);
  }
}