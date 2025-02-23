import { useState } from 'react';
import '../styles/DashboardCustomer.css';
const CustomersTable = () => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'jdoe@gmail.com',
      phone: '',
      date: '',
      orders: '',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Mary Smith',
      email: 'msmith@gmail.com',
      phone: '',
      date: '',
      orders: '',
      status: 'Suspended',
    },
    {
      id: 3,
      name: 'Richard Atkins',
      email: 'ratkins@gmail.com',
      phone: '',
      date: '',
      orders: '17',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Ben Williams',
      email: 'bwilliams@gmail.com',
      phone: '',
      date: '',
      orders: '',
      status: 'Suspended',
    },
    {
      id: 5,
      name: 'John Doe',
      email: 'jdoe@gmail.com',
      phone: '',
      date: '',
      orders: '',
      status: 'Active',
    },
    {
      id: 6,
      name: 'Mary Smith',
      email: 'msmith@gmail.com',
      phone: '',
      date: '',
      orders: '',
      status: 'Suspended',
    },
    {
      id: 7,
      name: 'Richard Atkins',
      email: 'ratkins@gmail.com',
      phone: '123456789',
      date: 'Aug 3, 2024',
      orders: '9',
      status: 'Active',
    },
  ];

  return (
    <div className='customers-table'>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Registration Date</th>
            <th>Total Completed Orders</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone || '-'}</td>
              <td>{customer.date || '-'}</td>
              <td>{customer.orders || '-'}</td>
              <td>
                <span className={`status ${customer.status.toLowerCase()}`}>
                  {customer.status}
                </span>
              </td>
              <td className='actions'>
                <button
                  onClick={() =>
                    setDropdownIndex(dropdownIndex === index ? null : index)
                  }
                ></button>
                {dropdownIndex === index && (
                  <div className='dropdown'>
                    <p>👁 View details</p>
                    <p className='suspend'>🚫 Suspend customer</p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className='pagination'>
        <button className='prev'>Prev</button>
        <button className='active'>1</button>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>10</button>
        <button className='next'>Next</button>
      </div>
    </div>
  );
};

export default CustomersTable;
