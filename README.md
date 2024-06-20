## Queries

### All Todos

```graphql
{
  todos{
    title,
    description,
    isComplete,
    createdAt
  }
}
```

## Mutations

### Updating Todo

```graphql
mutation updateTodo($input: UpdateTodoInput!){
 	updateTodo(input:$input){
      title
      ...
  }
}

<!-- Query Variables -->
{
  "input": {
    "id": "DEV1",
    "title": "Attempt to complete ticket DEV-1"
  }
}
```

### Delete Todo

```graphql
mutation deleteTodo($id:String!){
  deleteTodo(id:$id)
}
```

### Create Todo

```graphql
mutation createTodo($input:CreateTodoInput!){
  createTodo(input:$input)
}

<!-- Query variables -->

{
  "input": {
    "title": "New Todo 2",
    "description": "Created new todo item 2"
  }
}
```