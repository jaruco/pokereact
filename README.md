# Pokémon Carousel Viewer

Este proyecto es un visualizador de Pokémon que implementa un carrusel 3D interactivo, construido con React y Vite.

## Características

- Carrusel 3D giratorio con animación suave
- Visualización de 12 Pokémon por página
- Paginación para navegar entre todos los Pokémon disponibles
- Diseño responsivo y amigable al usuario
- Efecto hover en las tarjetas para mejor interactividad
- Integración con API de Pokémon local

## Tecnologías Utilizadas

- React 19
- Vite
- CSS3 (Transformaciones 3D)
- API REST

## Estructura del Proyecto

```
src/
  ├── components/
  │   ├── Carousel.jsx    # Componente principal del carrusel
  │   └── Carousel.css    # Estilos del carrusel
  ├── App.jsx            # Componente principal
  ├── App.css            # Estilos globales
  └── main.jsx          # Punto de entrada
```

## Configuración del Proyecto

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
Crear un archivo `.env` con:
```
VITE_API_URL=http://localhost:3000/api
```

3. Ejecutar el proyecto:
```bash
npm run dev
```

## Características del Carrusel

- Rotación automática de 45 segundos por vuelta completa
- Visualización de imágenes oficiales de Pokémon
- Efectos de hover con escalado suave
- Paginación con feedback visual

## Estado Actual

El proyecto actualmente implementa:
- Visualización 3D de Pokémon en un carrusel giratorio
- Paginación funcional
- Integración con API local
- Diseño responsivo y animaciones suaves

## Próximas Mejoras Planeadas

- Implementar búsqueda de Pokémon
- Agregar detalles adicionales en las tarjetas
- Mejorar la accesibilidad
- Agregar filtros por tipo de Pokémon
