#  Flugo - Sistema de Gestão de Colaboradores

Sistema completo de cadastro e gestão de funcionários com interface multi-step, desenvolvido com **Next.js**, **TypeScript** e **Material UI**.

## Funcionalidades

- 📋 **Listagem de Colaboradores**: Visualização em tabela com avatares e status
- ➕ **Cadastro Multi-Step**: Formulário dividido em etapas com validação
- 📊 **Barra de Progresso**: Indicador visual do progresso do cadastro
- ✅ **Validação Completa**: Verificação de campos obrigatórios e formato de email
- 💾 **Persistência Local**: Dados salvos no localStorage do navegador
- 🎨 **Interface Moderna**: Design responsivo e intuitivo

## Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Material UI** - Biblioteca de componentes
- **localStorage** - Persistência de dados local

## Como Executar

### Instalação

1. **Clone o repositório**
\`\`\`bash
git clone [URL_DO_SEU_REPOSITORIO]
cd flugo-employee-management
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
\`\`\`

3. **Execute o projeto**
\`\`\`bash
npm run dev
\`\`\`

4. **Acesse no navegador**
\`\`\`
http://localhost:3000
\`\`\`

## 📱 Como Usar

1. **Visualizar Colaboradores**: A tela principal mostra todos os funcionários cadastrados
2. **Adicionar Novo Colaborador**: Clique no botão "Novo Colaborador"
3. **Preencher Informações Básicas**: Nome, email e status ativo/inativo
4. **Selecionar Departamento**: Escolha o departamento na segunda etapa
5. **Finalizar Cadastro**: O funcionário aparecerá imediatamente na lista

## Funcionalidades Implementadas

- ✅ Interface fiel ao design fornecido
- ✅ Formulário multi-step funcional
- ✅ Validação de campos obrigatórios
- ✅ Validação de formato de email
- ✅ Persistência de dados local
- ✅ Atualização automática da lista
- ✅ Design responsivo
- ✅ Feedback visual de progresso

## Estrutura do Projeto

\`\`\`
├── app/
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página inicial
├── components/
│   └── employee-registration-modal.tsx  # Modal de cadastro
├── lib/
│   ├── local-storage.ts    # Serviço de persistência
│   ├── theme.ts           # Tema Material UI
│   └── definitions.ts     # Tipos TypeScript
└── package.json
\`\`\`

## Design System

- **Cor Principal**: Verde 
- **Tipografia**: Inter
- **Componentes**: Material UI customizados
- **Layout**: Responsivo e moderno

## Scripts Disponíveis

\`\`\`bash
npm run dev      # Executa em modo desenvolvimento
npm run build    # Gera build de produção
npm run start    # Executa build de produção
npm run lint     # Executa linter
\`\`\`

## Dados de Exemplo

O sistema vem com alguns funcionários de exemplo para demonstração. Os dados são persistidos no localStorage do navegador.

## Deploy

O projeto está pronto para deploy no **Vercel**, **Netlify** ou qualquer plataforma que suporte Next.js.

Para deploy no Vercel:
1. Conecte seu repositório GitHub
2. O deploy será automático (sem variáveis de ambiente necessárias)

---

**Desenvolvido para demonstração de habilidades em React/Next.js + TypeScript + Material UI**
