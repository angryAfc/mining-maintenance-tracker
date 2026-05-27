function Equipment() {
  const equipmentList = [
    {
      id: "EQ001",
      name: "Haul Truck 12",
      type: "Truck",
      site: "Bowen Basin",
      status: "Active",
    },
    {
      id: "EQ002",
      name: "Conveyor Belt A",
      type: "Conveyor",
      site: "Moranbah",
      status: "Maintenance",
    },
    {
      id: "EQ003",
      name: "Drill Rig 04",
      type: "Drill Rig",
      site: "Peak Downs",
      status: "Fault",
    },
  ];

  return (
    <div>
      <h2>Equipment List</h2>
      <p>List of mining equipment currently tracked by the system.</p>

      <table>
        <thead>
          <tr>
            <th>Equipment ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Site</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {equipmentList.map((equipment) => (
            <tr key={equipment.id}>
              <td>{equipment.id}</td>
              <td>{equipment.name}</td>
              <td>{equipment.type}</td>
              <td>{equipment.site}</td>
              <td>{equipment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Equipment;