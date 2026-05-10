# Calculadora Web

Aplicación web básica de calculadora desarrollada con HTML, CSS y JavaScript.

## Características

- Operaciones básicas: suma, resta, multiplicación, división
- Operador módulo (%)
- Interfaz responsive
- Pruebas unitarias incluidas

## Estructura del Proyecto

```
calculadora/
├── index.html          # Estructura HTML
├── estilos.css         # Estilos de la calculadora
├── calculadora.js      # Lógica y pruebas
├── Dockerfile          # Contenedor Docker
└── README.md           # Documentación
```

## Uso Local

Abrir `index.html` en un navegador web.

## Uso con Docker

```bash
docker build -t calculadora .
docker run -p 8080:80 calculadora
```

Acceder en: http://localhost:8080

## Pruebas Unitarias

La función `pruebas()` en `calculadora.js` valida:

- Suma: 2+3 = 5
- Resta: 10-4 = 6
- Multiplicación: 3*4 = 12
- División: 20/4 = 5
- Módulo: 10%3 = 1

Para ejecutar las pruebas, abrir la consola del navegador y ejecutar:

```javascript
pruebas()
```

## Ramas Git

- `main`: Rama principal de producción
- `develop`: Rama de desarrollo

## Tecnologías

- HTML5
- CSS3
- JavaScript (ES6)
- Docker
- Nginx
