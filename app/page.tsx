"use client"

import { useState, useEffect } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import {
  Container,
  Paper, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Avatar,
  Chip,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material"

import { localStorageService } from "@/lib/local-storage"
import type { Employee } from "@/lib/definitions"
import EmployeeRegistrationModal from "@/components/employee-registration-modal"

const theme = createTheme({
  palette: {
    primary: {
      main: "#00D97E", 
    },
    secondary: {
      main: "#6c757d",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
  },
})

export default function HomePage() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchEmployees = async () => {
    try {
      const employeeList = localStorageService.getEmployees()
      setEmployees(employeeList)
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  const handleEmployeeAdded = () => {
    fetchEmployees()
    setModalOpen(false)
  }

  const getStatusText = (active: boolean) => {
    return active ? "Ativo" : "Inativo"
  }

  const getStatusChipStyles = (active: boolean) => {
    if (active) {
      return {
        backgroundColor: "#DCFCE7",
        color: "#16A34A", 
        fontWeight: 600,
        border: "none",
      }
    } else {
      return {
        backgroundColor: "#FEE2E2", 
        color: "#DC2626", 
        fontWeight: 600,
        border: "none",
      }
    }
  }

  // Função para gerar cores de avatar baseadas no nome
  const getAvatarColor = (name: string) => {
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#96CEB4",
      "#FFEAA7",
      "#DDA0DD",
      "#98D8C8",
      "#F7DC6F",
      "#BB8FCE",
      "#85C1E9",
    ]
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ bgcolor: "white", color: "black", boxShadow: 1 }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                bgcolor: "#00D97E",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1,
              }}
            >
              <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                F
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Flugo
            </Typography>
          </Box>
          <IconButton>
            <Avatar
              src="/user-avatar.png"
              sx={{
                width: 32,
                height: 32,
                border: "2px solid #e9ecef",
              }}
            >
              U
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
            Colaboradores
          </Typography>
          <Button
            variant="contained"
            onClick={() => setModalOpen(true)}
            sx={{
              bgcolor: "#00D97E",
              "&:hover": { bgcolor: "#00C46A" },
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Novo Colaborador
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 1 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#f8f9fa" }}>
                <TableCell sx={{ fontWeight: "bold", color: "#6c757d" }}>Nome</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#6c757d" }}>Email</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#6c757d" }}>Departamento</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#6c757d" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    Carregando...
                  </TableCell>
                </TableRow>
              ) : employees.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    Nenhum funcionário cadastrado
                  </TableCell>
                </TableRow>
              ) : (
                employees.map((employee) => (
                  <TableRow key={employee.id} hover>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Avatar
                          src={employee.avatar}
                          sx={{
                            width: 40,
                            height: 40,
                            bgcolor: getAvatarColor(employee.name),
                          }}
                        >
                          {employee.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {employee.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {employee.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{employee.department}</Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={getStatusText(employee.active)}
                        size="small"
                        sx={getStatusChipStyles(employee.active)}
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Botão para limpar dados (apenas para desenvolvimento) */}
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              localStorageService.clearAll()
              fetchEmployees()
            }}
            sx={{ color: "#6c757d", borderColor: "#6c757d" }}
          >
            Resetar Dados de Exemplo
          </Button>
        </Box>
      </Container>

      <EmployeeRegistrationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onEmployeeAdded={handleEmployeeAdded}
      />
    </ThemeProvider>
  )
}
