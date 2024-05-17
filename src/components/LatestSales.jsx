const LatestSales = () => {
  const customers = [
    { name: 'Emma Johnson', email: 'emma@johnson.com', price: '$120' },
    { name: 'Oliver Brown', email: 'oliver@brown.com', price: '$220' },
    { name: 'Ava Taylor', email: 'ava@taylor.com', price: '$320' },
    { name: 'Sophia Miller', email: 'sophia@miller.com', price: '$420' },
    { name: 'Mia Davis', email: 'mia@davis.com', price: '$520' },
  ];

  return (
    <div class="items-center w-full bg-transparent">
        <div>
            <ul role="list" class="divide-y-2 divide-inherit">
                {customers.map((customer) => (
                <li class="py-0 sm:py-4 bg-transparent dark:bg-gray-800 ">
                    <div class="flex items-center justify-between p-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-bold text-cyan-900">
                        {customer.name}
                        </p>
                        <p class="text-sm text-cyan-900 ">
                        {customer.email}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-black dark:text-white">
                        {customer.price}
                    </div>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default LatestSales;