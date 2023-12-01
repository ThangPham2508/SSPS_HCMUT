const Invoice = ({ products }) => {
  const total = products.reduce(
    (acc, product) =>
      acc + product.quantity * parseFloat(product.rate.slice(1)),
    0,
  );

  return (
    <div className="mx-0 flex flex-col w-3/4">
      <table className="divide-slate-500 min-w-full divide-y">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-normal sm:pl-6 md:pl-0"
            >
              Description
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-normal sm:table-cell"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-normal sm:table-cell"
            >
              Rate
            </th>
            <th
              scope="col"
              className="py-3.5 pl-3 pr-4 text-right text-sm font-normal sm:pr-6 md:pr-0"
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-slate-200 border-b">
              <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                <div className="font-medium">{product.name}</div>
                <div className="mt-0.5 sm:hidden">
                  {product.quantity} unit at {product.rate}
                </div>
              </td>
              <td className="hidden px-3 py-4 text-right text-sm sm:table-cell">
                {product.quantity}
              </td>
              <td className="hidden px-3 py-4 text-right text-sm sm:table-cell">
                {product.rate}
              </td>
              <td className="py-4 pl-3 pr-4 text-right text-sm sm:pr-6 md:pr-0">
                {product.quantity * parseFloat(product.rate.slice(1))}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="row"
              colSpan="3"
              className="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal sm:table-cell md:pl-0"
            >
              Total
            </th>
            <th
              scope="row"
              className="pl-4 pr-3 pt-4 text-left text-sm font-normal sm:hidden"
            >
              Total
            </th>
            <td className="pl-3 pr-4 pt-4 text-right text-sm font-normal sm:pr-6 md:pr-0">
              ${total.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Invoice;
