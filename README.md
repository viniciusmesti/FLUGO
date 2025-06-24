#  Flugo - Sistema de Gestão de Colaboradores

Sistema completo de cadastro e gestão de funcionários com interface multi-step, desenvolvido com **Next.js**, **TypeScript** e **Material UI**.

## **DEMO ONLINE**
** Acesse o projeto:** [https://flugo-gray.vercel.app/](https://flugo-gray.vercel.app/)

*Deploy realizado no Vercel - Pronto para uso e avaliação!*

---

## Funcionalidades

- 📋 **Listagem de Colaboradores**: Visualização em tabela com avatares e status
- ➕ **Cadastro Multi-Step**: Formulário dividido em etapas com validação
- 📊 **Barra de Progresso**: Indicador visual do progresso do cadastro
- ✅ **Validação Completa**: Verificação de campos obrigatórios e formato de email
- 💾 **Persistência Local**: Dados salvos no localStorage do navegador
- 🎨 **Interface Moderna**: Design responsivo e intuitivo
- 👤 **Usuários de Exemplo**: Dados pré-carregados para demonstração

## Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Material UI** - Biblioteca de componentes
- **localStorage** - Persistência de dados local
- **Vercel** - Plataforma de deploy

## Como Executar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone o repositório**
\`\`\`bash
git clone https://github.com/seu-usuario/flugo-employee-management
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

## Deploy no Vercel

O projeto está hospedado no **Vercel** e pode ser acessado através do link:

** [https://flugo-gray.vercel.app/](https://flugo-gray.vercel.app/)**

### Informações do Deploy:
- ✅ **Status**: Production (Ready)
- ⚡ **Build Time**: ~3 segundos
- 🚀 **Deploy automático**: Conectado ao GitHub
- 📱 **Responsivo**: Funciona em desktop e mobile

## Como Usar

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
- ✅ Dados de exemplo pré-carregados
- ✅ Status ativo/inativo com cores diferenciadas

## Estrutura do Projeto

\`\`\`
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   └── employee-registration-modal.tsx  # Modal de cadastro
├── lib/
│   ├── local-storage.ts    # Serviço de persistência
│   └── definitions.ts      # Tipos TypeScript
├── public/
│   └── user-avatar.png     # Avatar do usuário
└── package.json
\`\`\`

## Design System

- **Cor Principal**: Verde vibrante (#00D97E)
- **Tipografia**: Inter
- **Componentes**: Material UI customizados
- **Layout**: Responsivo e moderno
- **Status**: Chips coloridos (verde para ativo, vermelho para inativo)

## Scripts Disponíveis

\`\`\`bash
npm run dev      # Executa em modo desenvolvimento
npm run build    # Gera build de produção
npm run start    # Executa build de produção
npm run lint     # Executa linter
\`\`\`

## Dados de Exemplo

O sistema vem com funcionários de exemplo para demonstração:
- **Fernanda Torres** - Design - Ativo
- **Joana D'Arc** - TI - Ativo  
- **Mari Froes** - Marketing - Ativo
- **Clara Costa** - Produto - Inativo

Os dados são persistidos no localStorage do navegador.

## Deploy e Produção

### Vercel (Atual)
- **URL**: [https://flugo-gray.vercel.app/](https://flugo-gray.vercel.app/)
- **Status**: Online
- **Build**: Automático via GitHub
- **Performance**: Otimizado para produção

### Para fazer seu próprio deploy:
1. Conecte seu repositório GitHub ao Vercel
2. Configure as seguintes opções:
   - **Build Command**: \`next build\` (padrão)
   - **Output Directory**: \`Next.js default\` (padrão)
   - **Install Command**: \`npm install\` (padrão)
   - **Environment Variables**: Nenhuma necessária
3. Deploy será automático!

## Vantagens da Implementação

- **Sem dependências externas**: Funciona sem Firebase ou APIs
- **Deploy simples**: Sem variáveis de ambiente
- **Demonstração imediata**: Clone → Install → Run → Funciona!
- **Código limpo**: TypeScript, organizado, comentado
- **Performance**: Build otimizado (189 kB total)

---

** Desenvolvido para demonstração de habilidades em React/Next.js + TypeScript + Material UI**

** Pronto para avaliação técnica e uso em produção!**
