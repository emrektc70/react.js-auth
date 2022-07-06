import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, auth, emailVerification } from "../firebase";
import { logout as logoutHandle } from "../store/auth";
import { useNavigate } from "react-router-dom";
import UpdateProfile from "../components/UpdateProfile";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  const handleVerification = async () => {
    await emailVerification();
  };

  if (user) {
    return (
      <div className="max-w-2xl mx-auto py-4">
        <h1 className="flex gap-x-7 items-center">
          {" "}
          {auth.currentUser.photoURL && (
            <img
              src={auth.currentUser.photoURL}
              className="w-15 h-11 rounded-full "
            />
          )}{" "}
          Bienvenue t'on compte <br /> {user.email} est ouvert
          <button
            onClick={handleLogout}
            className="h-8 rounded text-sm text-white bg-indigo-700"
          >
            Quitter le compte{" "}
          </button>
          {!user.emailVerified && (
            <button
              onClick={handleVerification}
              className="h-8 rounded text-sm text-white bg-indigo-700"
            >
              Validation adresse Mail
            </button>
          )}
        </h1>
        <UpdateProfile />
      </div>
    );
  }

  return (
    <div>
      <Link to="/register"> Inscrit toi </Link>
      <Link to="/login">Se connecter</Link>
    </div>
  );
}
