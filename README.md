# Ndengue Manuel - Site de Perfil Profissional

Este repositório contém o código-fonte do site de perfil profissional de Ndengue Manuel, especialista em Projetos Sociais e Desenvolvimento Comunitário. O site foi desenvolvido utilizando React, TypeScript, Tailwind CSS e outras tecnologias modernas para criar uma experiência visual atraente e responsiva.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
ndengue-portfolio/
├── public/             # Arquivos públicos e estáticos
├── src/                # Código-fonte do projeto
│   ├── assets/         # Imagens e outros recursos
│   ├── components/     # Componentes React reutilizáveis
│   │   ├── layout/     # Componentes de layout (Header, Footer)
│   │   └── sections/   # Componentes de secções específicas
│   ├── data/           # Dados e conteúdo do site
│   ├── pages/          # Páginas do site
│   ├── styles/         # Estilos e definições de cores
│   ├── App.tsx         # Componente principal da aplicação
│   └── main.tsx        # Ponto de entrada da aplicação
├── package.json        # Dependências e scripts
└── README.md           # Este arquivo
```

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS utilitário
- **Vite**: Ferramenta de build rápida
- **React Router**: Para navegação entre páginas
- **Lucide Icons**: Biblioteca de ícones

## Instruções para Edição

### Pré-requisitos

Para editar e executar este projeto localmente, você precisará ter instalado:

- Node.js (versão 18 ou superior)
- npm ou pnpm (gerenciador de pacotes)

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/ndengue-portfolio.git
   cd ndengue-portfolio
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

4. Acesse o site em seu navegador:
   ```
   http://localhost:5173
   ```

### Edição de Conteúdo

Todo o conteúdo do site está centralizado no arquivo `src/data/content.ts`. Para modificar textos, informações de contato, projetos, etc., edite este arquivo.

Exemplo de edição:

```typescript
// Abra src/data/content.ts
// Localize a seção que deseja editar, por exemplo:

export const siteContent = {
  // Informações gerais do site
  siteInfo: {
    title: "Ndengue Manuel | Especialista em Projetos Sociais",
    // Edite o título conforme necessário
    ...
  },
  
  // Edite outras seções conforme necessário
  ...
};
```

### Adição de Imagens

Para adicionar ou substituir imagens:

1. Coloque os arquivos de imagem na pasta `src/assets/images/`
2. Referencie-as no arquivo de conteúdo (`src/data/content.ts`) usando o caminho relativo:

```typescript
// Exemplo:
profileImage: "/assets/images/sua-nova-imagem.jpg",
```

### Personalização de Cores

A paleta de cores está definida em `src/styles/colors.ts`. Você pode modificar este arquivo para alterar o esquema de cores do site:

```typescript
// Exemplo de alteração da cor principal
export const colors = {
  primary: {
    main: '#1E40AF', // Altere para a cor desejada
    ...
  },
  ...
};
```

## Implantação (Deploy)

### GitHub Pages

Para implantar o site no GitHub Pages:

1. Crie um repositório no GitHub
2. Adicione o repositório remoto:
   ```bash
   git remote add origin https://github.com/seu-usuario/seu-repositorio.git
   ```

3. Configure o script de build para GitHub Pages no `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. Instale o pacote gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

5. Execute o deploy:
   ```bash
   npm run deploy
   ```

### Netlify

Para implantar no Netlify:

1. Crie uma conta no [Netlify](https://www.netlify.com/)
2. Conecte seu repositório GitHub
3. Configure as seguintes opções:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Clique em "Deploy site"

## Personalização Avançada

### Adição de Novas Páginas

Para adicionar uma nova página:

1. Crie um novo componente em `src/pages/`:
   ```tsx
   // src/pages/NovaPage.tsx
   import React from 'react';
   
   const NovaPage: React.FC = () => {
     return (
       <div>
         <h1>Nova Página</h1>
         {/* Conteúdo da página */}
       </div>
     );
   };
   
   export default NovaPage;
   ```

2. Adicione a rota no arquivo `src/App.tsx`:
   ```tsx
   <Routes>
     {/* Rotas existentes */}
     <Route path="/nova-pagina" element={<NovaPage />} />
   </Routes>
   ```

3. Adicione um link no menu de navegação em `src/components/layout/Header.tsx`

### Modificação de Componentes

Os componentes estão organizados em `src/components/`. Para modificar um componente existente:

1. Localize o arquivo do componente
2. Faça as alterações necessárias
3. Salve o arquivo e verifique as mudanças no navegador

## Suporte e Manutenção

Para suporte ou dúvidas sobre o código, entre em contato com o desenvolvedor original ou consulte a documentação das tecnologias utilizadas:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

---

Desenvolvido com ❤️ para Ndengue Manuel
