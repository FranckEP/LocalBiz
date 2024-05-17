import '../../styles/dashboard.css'
import BarChartHero from '../../components/Graphs/BarChar';
import DonutChartUsageExample from '../../components/Graphs/PieChart';
import LatestSales from '../../components/LatestSales';
import { Link } from 'react-router-dom';
import LatestPurchases from '../../components/LatestPurchases';

function DashBoard() {
  return (
    <main className="dashboard">
      <h1 className="dashboard-title">DashBoard</h1>
      <hr/>
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
              <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}>
                <h1 className="subtitle">Últimas 5 ventas</h1>
                <Link to="/sales">
                    View all
                </Link>
              </div>
              <div className="top">
                <LatestSales />
              </div>
            </div>
          </div>
          <div className="graph-column">  
            <div className="graph">
              <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}>
                <h1 className="subtitle">Últimas 5 compras</h1>
                <Link to="/providers">
                    View all
                </Link>
              </div>
              <div className="top">
                <LatestPurchases />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DashBoard