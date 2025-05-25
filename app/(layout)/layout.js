import Navbar from "@/Components/Navbar";
import { MoviesProvider } from "@/Context/MoviesContext";

export default function RootLayout({ children }) {
  return (
    <MoviesProvider>
      <Navbar />
      {children}
    </MoviesProvider>
  );
}
