import '../styles/OrderDetails.css';
import vector_sw from '../assets/vector_south_west.png';
import vector_ne from '../assets/vector_north_east.png';
import vector_left from '../assets/vector_left.png';
import vector_right from '../assets/vector_right.png';
import close from '../assets/close.png';
import trolley from '../assets/order_details/trolley.png';
import helmet from '../assets/order_details/helmet.png';
import drop_off from '../assets/order_details/drop_off.png';
import rider_arrived from '../assets/order_details/rider_arrived_loc.png';
import rider_picked from '../assets/order_details/rider_picked.png';
import straight_line from '../assets/vector_line.png';
import user_icon from '../assets/order_details/user.png';
import calendar_icon from '../assets/order_details/calendar.png';
import mail_icon from '../assets/order_details/mail.png';
import call_icon from '../assets/order_details/call.png';
export default function OrderDetails() {
  return (
    <div className='order'>
      <div className='order_header'>
        <div className='order_header_left'>
          <h3>#PAY123</h3>
          <p>Successful</p>
        </div>
        <div className='order_header_right'>
          <button>Suspend Account</button>
          <div className='vector_mix'>
            <img src={vector_ne} alt='icon' id='img1' />
            <img src={vector_sw} alt='icon' id='img2' />
          </div>
          <div className='vector_opposite'>
            <img src={vector_left} alt='icon' id='img3' />
            <div id='img4'>
              <img src={vector_right} alt='icon' />
            </div>
          </div>
          <img src={close} alt='icon' />
        </div>
      </div>
      <hr />
      <div className='order_nav'>
        <ul>
          <li>
            <a href='#'>Payment Details</a>
          </li>
          <li>
            <a href='#'>Order Details</a>
          </li>
          <li>
            <a href='#'>Ride Profile</a>
          </li>
          <li>
            <a href='#'>Disputes</a>
          </li>
        </ul>
      </div>
      <hr />

      <div className='order_details'>
        <div className='order_details_top'>
          <h4>ORDER DETAILS</h4>
        </div>
        <hr />
        <div className='order_details_bottom'>
          <div className='order-column'>
            <div className='order-column-inner'>
              <div className='order-column-inner1'>
                <img src={user_icon} alt='icon' />
                <p>Order ID:</p>
              </div>
              <div className='order-column-inner2'>#ORD123</div>
            </div>
            <div className='order-column-inner'>
              <div className='order-column-inner1'>
                <img src={mail_icon} alt='icon' />
                <p>Order End Time:</p>
              </div>
              <div className='order-column-inner2'>Feb 03, 2025, 11:30 AM</div>
            </div>
            <div className='order-column-inner'>
              <div className='order-column-inner1'>
                <img src={mail_icon} alt='icon' />
                <p>Total Duration:</p>
              </div>
              <div className='order-column-inner2'>48 mins</div>
            </div>
            <div className='order-column-inner'>
              <div className='order-column-inner1'>
                <img src={call_icon} alt='icon' />
                <p>Drop Address:</p>
              </div>
              <div className='order-column-inner2'>
                123 George Street, Sydney, NSW 2000
              </div>
            </div>
          </div>
          <div className='order-column'>
            <div className='order-column-inner'>
              <div className='order-column-inner1'>
                <img src={user_icon} alt='icon' />
                <p>Order Start Time:</p>
              </div>
              <div className='order-column-inner2'>Feb 03, 2025, 10:25 AM</div>
            </div>
            <div className='order-column-inner'>
              <div className='order-column-inner1'>
                <img src={call_icon} alt='icon' />
                <p>Package Type:</p>
              </div>
              <div className='order-column-inner2'>Documents</div>
            </div>
            <div className='order-column-inner'>
              <div className='order-column-inner1'>
                <img src={call_icon} alt='icon' />
                <p>Pickup Address:</p>
              </div>
              <div className='order-column-inner2'>
                123 George Street, Sydney, NSW 2000
              </div>
            </div>
            <div className='order-column-inner'>
              <div className='order-column-inner1'>
                <img src={calendar_icon} alt='icon' />
                <p>Service Type:</p>
              </div>
              <div className='order-column-inner2 special'>Send a Package</div>
            </div>
          </div>
        </div>
      </div>

      <h5>Timeline</h5>

      <div className='order_details_footer'>
        <ul>
          <li>
            <img src={straight_line} alt='icon' />
            <div>
              <img src={trolley} alt='icon' />
            </div>
            <div className='temp'>
              <p>Order Placed</p>
              <p>28 Dec 2024, 10:15 AM</p>
            </div>
          </li>

          <li>
            <img src={straight_line} alt='icon' />
            <div>
              <img src={helmet} alt='icon' />
            </div>
            <div className='temp'>
              <p>Rider Assigned</p>
              <p>27 Dec 2024, 03:30 PM</p>
            </div>
          </li>

          <li>
            <img src={straight_line} alt='icon' />
            <div>
              <img src={rider_arrived} alt='icon' />
            </div>
            <div className='temp'>
              <p>Rider arrived at pick-up</p>
              <p>26 Dec 2024, 10:15 AM</p>
            </div>
          </li>

          <li>
            <img src={straight_line} alt='icon' />
            <div>
              <img src={rider_picked} alt='icon' />
            </div>
            <div className='temp'>
              <p>Rider picked-up</p>
              <p>25 Dec 2024, 02:45 PM</p>
            </div>
          </li>

          <li>
            <div>
              <img src={drop_off} alt='icon' />
            </div>
            <div className='temp'>
              <p>Rider arrived at drop-off</p>
              <p>25 Dec 2024, 02:45 PM</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
