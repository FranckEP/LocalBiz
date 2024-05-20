const LatestPurchases = () => {
    const providers = [
        { name: 'John Doe', email: 'john@doe.com', price: '$500' },
        { name: 'Jane Smith', email: 'jane@smith.com', price: '$600' },
        { name: 'Bob Johnson', email: 'bob@johnson.com', price: '$700' },
        { name: 'Alice Williams', email: 'alice@williams.com', price: '$800' },
        { name: 'Charlie Brown', email: 'charlie@brown.com', price: '$900' },
    ];

  return (
    <div className="items-center w-full bg-transparent">
        <div>
            <ul role="list" className="divide-y-2 divide-inherit">
                {providers.map((provider) => (
                    <li className="py-0 sm:py-4 bg-transparent dark:bg-gray-800">
                        <div className="flex items-center justify-between p-4">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-cyan-900">
                                {provider.name}
                            </p>
                            <p className="text-sm text-cyan-900 ">
                                {provider.email}
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-black dark:text-white">
                            {provider.price}
                        </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default LatestPurchases;