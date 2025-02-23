import logo from '../assets/Logo.png';
import '../styles/SideBar.css'; // Importing the CSS file
import dashboard from '../assets/home_dashboard.png';
import user_rid from '../assets/user.png';
import order from '../assets/order_management.png';
import custom from '../assets/custom_task.png';
import subsc from '../assets/subscription_management.png';
import payment from '../assets/paymentsAndTransactions.png';
import manage_disputes from '../assets/virtual_card_monitoring.png';
import promotions from '../assets/promotions.png';
import banner from '../assets/banners.png';
import inbox from '../assets/inbox.png';
import notifi from '../assets/notification_and_alert.png';
import faq from '../assets/faqs.png';
import dummy_ig from '../assets/dummy_img.jpeg';
const SideBar = () => {
  return (
    <aside className='sidebar'>
      <img src={logo} alt='logo' />

      {/* Menu Sections */}
      <nav>
        <ul>
          {/* Operational Controls */}
          <li className='section-title'>OPERATIONAL CONTROLS</li>
          <li>
            <img src={dashboard} alt='icon' />
            Dashboard
          </li>
          <li>
            <img src={user_rid} alt='icon' />
            User & Rider Management
          </li>
          <li>Customers</li>
          <li>Riders</li>
          <li>
            <img src={order} alt='icon' />
            Order Management
          </li>
          <li>
            <img src={custom} alt='icon' />
            Custom Tasks
          </li>
          <li>
            <img src={subsc} alt='icon' />
            Subscription Management
          </li>

          {/* Payments & Transactions */}
          <li>Financial Monitoring</li>
          <li className='section-title'>
            <img src={payment} alt='icon' />
            PAYMENTS & TRANSACTIONS
          </li>
          <li className='active'>Payments & Transactions</li>
          <ul className='submenu'>
            <li>Customer Transactions</li>
            <li>Rider Payout Overview</li>
            <li>Subscription Overview</li>
          </ul>

          {/* Support & Disputes */}
          <li className='section-title'>SUPPORT & DISPUTES</li>
          <li>
            <img src={manage_disputes} alt='icon' />
            Manage Disputes
          </li>

          {/* Marketing & Engagement */}
          <li className='section-title'>MARKETING & ENGAGEMENT</li>
          <li>
            <img src={promotions} alt='icon' />
            Promotions & Referrals
          </li>
          <li>
            <img src={banner} alt='icon' />
            Banners
          </li>

          {/* Communication & Support */}
          <li className='section-title'>COMMUNICATION & SUPPORT</li>
          <li>
            <img src={inbox} alt='icon' />
            Inbox
          </li>
          <li>
            <img src={notifi} alt='icon' />
            Notifications & Alerts
          </li>
          <li>
            <img src={faq} alt='icon' />
            FAQs
          </li>

          {/* Policies & Documentation */}
          <li className='section-title'>POLICIES & DOCUMENTATION</li>
        </ul>
      </nav>

      {/* User Profile */}
      <div className='profile-section'>
        <img src={dummy_ig} alt='icon' />
        <div>
          <p className='profile-name'>Abdul Ahad</p>
          <p className='profile-role'>Admin</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
