const Settings = () => {
  return (
    <main className="dashboard flex">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="dashboard-title">Configuración</h1>
      </div>
      <hr />
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Nombre del cliente
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="James Bond"
          />
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            ID del cliente
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="10********"
          />
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="payment-method"
          >
            Método de pago
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="$***"
          />
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Total a abonar
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="$***"
          />
        </div>
        <div className="md:w-1/2 px-3">
        <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Total a abonar
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="$***"
          />
        </div>
      </div>
    </main>
  )
}

export default Settings