# Medusa & Directus Integration App

This is a **Next.js** project that integrates **Medusa.js** and **Directus** to create a scalable and customizable e-commerce platform.

## Features

- **Directus** as a headless CMS for managing content and assets.
- **Medusa.js** for robust e-commerce and product management.
- Fully responsive frontend built with **Next.js** and **Tailwind CSS**.
- State management using **Zustand**.
- Data fetching with **React Query**.
- Form validation using **React Hook Form** and **Zod**.
- Preconfigured with ESLint, Prettier, and TailwindCSS for best development practices.

---

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or above)
- [Medusa Backend](https://docs.medusajs.com/quickstart) running locally or hosted
- [Directus](https://directus.io/) running locally or hosted

---

## Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
# Directus Environment Variables
NEXT_PUBLIC_DIRECTUS_URL = "http://localhost:8055"
NEXT_PUBLIC_DIRECTUS_API = "http://localhost:8055/items/"
NEXT_PUBLIC_DIRECTUS_FILE_API = "http://localhost:8055/assets/"

# Medusa Environment Variables
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY = "pk_1255d5d79d9e709d25481ea76dda81cd3bc28e309e6df06df6635b8a83d15017"
NEXT_PUBLIC_MEDUSA_BACKEND_URL = "http://localhost:9000/"
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/medusa-directus-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd medusa-directus-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Scripts

- **`npm run dev`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm run start`**: Starts the production server.
- **`npm run lint`**: Runs ESLint to lint the codebase.

---

## Tech Stack

### Frontend
- **Next.js**
- **React**
- **TailwindCSS**

### Backend & APIs
- **Medusa.js** for e-commerce backend
- **Directus** for content and asset management

### Additional Libraries
- **Zustand** for state management
- **React Query** for data fetching
- **React Hook Form** and **Zod** for form handling
- **Radix UI** for accessible components

---

## Folder Structure

```
medusa-directus-app/
├── components/       # Reusable React components
├── pages/            # Next.js pages
├── styles/           # Global styles
├── utils/            # Utility functions
├── public/           # Static files
├── .env.local        # Environment variables
└── README.md         # Project documentation
```

---

## Dependencies

Below is a list of major dependencies used in the project:

### Core Dependencies
- **@directus/sdk**: Directus SDK for managing CMS data
- **@medusajs/js-sdk**: Medusa SDK for interacting with the backend
- **next**: Next.js framework
- **react**: React library for building UI
- **react-dom**: React DOM rendering

### Utility Libraries
- **zustand**: State management
- **react-query**: Server-state management
- **react-hook-form**: Form handling
- **zod**: Schema validation
- **clsx**: Utility for conditionally joining classNames

### UI Libraries
- **radix-ui**: Accessible components
- **tailwindcss**: CSS framework

---

## Development Notes

### TailwindCSS

To add custom styles or extend the TailwindCSS configuration, edit `tailwind.config.js`.

### TypeScript

The project is set up with TypeScript for type-safe development. Ensure all new files and components are typed appropriately.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or feedback, please contact [your-email@example.com].

