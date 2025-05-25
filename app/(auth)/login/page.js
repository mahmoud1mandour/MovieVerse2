"use client";
import { useAuth } from "@/Context/AuthContext";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const {
    handleSubmitLogin,
    email,
    setEmail,
    password,
    setPassword,
    error,
    user,
    loading,
  } = useAuth();
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-sm w-full shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmitLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-50 text-gray-700 rounded-md border border-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-50 text-gray-700 rounded-md border border-gray-300"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full bg-blue-500 py-3 rounded-md text-white font-semibold hover:bg-blue-600 transition cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Do not have an account?
          <Link
            href="/register"
            className="text-blue-500 hover:text-blue-600 cursor-pointer"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
