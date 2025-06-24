export interface Employee {
  id: string
  name: string
  email: string
  department: string
  active: boolean
  createdAt: Date
}

const STORAGE_KEY = "flugo_employees"

// Dados de exemplo
const sampleEmployees: Employee[] = [
  {
    id: "1",
    name: "Fernanda Torres",
    email: "fernandatorres@flugo.com",
    department: "Design",
    active: true,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "Joana D'Arc",
    email: "joanadarc@flugo.com",
    department: "TI",
    active: true,
    createdAt: new Date("2024-01-20"),
  },
  {
    id: "3",
    name: "Mari Froes",
    email: "marifroes@flugo.com",
    department: "Marketing",
    active: true,
    createdAt: new Date("2024-02-01"),
  },
  {
    id: "4",
    name: "Clara Costa",
    email: "claracosta@flugo.com",
    department: "Produto",
    active: false,
    createdAt: new Date("2024-02-10"),
  },
]

// Interface para dados do localStorage
interface StoredEmployee {
  id: string
  name: string
  email: string
  department: string
  active: boolean
  createdAt: string 
}

export const localStorageService = {
  // Buscar todos os funcionários
  getEmployees: (): Employee[] => {
    if (typeof window === "undefined") return []

    try {
      const data = localStorage.getItem(STORAGE_KEY)

      // Se não há dados, inicializar com dados de exemplo
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleEmployees))
        return sampleEmployees
      }

      const employees: StoredEmployee[] = JSON.parse(data)
      return employees.map((emp: StoredEmployee) => ({
        ...emp,
        createdAt: new Date(emp.createdAt),
      }))
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error)
      // Em caso de erro, retornar dados de exemplo
      return sampleEmployees
    }
  },

  // Adicionar novo funcionário
  addEmployee: (employeeData: Omit<Employee, "id" | "createdAt">): Employee => {
    const employees = localStorageService.getEmployees()

    const newEmployee: Employee = {
      ...employeeData,
      id: Date.now().toString(),
      createdAt: new Date(),
    }

    const updatedEmployees = [...employees, newEmployee]

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEmployees))
      return newEmployee
    } catch (error) {
      console.error("Erro ao salvar funcionário:", error)
      throw error
    }
  },

  // Atualizar funcionário
  updateEmployee: (id: string, updates: Partial<Employee>): Employee | null => {
    const employees = localStorageService.getEmployees()
    const index = employees.findIndex((emp) => emp.id === id)

    if (index === -1) return null

    employees[index] = { ...employees[index], ...updates }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(employees))
      return employees[index]
    } catch (error) {
      console.error("Erro ao atualizar funcionário:", error)
      throw error
    }
  },

  // Remover funcionário
  removeEmployee: (id: string): boolean => {
    const employees = localStorageService.getEmployees()
    const filteredEmployees = employees.filter((emp) => emp.id !== id)

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredEmployees))
      return true
    } catch (error) {
      console.error("Erro ao remover funcionário:", error)
      return false
    }
  },

  // Limpar todos os dados (útil para desenvolvimento)
  clearAll: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      console.error("Erro ao limpar dados:", error)
    }
  },
}
