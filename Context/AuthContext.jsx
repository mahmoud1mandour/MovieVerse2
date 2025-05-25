"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    setError("");

    // Validate form
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      setError("User with this email already exists");
      return;
    }

    // Create new user
    const newUser = { id: Date.now(), name, email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    // Clear form
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    // Redirect to login
    router.push("/login");
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setError("");

    // Validate form
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    // Check credentials
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    // Set user in state and localStorage
    const { password: _, ...userWithoutPassword } = user;
    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));

    // Clear form
    setEmail("");
    setPassword("");

    // Redirect to home
    router.push("/");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleSubmitRegister,
        handleSubmitLogin,
        user,
        logout,
        error,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be used within an AuthContext");
  return context;
}

export { AuthProvider, useAuth };
