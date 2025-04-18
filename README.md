# 🛒 E-Commerce App (Next.js + TypeScript)

## 📦 Como rodar o projeto

```bash
# Instale as dependências
npm install

# Inicie o ambiente de desenvolvimento
npm run dev
```

---

## ✅ Funcionalidades implementadas

- ✅ **Listagem de produtos**
- ✅ **Página de detalhes do produto**
- ✅ **Carrinho com edição de quantidade**
- ✅ **Checkout e envio de pedidos**
- ✅ **CRUD completo de produtos (admin)**
- ✅ **Edição dos detalhes do produto**
- ✅ **Login e cadastro de usuários**

---

## 🎯 Decisões e liberdades técnicas

- 🖼️ Utilização de imagens locais simulando uma **CDN**
- 🔑 Simulação do **Keycloak** por meio de atualizações de token
- 🌐 Uso de **Context API global** para gerenciamento do usuário autenticado

---

## 🚧 O que falta melhorar

- 🧪 Implementar testes unitários
- 🐳 Colocar a aplicação em containers (Docker)
- 🛠️ Rodar a aplicação em ambiente de produção (`npm run build`)
- 🧾 Garantir **tipagem completa** nas interfaces (atualmente parcial)
- ⚡ Otimizar o desempenho de **renderização em algumas páginas** como a inclusão do React Query, o uso de useMemo para otimizar cálculos de valores, e a redução de redundâncias em chamadas repetidas.
- 📱 Melhorar e **padronizar a responsividade**
- 🧹 Limpar o **carrinho** após finalização do pedido
- 🔗 Garantir **navegação fluida** entre todas as páginas (algumas ainda sem botões)
- 🎨 Refinar o **estilo visual** e remover alertas visuais temporários
- 🧭 Padronizar todas as páginas conforme o design system adotado

---

## ✨ Considerações finais

Mais um dia e tava liso :v