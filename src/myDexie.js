import dexie from 'dexie'

export const database = new dexie("myTodos")
database.version(2).stores({
    todo: '++id, todoText, completed'
})
