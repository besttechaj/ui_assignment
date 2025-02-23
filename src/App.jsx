import './App.css';
import SideBar from './Components/SideBar';
import Navbar from './Components/Navbar';
import DashboardCustomer from './Components/DashboardCustomer';
import TransactionsTable from './Components/TransactionTable';
import SuspendCustomerAccount from './Components/SuspendCustomerAccount';
import Filter from './Components/Filter';
import OrderDetails from './Components/OrderDetails';
function App() {
  return (
    <div className='container'>
      <div className='container_inner1'>
        <SideBar />
      </div>
      <div className='container_inner2'>
        <Navbar />
        <Filter />
        <DashboardCustomer />
        <SuspendCustomerAccount />
        <TransactionsTable />
        <OrderDetails />
      </div>
    </div>
  );
}

export default App;
