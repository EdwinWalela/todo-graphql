
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UpdateTodoInput {
    id: string;
    title?: Nullable<string>;
    description?: Nullable<string>;
    isComplete?: Nullable<boolean>;
}

export class CreateTodoInput {
    title: string;
    description: string;
}

export class Todo {
    id: string;
    title: string;
    description?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    isComplete?: Nullable<boolean>;
}

export abstract class IQuery {
    abstract todo(id: string): Nullable<Todo> | Promise<Nullable<Todo>>;

    abstract todos(): Nullable<Nullable<Todo>[]> | Promise<Nullable<Nullable<Todo>[]>>;
}

export abstract class IMutation {
    abstract updateTodo(input: UpdateTodoInput): Nullable<Todo> | Promise<Nullable<Todo>>;

    abstract deleteTodo(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createTodo(input: CreateTodoInput): Nullable<string> | Promise<Nullable<string>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
