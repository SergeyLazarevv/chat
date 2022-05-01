export interface User {
    id: number,
    clearStorage?: boolean
    department?: string
    dept?: string
    email?: string
    position?: string
    role: Array<Role['name']>
    sector?: string
    username?: string,
    online?: boolean
}

export interface Role {
    name: string,
    id: number,
    description: string
}