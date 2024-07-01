# TODO GraphQL API

A GraphQL NEST JS API

## Local Setup

```
yarn install && yarn start:dev
```

## Queries

### All Todos

```graphql
query todos {
  todos {
    title
    description,
  }
}
```

### Todo by ID
```graphql
query todo($id:String!){
  todo(id:$id){
    title
    description,
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