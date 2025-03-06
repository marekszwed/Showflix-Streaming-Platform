# ShowFlix 🎬  

ShowFlix is a web application that allows users to browse movies, search by genre, and add favorites. The project is built with **React.js** and **TypeScript**, using **Vite** and fetching data from the **TMDB API**.  

## 🔗 Demo  

👉 [ShowFlix Live](https://showflix-theta.vercel.app/)  

## 📌 Technologies  

- **React.js** + **TypeScript**  
- **Vite** (fast development environment)  
- **Styled-components** (component styling)  
- **React Router** (page navigation)  
- **React Hook Form** + **Yup** (form handling and validation)  
- **Swiper.js** (movie carousels)  
- **i18next** (multi-language support)  
- **TMDB API** (movie database)  
 
## 🚀 Features  

✔️ Browse movies from TMDB API  
✔️ Search movies by genre  
✔️ Add movies to favorites (localStorage)  
✔️ Play movie trailers  
✔️ Form for adding personal movie posters
✔️ Responsive design  

## 📦 Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/marekszwed/Showflix-Streaming-Platform
   cd showflix
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Configure environment variables:  
   - Create a `.env` file  
   - Add your TMDB API key:  
     ```env
     VITE_API_KEY=your_api_key
     ```  
4. Run the app in development mode:  
   ```bash
   npm run dev
   ```  

## 🎬 API  

The application fetches movie data from **TMDB API**. Example request:  

```typescript
const fetchMovies = async (): Promise<Movie[]> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
  );
  return response.json();
};
```  

## 📂 Project Structure  

```
showflix/
│── src/
│   ├── components/   # Reusable components
│   ├── constants/    # Reusable constants
│   ├── context/      # State management
│   ├── helpers/      # Global types /interfaces
│   ├── hooks/        # Custom hooks
│   ├── locales/      # internationalization
│   ├── pages/        # Application views
│   ├── routes/       # React Router paths
│   ├── styles/       # Global styles
│   ├── App.tsx       # Main application component
│── public/
│── .env      # Environment variables
│── README.md
│── package.json
│── tsconfig.json
│── vite.config.ts
```  


## 🛠 Author  

👤 **[Marek Szwed](https://github.com/marekszwed)**  
 

## 📄 License  

This project is licensed under the **MIT License** – you are free to use, copy, and modify it without restrictions.  

---

