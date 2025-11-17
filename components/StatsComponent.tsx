export default function StatsComponent({
  happyCustomers,
  propertiesForClients,
  yearsOfExperience,
}: {
  happyCustomers: string;
  propertiesForClients: string;
  yearsOfExperience: string;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full">
      <div className="bg-bg-alt p-5 rounded-md border border-text-alt/20">
        <p className="text-3xl font-semibold">200+</p>
        <p className="text-text-alt">{happyCustomers}</p>
      </div>
      <div className="bg-bg-alt p-5 rounded-md border border-text-alt/20">
        <p className="text-3xl font-semibold">10k+</p>
        <p className="text-text-alt">{propertiesForClients}</p>
      </div>
      <div className="bg-bg-alt p-5 rounded-md border border-text-alt/20 col-span-2 md:col-span-1 text-center md:text-start">
        <p className="text-3xl font-semibold">16+</p>
        <p className="text-text-alt">{yearsOfExperience}</p>
      </div>
    </div>
  );
}
