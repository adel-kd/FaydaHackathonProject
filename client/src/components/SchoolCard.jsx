export default function SchoolCard({ name, subdomain }) {
  return (
    <div className="border p-4 my-2 rounded shadow">
      <h3>{name}</h3>
      <p className="text-sm text-gray-500">{subdomain}</p>
    </div>
  );
}
