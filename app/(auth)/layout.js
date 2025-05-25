import { AuthProvider } from "@/Context/AuthContext";

export default function RootLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
