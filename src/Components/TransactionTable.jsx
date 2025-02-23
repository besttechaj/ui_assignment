import '../styles/TransactionTable.css';
const TransactionsTable = () => {
  const transactions = [
    {
      id: 1,
      txnId: '#TXN123',
      orderId: '#ORD456',
      customer: 'John Doe',
      customerId: '#CX123',
      rider: 'John Doe',
      timestamp: '01/29/2025 03:45 PM',
      paymentMethod: 'Card',
      service: 'Send a Package',
      status: 'Successful',
    },
    {
      id: 2,
      txnId: '#TXN123',
      orderId: '#ORD456',
      customer: 'Mary Smith',
      customerId: '#CX123',
      rider: 'Mary Smith',
      timestamp: '01/29/2025 03:45 PM',
      paymentMethod: 'Wallet',
      service: 'Buy From a Store',
      status: 'Failed',
    },
    {
      id: 3,
      txnId: '#TXN123',
      orderId: '#ORD456',
      customer: 'Richard Atkins',
      customerId: '#CX123',
      rider: 'Richard Atkins',
      timestamp: '01/29/2025 03:45 PM',
      paymentMethod: 'Card',
      service: 'Car Towing',
      status: 'Successful',
    },
    {
      id: 4,
      txnId: '#TXN123',
      orderId: '#ORD456',
      customer: 'John Doe',
      customerId: '#CX123',
      rider: 'John Doe',
      timestamp: '01/29/2025 03:45 PM',
      paymentMethod: 'Wallet',
      service: 'Home Moving',
      status: 'Failed',
    },
    {
      id: 5,
      txnId: '#TXN123',
      orderId: '#ORD456',
      customer: 'Mary Smith',
      customerId: '#CX123',
      rider: 'Mary Smith',
      timestamp: '01/29/2025 03:45 PM',
      paymentMethod: 'Card',
      service: 'Send a Package',
      status: 'Successful',
    },
    {
      id: 6,
      txnId: '#TXN123',
      orderId: '#ORD456',
      customer: 'Mary Smith',
      customerId: '#CX123',
      rider: 'Mary Smith',
      timestamp: '01/29/2025 03:45 PM',
      paymentMethod: 'Wallet',
      service: 'Buy From a Store',
      status: 'Failed',
    },
  ];

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Txn ID</th>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Customer ID</th>
            <th>Rider Name</th>
            <th>Payment Timestamp</th>
            <th>Payment Method</th>
            <th>Service</th>
            <th>Status</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={txn.id}>
              <td>{index + 1}</td>
              <td>{txn.txnId}</td>
              <td>{txn.orderId}</td>
              <td>{txn.customer}</td>
              <td>{txn.customerId}</td>
              <td>{txn.rider}</td>
              <td>{txn.timestamp}</td>
              <td>{txn.paymentMethod}</td>
              <td>
                <span
                  className={`service-badge ${txn.service
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                >
                  {txn.service}
                </span>
              </td>
              <td>
                <span className={`status-badge ${txn.status.toLowerCase()}`}>
                  {txn.status}
                </span>
              </td>
              <td>
                <a href='#' className='view-link'>
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
