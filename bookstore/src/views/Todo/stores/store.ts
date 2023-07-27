import create from 'zustand'

type Todo = {
    id: number;
    text: string;
    done: boolean;
}

type TodoState = {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    countTasks: (state: TodoState) => number;
}

export const useStore = create<TodoState>((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo]})),
    countTasks: (state) => state.todos.filter(todo => !todo.done).length,
}))