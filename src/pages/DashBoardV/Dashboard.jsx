import React from 'react'
import '../../styles/DashBoard/dashboard.css'
import BarChartHero from '../../components/Graphs/BarChar';
import DonutChartUsageExample from '../../components/Graphs/PieChart';

function DashBoard() {
  return (
    <main className="dashboard">
      <h1 className="dashboard-title">DashBoard</h1>
      <section className="graph-container">
        <div className="graph-row">
          <div className="graph-column">
            <div className="graph">
              <h1 className="subtitle">Resumen Ingresos</h1>
              <div className='bar-chart'>
                <BarChartHero/>
              </div>
            </div>
          </div>
          <div className="graph-column">
            <div className="graph">
              <h1 className="subtitle">Métodos de pago</h1>
              <div className="donut-chart">
                <DonutChartUsageExample />
              </div>
            </div>
          </div>
        </div>
        <div className="graph-row">
          <div className="graph-column">
            <div className="graph">
              <h1 className="subtitle">Top 3 Clientes</h1>
              <div className="top">
                
              </div>
            </div>
          </div>
          <div className="graph-column">  
            <div className="graph">
              <h1 className="subtitle">Top 3 Proveedores</h1>
              <div className="top-proveedores">
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DashBoard