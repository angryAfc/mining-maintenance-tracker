function Issues() {
  const issues = [
    {
      id: "ISS001",
      equipmentName: "Haul Truck 12",
      title: "Engine overheating",
      severity: "High",
      status: "Open",
      reportedBy: "Operator A",
    },
    {
      id: "ISS002",
      equipmentName: "Conveyor Belt A",
      title: "Belt alignment issue",
      severity: "Medium",
      status: "In Progress",
      reportedBy: "Supervisor B",
    },
    {
      id: "ISS003",
      equipmentName: "Drill Rig 04",
      title: "Hydraulic pressure fault",
      severity: "Critical",
      status: "Open",
      reportedBy: "Technician C",
    },
  ];

  return (
    <div>
      <h2>Issue Tracker</h2>
      <p>Track reported equipment issues, severity, and current status.</p>

      <table>
        <thead>
          <tr>
            <th>Issue ID</th>
            <th>Equipment</th>
            <th>Issue</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Reported By</th>
          </tr>
        </thead>

        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td>{issue.equipmentName}</td>
              <td>{issue.title}</td>
              <td>{issue.severity}</td>
              <td>{issue.status}</td>
              <td>{issue.reportedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Issues;