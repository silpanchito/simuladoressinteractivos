# Simuladores Interactivos — INF-111

Plataforma web interactiva con dos simuladores matemáticos desarrollada como desafío técnico para la materia **INF-111 (Programación Fundamental)** en la **UMSA**.

## 🔗 Live Demo
> _Reemplaza este enlace con tu URL de GitHub Pages después de publicar_  
> `https://TU-USUARIO.github.io/simuladores-interactivos/`

## 📋 Descripción

La plataforma contiene dos ejercicios prácticos:

### Ejercicio 1 — Simulador de Transferencia de Calor
Implementa la **Ley de Enfriamiento de Newton** para calcular la temperatura final de un objeto tras un tiempo determinado en un entorno a temperatura constante.

**Fórmula:** `T = Ts + (T₀ - Ts) × e^(-k × t)`

| Parámetro | Descripción | Valor de prueba |
|-----------|-------------|-----------------|
| T₀ | Temperatura inicial (°C) | 120 |
| Ts | Temperatura del entorno (°C) | 38 |
| k | Constante de enfriamiento | 0.45 |
| t | Tiempo en horas | 3 |

**Resultado esperado con los valores de prueba:** `42°C`

### Ejercicio 2 — Calculador de Combinaciones (Caso Sorteo)
Calcula el total de combinaciones posibles para un sorteo de selección simultánea en dos grupos independientes.

**Fórmula:** `C(n, r) = n! / (r! × (n - r)!)`

| Grupo | n | r | Valor de prueba |
|-------|---|---|-----------------|
| Grupo 1 | n1 | r1 | C(59, 5) |
| Grupo 2 | n2 | r2 | C(35, 1) |

**Resultado esperado con los valores de prueba:** `18,009,460` combinaciones

## 🗂️ Estructura del Proyecto

```
simuladores-interactivos/
│
├── index.html      # Estructura HTML semántica con formularios
├── styles.css      # Estilos CSS con Box Model y diseño responsivo
├── script.js       # Lógica JavaScript (cálculos, validaciones, DOM)
└── README.md       # Este archivo
```

## ⚙️ Tecnologías

- **HTML5** semántico (`<form>`, `<input>`, `<label>`, `<button>`)
- **CSS3** con variables CSS, Grid, Flexbox y animaciones
- **JavaScript** vanilla con `document.getElementById()` y `Math.exp()`

## 🚀 Cómo publicar en GitHub Pages

1. Crea un repositorio público en GitHub con el nombre `simuladores-interactivos`
2. Sube los tres archivos: `index.html`, `styles.css`, `script.js`
3. Ve a **Settings → Pages → Source → Deploy from branch → main**
4. GitHub generará automáticamente la URL pública

## 👩‍💻 Autora

Estudiante de INF-111 · Universidad Mayor de San Andrés · 2026
