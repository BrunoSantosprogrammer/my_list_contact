import * as enums from '../utils/enums/Task'

class Task {
  name: string
  email: string
  tel: string
  priority: enums.Priority
  status: enums.Status
  notes: string
  id: number

  constructor(
    name: string,
    email: string,
    tel: string,
    priority: enums.Priority,
    status: enums.Status,
    notes: string,
    id: number
  ) {
    this.name = name
    this.email = email
    this.tel = tel
    this.priority = priority
    this.status = status
    this.notes = notes
    this.id = id
  }
}

export default Task
