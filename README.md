# Igor Minerva - Personal Portfolio

A modern, professional portfolio website built with React and Vite. Features automated GitHub project integration, a clean black & white theme, and a fully responsive design.

## Features

- **Automated GitHub Integration:** Projects are automatically fetched from GitHub API—no manual updates needed.
- **React + Vite:** Fast development environment with modern tooling.
- **Black & White Theme:** Minimalist design with elegant contrast and readability.
- **Fully Responsive:** Optimized for all screen sizes and devices.
- **Professional Design:** Clean, modern interface focused on showcasing work and expertise.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/igorminerva/igorminerva.github.io.git
   cd my-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Project Structure

```plaintext
src/
├── assets/
│   └── style.css          # Black & white theme styles
├── components/
│   ├── App.jsx
│   ├── NavBar/
│   │   └── NavBar.jsx
│   ├── Profile/
│   │   └── Profile.jsx
│   ├── HomePage/
│   │   ├── HomePage.jsx
│   │   └── homeCard/
│   │       └── HomeCard.jsx      # Professional introduction section
│   ├── AboutPage/
│   │   ├── AboutPage.jsx
│   │   ├── AboutCards/           # Education, Experience, Skills, Hobbies
│   │   └── ResumeButton/
│   ├── ProjectPage/
│   │   ├── ProjectPage.jsx
│   │   └── ProjectCard/
│   │       └── ProjectCard.jsx    # Fetches projects from GitHub API
│   └── pages/
│       ├── Home.jsx
│       ├── AboutMe.jsx
│       └── Projects.jsx
└── main.jsx
```

## Key Components

### ProjectCard Component
The projects page automatically fetches repositories from GitHub. Simply add repositories to your GitHub account and they will appear on the site. No manual updates required.

- Fetches public repositories from the specified GitHub username
- Displays repository name, description, and programming language
- Provides direct links to GitHub and project homepage (if available)
- Filters out forks automatically

To customize:
- Edit `GITHUB_USERNAME` in `ProjectCard.jsx`
- Adjust `REPOS_TO_EXCLUDE` to hide specific repositories

### HomeCard Component
Professional introduction section with structured sections for:
- Personal introduction
- Expertise & Approach
- Experience overview
- Call to action for connections

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Bootstrap 5** - Component framework
- **React Router** - Client-side routing
- **GitHub API** - Automatic project fetching

## Customization

### Theme
Edit `src/assets/style.css` to customize the black & white theme and styling.

### GitHub Integration
Update the `GITHUB_USERNAME` variable in `src/components/ProjectPage/ProjectCard/ProjectCard.jsx` to fetch your own repositories.

## Build for Production

```bash
npm run build
```

## Contact

- **Email:** [igorminerva81@gmail.com](mailto:igorminerva81@gmail.com)
- **LinkedIn:** [igor-minerva-9a0336265](https://www.linkedin.com/in/igor-minerva-9a0336265)
- **GitHub:** [igorminerva](https://github.com/igorminerva)

## License

Built with ❤️ by [Igor Minerva](https://github.com/igorminerva)
