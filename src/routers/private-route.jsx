import logo from "../assets/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import auth from "../utils/auth";
import PopUp from "../utils/pop-up";

function PrivateRoute() {
  const navigate = useNavigate();
  const logout = () => {
    auth.logout();
    navigate("/");
  };

  const popUp = () => {
    document.getElementById("sidebar-overlay").classList.toggle("hidden");
    document.getElementById("sidebar").classList.toggle("hidden");
    document.getElementById("close-sidebar").classList.toggle("hidden");
  };

  // true jika sudah login
  if (auth.isAuthenticated()) {
    return (
      <>
        <div>
          <header className="flex justify-between items-center bg-primary-blue p-4 text-secondary-gray h-[67.33px] min-w-[270px]">
            <div className="flex flex-col sm:flex-row justify-between sm:w-11/12 lg:w-full">
              <img className="w-32 ml-4" src={logo} alt="logo" />
              <div className="flex items-center">
                <p className="sm:text-xl ml-8 mr-2">Admin</p>
                <button
                  onClick={logout}
                  title="keluar"
                  className="hover:text-hover-blue lg:mx-2"
                >
                  <i className="ri-logout-circle-r-line text-xl"></i>
                </button>
              </div>
            </div>
            <div onClick={popUp} className="lg:hidden">
              <button id="open-sidebar" className="text-3xl">
                <i className="ri-menu-line"></i>
              </button>
            </div>
          </header>
          <div className="flex h-[calc(100vh-67.33px)] min-w-[270px]">
            <div
              id="sidebar-overlay"
              className="hidden lg:hidden bg-black h-screen w-screen absolute top-0 left-0 opacity-90 z-20"
            ></div>
            <aside
              id="sidebar"
              className="p-4 hidden lg:block text-secondary-gray font-medium lg:w-[220px] h-screen lg:h-full absolute lg:static top-0 left-0 bg-white shrink-0 overflow-auto w-[300px] z-30"
            >
              <h4 className="mb-3 font-semibold">Menu</h4>
              <div className="mb-2">
                <Link
                  onClick={popUp}
                  to="/"
                  className="hover:text-secondary-blue"
                >
                  <i className="ri-home-2-line mr-2"></i>Dashboard
                </Link>
              </div>
              <div className="space-y-2">
                <details open className="space-y-2">
                  <summary className="hover:text-secondary-blue cursor-pointer list-none space-y-2">
                    <i className="ri-settings-5-fill mr-2"></i>Pengaturan
                    <i className="ri-arrow-drop-down-line"></i>
                  </summary>
                  <div className="pl-6">
                    <Link
                      onClick={popUp}
                      to="/administrator"
                      className="hover:text-secondary-blue"
                    >
                      <i className="ri-user-settings-line mr-2"></i>
                      Administrator
                    </Link>
                  </div>
                  <div className="pl-6">
                    <Link
                      onClick={popUp}
                      to="/profile"
                      className="hover:text-secondary-blue"
                    >
                      <i className="ri-profile-line mr-2"></i>Profil Hotel
                    </Link>
                  </div>
                </details>
                <details open className="space-y-2">
                  <summary className="hover:text-secondary-blue cursor-pointer list-none space-y-2">
                    <i className="ri-building-4-line mr-2"></i>Data Kamar
                    <i className="ri-arrow-drop-down-line"></i>
                  </summary>
                  <div className="pl-6">
                    <Link
                      onClick={popUp}
                      to="/Kategori-kamar"
                      className="hover:text-secondary-blue"
                    >
                      <i className="ri-hotel-bed-line mr-2"></i>Kategori Kamar
                    </Link>
                  </div>
                  <div className="pl-6">
                    <Link
                      onClick={popUp}
                      to="/lantai-kamar"
                      className="hover:text-secondary-blue"
                    >
                      <i className="ri-hotel-bed-line mr-2"></i>Lantai Kamar
                    </Link>
                  </div>
                  <div className="pl-6">
                    <Link
                      onClick={popUp}
                      to="/list-kamar"
                      className="hover:text-secondary-blue"
                    >
                      <i className="ri-hotel-bed-line mr-2"></i>List Kamar
                    </Link>
                  </div>
                </details>
                <details open className="space-y-2">
                  <summary className="hover:text-secondary-blue cursor-pointer list-none space-y-2">
                    <i className="ri-wallet-2-fill mr-2"></i>Transaksi
                    <i className="ri-arrow-drop-down-line"></i>
                  </summary>
                  <div className="pl-6">
                    <Link
                      onClick={popUp}
                      to="/pesan-kamar"
                      className="hover:text-secondary-blue"
                    >
                      <i className="ri-notification-3-fill mr-2"></i>Pesan Kamar
                    </Link>
                  </div>
                  <div className="pl-6">
                    <Link
                      onClick={popUp}
                      to="/checkin-kamar"
                      className="hover:text-secondary-blue"
                    >
                      <i className="ri-notification-3-fill mr-2"></i>Check In
                    </Link>
                  </div>
                  <div className="pl-6">
                    <Link
                      onClick={popUp}
                      to="/checkout-kamar"
                      className="hover:text-secondary-blue"
                    >
                      <i className="ri-notification-3-fill mr-2"></i>Check Out
                    </Link>
                  </div>
                </details>
              </div>
              <div className="mt-2">
                <Link
                  onClick={popUp}
                  to="/laporan"
                  className="hover:text-secondary-blue"
                >
                  <i className="ri-folder-2-line mr-2"></i>Laporan
                </Link>
              </div>
            </aside>
            <button
              onClick={popUp}
              id="close-sidebar"
              className="absolute top-[-3px] left-[260px] text-6xl hidden lg:hidden z-40"
            >
              <i className="ri-arrow-left-circle-fill bg-white rounded-full"></i>
            </button>
            <Outlet />
          </div>
          <div
            id="layer"
            className="hidden w-screen h-screen bg-primary-blue absolute top-0 left-0 z-30  justify-center items-center min-w-fit"
          >
            <div className="bg-white rounded-sm overflow-auto">
              <PopUp />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PrivateRoute;
