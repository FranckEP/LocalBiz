import React from 'react';

const Settings = () => {
  return (
    <main className="dashboard flex">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="dashboard-title">Configuración</h1>
      </div>
      <hr />
      <div className="md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <h2 className="mb-2 font-bold">Información Personal</h2>
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
            Nombre del cliente
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="James Bond" />
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-email">
            Email
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-email" type="email" placeholder="james.bond@example.com" />
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-phone">
            Teléfono
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-phone" type="tel" placeholder="+1 (555) 555-5555" />
        </div>
        <div className="md:w-1/2 px-3">
          <h2 className="mb-2 font-bold">Cambio de Contraseña</h2>
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
            Contraseña Actual
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******" />
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-new-password">
            Nueva Contraseña
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-new-password" type="password" placeholder="******" />
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-confirm-password">
            Confirmar Nueva Contraseña
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-confirm-password" type="password" placeholder="******" />
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-country">
            País
          </label>
          <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-country">
            <option>Elegir país</option>
            <option value="US">Estados Unidos</option>
            <option value="ES">España</option>
          </select>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Guardar Cambios
      </button>
    </main>
  );
};

export default Settings;