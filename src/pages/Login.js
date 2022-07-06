import { login } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      navigate("/", {
        replace: true,
      });
    }
  };
  return (
    <form
      className="max-w-xl mx-auto grid gap-y-4 py-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Adresse Mail
        </label>
        <div className="mt-1">
          <input
            type="email"
            className="Shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gra"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <div className="mt-1">
          <input
            type="password"
            className="Shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gra"
            placeholder="salut123456"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          disabled={!email || !password}
          className="inline-flex disabled:opacity-20 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ringoffset-2 focus:ring-indigo-500"
          type="submit"
        >
          {" "}
          Se connecter
        </button>{" "}
      </div>
    </form>
  );
}
