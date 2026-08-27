# Cervo Films - Site Oficial

Site oficial da Cervo Films, empresa de produção audiovisual premium que transforma eventos em experiências cinematográficas.

## 🎬 Sobre o Projeto

A Cervo Films é uma empresa de produção audiovisual com mais de 4 anos de mercado, especializada em transformar eventos e marcas em narrativas cinematográficas memoráveis. Este site showcase apresenta seus serviços, portfólio de trabalhos e informações de contato de forma moderna e impactante.

### Características

- **Design Cinematográfico**: Interface escura premium inspirada em cinema
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Vídeos em Background**: Integração com Vimeo Player API
- **Portfólio Dinâmico**: Sistema de projetos com página de detalhes individual
- **Formulário de Contato**: Integração com FormSubmit
- **Animações**: Efeitos de scroll e interações suaves
- **Acessibilidade**: Estrutura semântica e atributos ARIA

## 🚀 Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com variáveis CSS
- **JavaScript (ES6+)**: Funcionalidades interativas com modules
- **Vimeo Player API**: Integração de vídeos em background
- **FormSubmit**: Processamento de formulários de contato

### Design
- **Montserrat**: Fonte tipográfica (Google Fonts)
- **CSS Modules**: Organização modular de estilos
- **CSS Grid & Flexbox**: Layout responsivo
- **CSS Variables**: Sistema de design consistente
- **Glass Morphism**: Efeitos de vidro e transparência

## 📁 Estrutura do Projeto

```
SiteCervoFilms/
├── index.html                    # Página principal
├── portfolio-project.html        # Página de detalhes de projetos
├── contato.html                  # Página de contato
├── politica-de-privacidade.html  # Política de privacidade
├── politica-de-cookies.html      # Política de cookies
├── styles.css                    # CSS principal (imports)
├── css/
│   ├── root_reset/              # Reset e variáveis globais
│   │   ├── reset_globalTags.css
│   │   ├── tipography.css
│   │   └── variables.css
│   ├── components/              # Componentes reutilizáveis
│   │   ├── header.css
│   │   ├── buttons.css
│   │   └── footer.css
│   ├── PageSectioms/            # Estilos por página/seção
│   │   ├── contatoPage/
│   │   │   └── contato.css
│   │   └── indexPage/
│   │       ├── hero.css
│   │       ├── cinemaStrip.css
│   │       ├── about.css
│   │       ├── services.css
│   │       ├── team.css
│   │       ├── portfolio.css
│   │       ├── diferentials.css
│   │       ├── socialProof.css
│   │       └── finalCTA.css
│   ├── portfolio-project.css    # Estilos específicos de projetos
│   ├── project-enhancements.css # Melhorias de projetos
│   └── utilities.css            # Classes utilitárias
└── js/
    ├── projects-data.js         # Dados dos projetos (portfólio)
    ├── project-page.js          # Lógica da página de projetos
    ├── contact-form.js          # Lógica do formulário de contato
    ├── indexPage/
    │   ├── main.js              # Script principal da home
    │   ├── animation_effects/   # Animações e efeitos
    │   │   ├── animations.js
    │   │   ├── counters.js
    │   │   ├── equipment.js
    │   │   ├── navigation.js
    │   │   ├── reviews.js
    │   │   └── slider.js
    │   └── utils/               # Utilitários
    │       ├── aboutVIdeo.js
    │       ├── services.js
    │       ├── utils.js
    │       └── videoManager.js
    └── utils/
        └── intersection-observer.js # Observer para animações
```

## 🎯 Funcionalidades Principais

### 1. **Hero Section**
- Vídeo de fundo automático (desktop e mobile)
- Overlay escuro para legibilidade
- Texto principal com CTA
- Logo da marca destacada

### 2. **Seção Sobre**
- Vídeo de background independente
- Cards com glass morphism
- Estatísticas animadas (+4 anos, +200 coberturas, 24h entrega)
- Scroll indicator animado

### 3. **Cinema Strip**
- Faixa de filme cinematográfica decorativa
- Clapper board animado
- Elementos visuais temáticos

### 4. **Serviços**
- Cards de serviços interativos
- Efeito expand/collapse
- Ícones e descrições detalhadas
- Hover effects

### 5. **Portfólio**
- Grid de projetos responsivo
- Cards com efeito grayscale e hover
- Integração com dados dinâmicos (projects-data.js)
- Links para páginas de detalhes individuais

### 6. **Página de Projeto**
- Mockup de dispositivo (vertical/horizontal)
- Galeria de imagens com drag & dots
- Vídeo incorporado do Vimeo
- Seção de detalhes (serviços, tecnologias)
- Projetos relacionados com algoritmo de recomendação
- Auto-play da galeria

### 7. **Depoimentos**
- Carrossel de reviews
- Animações de entrada
- Navegação por setas
- Design elegante

### 8. **Equipe**
- Cards de membros da equipe
- Efeitos de hover
- Fotos e cargos

### 9. **Diferenciais**
- Grid de diferenciais
- Ícones e descrições
- Animações de scroll

### 10. **CTA Final**
- Call-to-action impactante
- Botões de ação
- Design cinematográfico

### 11. **Formulário de Contato**
- Validação de campos
- Integração com FormSubmit
- Feedback visual de sucesso
- Animação de confete

### 12. **Footer**
- Informações de contato
- Links sociais
- Desenvolvedor creditado
- Copyright

### 13. **Políticas**
- Política de privacidade (LGPD compliant)
- Política de cookies
- Design consistente com o site

## 🎨 Sistema de Design

### Cores
```css
--color-primary: #ffffff
--color-secondary: #f5f5f5
--color-background: #000000
--color-surface: #0a0a0a
--color-text: #ffffff
--color-text-muted: #888888
```

### Tipografia
- **Fonte**: Montserrat (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800, 900
- **Tamanhos**: Sistema escalável de xs a 4xl

### Espaçamento
- Sistema consistente de xs (0.5rem) a xxl (6rem)
- Grid e gaps padronizados

### Efeitos
- Glass morphism (backdrop-filter)
- Transições suaves (0.2s - 0.5s)
- Sombras profundas para depth
- Animações de entrada (fadeInUp)

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Como Usar

### Desenvolvimento Local

1. Clone o repositório
2. Abra o arquivo `index.html` diretamente no navegador
3. Não requer build process ou servidor de desenvolvimento

### Adicionar Novo Projeto ao Portfólio

1. Edite `js/projects-data.js`
2. Adicione um novo objeto ao `PROJECTS`:
```javascript
novo-projeto: {
  id: "novo-projeto",
  gallery: ["url1.jpg", "url2.jpg", ...],
  title: "Título do Projeto",
  subtitle: "Subtítulo",
  category: "Categoria",
  duration: "duração",
  videoOrientation: "vertical", // ou "horizontal"
  videoSrc: "url-do-video-vimeo",
  about: "Descrição do projeto",
  services: ["serviço1", "serviço2"],
  tech: ["tecnologia1", "tecnologia2"],
  cta: {
    title: "Título CTA",
    description: "Descrição CTA"
  },
  related: ["projeto1", "projeto2"]
}
```

3. Adicione o card correspondente no `index.html` na seção de portfólio

### Personalizar Vídeos

Os vídeos são configurados nos arquivos HTML correspondentes:
- Hero: `index.html` (linhas 55-60)
- Sobre: `index.html` (linhas 92-107)
- Projetos: Via `projects-data.js`

### Configurar Formulário

O formulário usa FormSubmit:
- E-mail de destino: `cervofilmsoficial@gmail.com`
- Configuração em `contato.html` (linha 52)

## 🌐 Integrações

### Vimeo Player API
- Vídeos em background (hero e sobre)
- Vídeos de projetos
- Auto-play, loop, muted
- Controles personalizados

### FormSubmit
- Processamento de formulários
- Validação e feedback
- Envio direto para e-mail

### Google Fonts
- Montserrat via CDN
- Múltiplos pesos para versatilidade

## 📊 Performance

- **Lazy Loading**: Imagens com atributo `loading="lazy"`
- **CSS Ot timizado**: Módulos e imports eficientes
- **JavaScript Modular**: ES6 modules para carregamento sob demanda
- **Vimeo API**: Carregamento sob demanda quando necessário

## ♿ Acessibilidade

- Estrutura semântica HTML5
- Atributos ARIA em elementos interativos
- Labels descritivos em formulários
- Contraste adequado de cores
- Navegação por teclado suportada

## 📄 Licença

© 2024 Cervo Films. Todos os direitos reservados.

Desenvolvido por [DevWeb](https://www.getdevweb.com.br)

## 📞 Contato

- **E-mail**: cervofilmsoficial@gmail.com
- **WhatsApp**: +55 (34) 98409-5625
- **Instagram**: [@cervofilms](https://www.instagram.com/cervofilms/)

## 🛠️ Manutenção

### Atualizar Conteúdo
- Textos: Editar diretamente nos arquivos HTML
- Imagens: Substituir URLs nos arquivos correspondentes
- Projetos: Editar `js/projects-data.js`

### Atualizar Estilos
- Variáveis globais: `css/root_reset/variables.css`
- Componentes: `css/components/`
- Páginas específicas: `css/PageSectioms/`

### Atualizar Scripts
- Lógica principal: `js/indexPage/main.js`
- Animações: `js/indexPage/animation_effects/`
- Utilitários: `js/indexPage/utils/`

---
