"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
  Alert,
  Breadcrumbs,
  Link,
} from "@mui/material"
import { Check as CheckIcon, Person as PersonIcon } from "@mui/icons-material"
import { localStorageService } from "../lib/local-storage"

interface EmployeeRegistrationModalProps {
  open: boolean
  onClose: () => void
  onEmployeeAdded: () => void
}

interface FormData {
  name: string
  email: string
  active: boolean
  department: string
}

const steps = ["Infos Básicas", "Infos Profissionais"]
const departments = ["Design", "TI", "Marketing", "Produto", "Vendas", "RH"]

export default function EmployeeRegistrationModal({ open, onClose, onEmployeeAdded }: EmployeeRegistrationModalProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    active: true,
    department: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleNext = () => {
    if (activeStep === 0) {
      if (!formData.name.trim() || !formData.email.trim()) {
        setError("Por favor, preencha todos os campos obrigatórios.")
        return
      }
      if (!isValidEmail(formData.email)) {
        setError("Por favor, insira um email válido.")
        return
      }
    }
    setError("")
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSubmit = async () => {
    if (!formData.department) {
      setError("Por favor, selecione um departamento.")
      return
    }

    setLoading(true)
    setError("")

    try {
      localStorageService.addEmployee({
        name: formData.name,
        email: formData.email,
        active: formData.active,
        department: formData.department,
      })

      onEmployeeAdded()
      handleReset()
    } catch (error) {
      console.error("Erro ao cadastrar funcionário:", error)
      setError("Erro ao cadastrar funcionário. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setActiveStep(0)
    setFormData({
      name: "",
      email: "",
      active: true,
      department: "",
    })
    setError("")
    setLoading(false)
  }

  const handleClose = () => {
    handleReset()
    onClose()
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const getProgress = () => {
    return ((activeStep + 1) / steps.length) * 100
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2, minHeight: "600px" },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ display: "flex", height: "600px" }}>
          {/* Sidebar */}
          <Box
            sx={{
              width: "300px",
              bgcolor: "#f8f9fa",
              p: 3,
              borderRight: "1px solid #e9ecef",
            }}
          >
            <Box sx={{ mb: 3 }}>
              <PersonIcon sx={{ color: "#6c757d", mb: 1 }} />
              <Breadcrumbs separator="›" sx={{ mb: 2 }}>
                <Link underline="hover" color="inherit" href="#">
                  Colaboradores
                </Link>
                <Typography color="text.primary">Cadastrar Colaborador</Typography>
              </Breadcrumbs>
            </Box>

            <LinearProgress
              variant="determinate"
              value={getProgress()}
              sx={{
                mb: 3,
                height: 6,
                borderRadius: 3,
                bgcolor: "#e9ecef",
                "& .MuiLinearProgress-bar": {
                  bgcolor: "#00D97E", 
                },
              }}
            />
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {Math.round(getProgress())}%
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {steps.map((label, index) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 1,
                    borderRadius: 1,
                    bgcolor: index === activeStep ? "#e3f2fd" : "transparent",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: index < activeStep ? "#00D97E" : index === activeStep ? "#00D97E" : "#e9ecef",
                      color: index <= activeStep ? "white" : "#6c757d",
                    }}
                  >
                    {index < activeStep ? (
                      <CheckIcon sx={{ fontSize: 16 }} />
                    ) : (
                      <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                        {index + 1}
                      </Typography>
                    )}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: index === activeStep ? "bold" : "normal",
                      color: index <= activeStep ? "#000" : "#6c757d",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Main Content */}
          <Box sx={{ flex: 1, p: 4 }}>
            <Typography variant="h5" sx={{ mb: 4, color: "#6c757d", fontWeight: 500 }}>
              {steps[activeStep]}
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            {activeStep === 0 && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                  label="Título"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  fullWidth
                  variant="outlined"
                  placeholder="João da Silva"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#00D97E", 
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#00D97E", 
                    },
                  }}
                />
                <TextField
                  label="E-mail"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  fullWidth
                  variant="outlined"
                  placeholder="e.g. john@gmail.com"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#00D97E", 
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#00D97E", 
                    },
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.active}
                      onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: "#00D97E", 
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                          backgroundColor: "#00D97E", 
                        },
                      }}
                    />
                  }
                  label="Ativar ao criar"
                />
              </Box>
            )}

            {activeStep === 1 && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <FormControl fullWidth>
                  <InputLabel
                    sx={{
                      "&.Mui-focused": {
                        color: "#00D97E", 
                      },
                    }}
                  >
                    Selecione um departamento
                  </InputLabel>
                  <Select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    label="Selecione um departamento"
                    sx={{
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#00D97E", 
                      },
                    }}
                  >
                    {departments.map((dept) => (
                      <MenuItem key={dept} value={dept}>
                        {dept}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
              <Button
                onClick={activeStep === 0 ? handleClose : handleBack}
                sx={{ textTransform: "none", color: "#6c757d" }}
              >
                {activeStep === 0 ? "Cancelar" : "Voltar"}
              </Button>
              <Button
                variant="contained"
                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                disabled={loading}
                sx={{
                  bgcolor: "#00D97E", 
                  "&:hover": { bgcolor: "#00C46A" }, 
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                {loading ? "Salvando..." : activeStep === steps.length - 1 ? "Concluir" : "Próximo"}
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
