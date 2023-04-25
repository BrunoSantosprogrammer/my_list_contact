import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      id: 1,
      notes: '',
      priority: enums.Priority.PRIORITY,
      status: enums.Status.FRIENDS,
      name: '',
      email: '',
      tel: '',
    },
  ],
}

const tasksSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((task) => task.id !== action.payload)
    },
    toEdit: (state, action: PayloadAction<Task>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)
      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    },
    register: (state, action: PayloadAction<Task>) => {
      const TaskExists = state.itens.find(
        (task) => task.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (TaskExists) {
        alert('Já existe um contato com este nome')
      } else {
        state.itens.push(action.payload)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; amigos: boolean }>
    ) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)
      if (indexTask >= 0) {
        state.itens[indexTask].status = action.payload.amigos
          ? enums.Status.FAMILY
          : enums.Status.WORK
      }
    },
  },
})

export const { remove, toEdit, register, changeStatus } = tasksSlice.actions
export default tasksSlice.reducer
