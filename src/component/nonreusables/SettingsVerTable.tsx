

export const SettingsVerTable = () => {
  return (
    <div className="w-full">
      <table className="w-full border rounded">
        <thead className="whitespace-nowrap bg-cyan-500 text-white">
          <tr className="">
            <th className="p-2 whitespace-nowrap text-center">id</th>
            <th className="p-2 whitespace-nowrap text-center">userid</th>
            <th className="p-2 whitespace-nowrap text-center">code</th>
            <th className="p-2 whitespace-nowrap text-center">firstname</th>
            <th className="p-2 whitespace-nowrap text-center">expirationtime</th>
            <th className="p-2 whitespace-nowrap text-center">createdat</th>
            <th className="p-2 whitespace-nowrap text-center">action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="p-2 whitespace-nowrap text-center"> </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
