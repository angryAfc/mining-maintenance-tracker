function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Overview of mining equipment issues and maintenance status.</p>

      <div className="card-container">
        <div className="card">
          <h3>Total Issues</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>Open Issues</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>Critical Issues</h3>
          <p>2</p>
        </div>

        <div className="card">
          <h3>Equipment in Maintenance</h3>
          <p>3</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;