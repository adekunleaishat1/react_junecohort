import "../DashboardPreloader.css";

const Preloader = () => {
  return (
    <div className="dashboard-loader">
      <div className="loader-header-skeleton"></div>

      <div className="loader-content">
        <div className="loader-menu-skeleton"></div>

        <div className="loader-main">
          <div className="loader-welcome-skeleton"></div>

          <div className="loader-section">
            <div className="loader-title-skeleton"></div>
            <div className="loader-item-skeleton"></div>
            <div className="loader-item-skeleton"></div>
          </div>

          <div className="loader-section">
            <div className="loader-title-skeleton"></div>
            <div className="loader-text-skeleton"></div>
          </div>

          <div className="loader-stats">
            <div className="loader-stat-skeleton"></div>
            <div className="loader-stat-skeleton"></div>
            <div className="loader-stat-skeleton"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
