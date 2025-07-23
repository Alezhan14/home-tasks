import { create } from 'zustand'

export const useToDosStore = create((set) => ({
    toDos: [
        {
            toDoText: 'Lorem Ipsum 1',
            completed: false,
            id: '1'
        },
        {
            toDoText: 'Lorem Ipsum 2',
            completed: false,
            id: '2'
        },
        {
            toDoText: 'Lorem Ipsum 3',
            completed: false,
            id: '3'
        }
    ],

    addToDos: (values) => {
        set((state) => ({
            toDos: [values, ...state.toDos]
        }))
    },
    deleteTodos: (key) => {
        set((state) => ({
            toDos: state.toDos.filter((item) => item.id !== key)
        }))
    },
    completeTodos(key) {
        set((state) => ({
            toDos: state.toDos.map((item) => item.id == key ? {...item, completed: !item.completed} : item)
        }))
    }
}))