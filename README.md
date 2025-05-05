# Pokémon 3D Carousel Viewer

An interactive 3D Pokémon viewer built with React and Vite, featuring a dynamic carousel interface and detailed Pokémon information display.

## Features

- Interactive 3D carousel with smooth rotation animation
- Display of 12 Pokémon cards per page with official artwork
- Detailed Pokémon information modal including:
  - Official front and back sprites
  - Type icons with custom SVG implementation
  - Height in meters
  - Weight in kilograms
- Smooth hover effects and transitions
- Pagination system for browsing all Pokémon
- Responsive design and user-friendly interface
- Mouse-controlled carousel rotation
- Error handling for image loading

## Technologies Used

- React 19
- Vite
- CSS3 (3D Transforms)
- REST API Integration

## Project Structure

```
src/
  ├── components/
  │   ├── Carousel.jsx        # Main carousel component
  │   ├── Carousel.css        # Carousel styles
  │   ├── PokemonDetailCard.jsx  # Detailed Pokémon info component
  │   └── PokemonDetailCard.css  # Detail card styles
  ├── assets/
  │   └── icons/
  │       └── svgs/          # Type and stat icons
  ├── App.jsx               # Main application component
  ├── App.css              # Global styles
  └── main.jsx            # Entry point
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
Create a `.env` file with:
```
VITE_API_URL=http://localhost:3000/api
```

3. Run the development server:
```bash
npm run dev
```

## Current Features

- ✅ 3D rotating Pokémon carousel
- ✅ Detailed Pokémon information display
- ✅ Custom SVG type icons
- ✅ Accurate height and weight conversions
- ✅ Responsive pagination
- ✅ Interactive card animations
- ✅ Error handling for failed image loads
- ✅ Smooth 3D transitions

## Planned Improvements

- [ ] Implement Pokémon search functionality
- [ ] Add filtering by type
- [ ] Include more Pokémon stats
- [ ] Add evolution chain information
- [ ] Implement color themes based on Pokémon types
- [ ] Add loading states
- [ ] Improve accessibility
- [ ] Add keyboard navigation support

## Development

The project uses modern React features and follows best practices for component organization and styling. It implements a responsive design that works well across different screen sizes.

## Acknowledgments

- Pokemon type icons provided by [pokemon-type-icons](https://github.com/partywhale/pokemon-type-icons/tree/main) repository
