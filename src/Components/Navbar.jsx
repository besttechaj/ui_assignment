import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <a>All Customers</a>
        </li>
        <li>
          <a>Active Customers</a>
        </li>
        <li>
          <a>Suspended Customers</a>
        </li>
      </ul>
    </div>
  );
}
