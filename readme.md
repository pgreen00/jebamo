# Jebamo

[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

A modern, framework-agnostic web component library built with [Stencil](https://stenciljs.com/). Jebamo provides a comprehensive set of reusable UI components that work seamlessly across all major frameworks and vanilla JavaScript applications.

## 🚀 Features

- **Framework Agnostic**: Built with Web Components, works with React, Angular, Vue, or no framework at all
- **TypeScript Support**: Full TypeScript definitions for all components
- **Accessible**: WCAG compliant components with proper ARIA attributes
- **Customizable**: Extensive theming support with CSS custom properties
- **Lightweight**: Tree-shakeable components for optimal bundle sizes
- **Modern**: Built with modern web standards and best practices

## 📦 Packages

This monorepo contains the following packages:

- **`jebamo`** - Core web component library
- **`jebamo-angular`** - Angular-specific wrapper components
- **`jebamo-docs`** - Documentation site built with Docusaurus
- **`demo`** - Demo application showcasing all components

## 🛠️ Installation

### Core Library

```bash
npm install jebamo
```

### Angular Integration

```bash
npm install jebamo-angular
```

## 🎯 Quick Start

### Vanilla JavaScript/HTML

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="https://unpkg.com/jebamo@latest/dist/jebamo/jebamo.esm.js"></script>
</head>
<body>
  <je-button color="primary">Click me!</je-button>
</body>
</html>
```

### Angular

```typescript
// app.module.ts
import { JebamoModule } from 'jebamo-angular';

@NgModule({
  imports: [JebamoModule],
  // ...
})
export class AppModule { }
```

```html
<!-- app.component.html -->
<je-button color="primary" (click)="handleClick()">
  Click me!
</je-button>
```

### React

```tsx
import 'jebamo/je-button';

function App() {
  return (
    <je-button color="primary" onClick={() => console.log('clicked')}>
      Click me!
    </je-button>
  );
}
```

## 🎨 Available Components

Jebamo includes over 50+ components covering all common UI patterns:

### Form Components
- `je-button` - Buttons with various styles and states
- `je-textfield` - Text input fields
- `je-checkbox` - Checkbox inputs
- `je-radio` & `je-radio-group` - Radio button controls
- `je-select` - Dropdown select components
- `je-datepicker` - Date picker component
- `je-toggle` - Toggle switch component
- `je-form` - Form container with validation

### Layout Components
- `je-card` - Card containers
- `je-column` & `je-column-group` - Grid layout system
- `je-divider` - Visual separators
- `je-page` - Page container
- `je-toolbar` - Toolbar component

### Navigation Components
- `je-nav` - Navigation component
- `je-breadcrumb` & `je-breadcrumbs` - Breadcrumb navigation
- `je-tabs` & `je-tab` - Tab navigation
- `je-menu` - Dropdown menus
- `je-tree` - Tree navigation

### Feedback Components
- `je-alert` - Alert messages
- `je-loading` - Loading indicators
- `je-toast-container` - Toast notifications
- `je-modal` - Modal dialogs
- `je-drawer` - Slide-out drawers
- `je-popover` - Popover tooltips
- `je-tooltip` - Tooltip components

### Data Display
- `je-table` - Data tables
- `je-calendar` - Calendar component
- `je-tree` - Tree view
- `je-infinite` - Infinite scroll
- `je-placeholder` - Loading placeholders

### Utility Components
- `je-icon` - Icon component
- `je-link` - Link component
- `je-color` - Color picker
- `je-dropzone` - File upload zones
- `je-wizard` - Multi-step wizard

## 🎨 Theming

Jebamo components are highly customizable using CSS custom properties:

```css
je-button {
  --background: #007bff;
  --color: white;
  --hover-background: #0056b3;
  --active-background: #004085;
}
```

## 🏗️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/pgreen00/jebamo.git
cd jebamo

# Install dependencies
npm install

# Start development servers
npm start
```

This will start:
- Core component development server
- Demo application
- Documentation site

### Build

```bash
# Build all packages
npm run build
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test.watch
```

## 📚 Documentation

Visit the [documentation site](https://jebamo.com) for:
- Component API reference
- Usage examples
- Theming guide
- Tutorials
- Installation instructions

## 🤝 Contributing

We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Stencil](https://stenciljs.com/)
- Documentation powered by [Docusaurus](https://docusaurus.io/)
- Icons and design inspiration from various open-source projects

---

**Built with ❤️ by Peter Green**
