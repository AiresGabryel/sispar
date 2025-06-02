# SISPAR - Sistema de Gestão de Despesas

O **SISPAR** é um sistema React moderno para controle e solicitação de reembolsos, permitindo que usuários insiram valores, datas, categorias e visualizem seus lançamentos em uma tabela organizada com resumos dinâmicos.

Foi desenvolvido com:
- React 19.1.0 ⚛️
- Vite ⚡
- SCSS Modules 🎨
- React Router DOM v7 🧭
- UUID para identificação única de itens 🆔
- Classnames para controle dinâmico de classes CSS 📌
- ESLint customizado para manter qualidade de código 🧼

---


## Desafio FINAL - Construção de Interface para o Projeto "SISPAR"
PROFESSORES: SAMUEL SILVÉRIO E KARYNNE MOREIRA
Data de início: 06/02/2025


## Objetivo
Neste desafio, começaremos pelo Front-end (toda a parte visual) e concluiremos no Back-End (responsável pelo recebimento, processamento e armazenamento dos dados) e a implementação fiel do design fornecido no Figma.


## Requisitos Técnicos

### 1. Tela de Login  
✅ **Funcionalidades:**  
🔹 Ao clicar em “ENTRAR”, redirecionar para **Reembolsos**.  
🔹 Rota configurada para `/reembolsos`.

### 2. Tela de Reembolsos  
✅ **Funcionalidades:**  
🔹 Conteúdo estático (lista pré-carregada).  
🔹 Card “Solicitar Reembolso” leva à **Solicitação de Reembolsos**.

### 3. Tela de Solicitação de Reembolsos  
✅ **Funcionalidades:**  
🔹 Inputs funcionais para nome, valor, data etc.  
🔹 Armazenar entradas em array-estado (simulação de “task list”).  
🔹 Botão “ENVIAR” dispara POST à API.

### 4. NavBar (Navegação)  
✅ **Funcionalidades:**  
🔹 Ícones linkam para cada tela (Home, Solicitação, Histórico, Gráficos).  
🔹 Menu hambúrguer abre/fecha a sidebar.  
🔹 Logout redireciona para **Login**.

### 5. Back-end (API Flask)  
✅ **Endpoints mínimos:**  
🔹 **POST** `/colaborador/login` – autenticação JWT.  
🔹 **GET/POST/PUT/DELETE** `/colaboradores` – CRUD de colaboradores.  
🔹 **GET/POST/PUT** `/reembolsos` – criar, listar, aprovar/rejeitar.  
🔹 **GET** `/reembolsos/historico?colaborador_id=…` – histórico filtrado.  
🔹 Documentação automática em `/apidocs/` via Flasgger.

---

## ⚙️ Lógica de Funcionamento

- Os dados preenchidos nos campos são armazenados no `localStorage`.
- Cada item adicionado recebe um `UUID` único.
- Ao excluir, uma modal de confirmação é exibida.
- O estado é controlado via React Hooks (`useState`, `useEffect`) para reatividade.
- A tabela e os resumos se atualizam automaticamente ao adicionar ou remover itens.

---

##  Estilização com SCSS Modules

O projeto usa **SCSS Modules** para escopo isolado por componente, evitando conflitos de classes e permitindo customização mais controlada.

Exemplo:
```scss
// boxDate.module.scss
.wrapper {
    display: flex;
  gap: 1rem;
}
```

```jsx
import styles from "./BoxDate.module.scss";
<div className={styles.wrapper}>...</div>;
```
- Cada componente tem seu próprio `.module.scss`, garantindo isolamento e organização do CSS.
- Utilização de variáveis, nesting e mixins para manter um estilo limpo e reutilizável.



---

##  Bibliotecas Utilizadas

- **React Router DOM v7** → Roteamento SPA
- **UUID** → Geração de identificadores únicos
- **Classnames** → Manipulação condicional de classes CSS
- **ESLint customizado** → Regras personalizadas para manter padrão de código limpo

---

## Persistência com localStorage

Todos os dados de reembolso são salvos no `localStorage` usando `JSON.stringify` e recuperados com `JSON.parse`. Isso permite que os dados persistam mesmo após recarregar a página.

```jsx
localStorage.setItem("reembolsos", JSON.stringify(data));
const reembolsos = JSON.parse(localStorage.getItem("reembolsos"));
```

---

## 🖥️ Como Rodar o Projeto Localmente

Pré-requisitos:

   - Node.js 18+

   - npm ou yarn

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/SISPAR.git
   cd SISPAR
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse em: [http://localhost:5173](http://localhost:5173)

---

## 🔧 Comandos de Instalação e Execução

```bash
# Instalar dependências
npm install

# Rodar ambiente de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Visualizar build localmente
npm run preview
```

## Materiais de Apoio
Protótipo no Figma:
O design da interface está disponível no Figma e pode ser utilizado como guia para a implementação:

<a href="https://www.figma.com/design/HiQqNZdfEVGoBaxq1xZ4IK/PortoLogistica?node-id=0-1&node-type=canvas&t=EBrJTvSNNssHRodT-0&authuser=0/">FIGMA - SISPAR</a>


## Deploy no Vercel
<a href="https://vercel.com/airesgabryels-projects/sispar/EDcpZ1k125hzAYkMxGUtziBuzBtM">Acompanhe o meu progresso direto do Vercel</a>

## Deploy no Render



Feito por [Gabryel Aires](https://github.com/AiresGabryel)
