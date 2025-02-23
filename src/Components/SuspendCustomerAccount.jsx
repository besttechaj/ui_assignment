import { useState } from 'react';
import '../styles/SuspendCustomerAccount.css';
import close from '../assets/close.png';
import cloud_upload from '../assets/cloud-upload-outlined.png';
import calendar from '../assets/Calendar.png';
export default function SuspendCustomerAccount() {
  const [details, setDetails] = useState({
    reason: '',
    proof: '',
    suspension_end_date: '',
  });

  //# onchange handler
  const handleChange = (e) => {
    console.log(e);
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  //# onSubmit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitted data are : `, details);
    setDetails({
      reason: '',
      proof: '',
      suspension_end_date: '',
    });
  };
  return (
    <div className='suspend'>
      <form onSubmit={handleSubmit}>
        <div className='suspend_one'>
          <h2>Suspend Customer Account</h2>
          <img src={close} alt='close_icon' />
        </div>

        <div className='suspend_two'>
          <label>Reason For Suspension</label>
          <input
            type='text'
            value={details.reason}
            placeholder='Enter the reason for suspending this customer'
            onChange={handleChange}
            name='reason'
          />
        </div>

        <div className='suspend_three'>
          <label>Proof</label>

          {/* Hidden File Input */}
          <input
            type='file'
            name='proof'
            id='file-upload'
            style={{ display: 'none' }}
            onChange={(e) =>
              setDetails({ ...details, proof: e.target.files[0].name })
            }
          />

          {/* Custom Label for File Input */}
          <label htmlFor='file-upload' className='file-upload-label'>
            {details.proof ? (
              details.proof
            ) : (
              <div className='inner_upload_file'>
                <img src={cloud_upload} alt='Upload' className='upload-icon' />
                Upload or drop a file right here
              </div>
            )}
          </label>
        </div>

        <div className='suspend_four'>
          <label>Suspension End Date</label>

          {/* Hidden Date Input */}
          <input
            type='date'
            name='suspension_end_date'
            id='mentionYourDate'
            style={{ display: 'none' }}
            onChange={(e) =>
              setDetails({ ...details, suspension_end_date: e.target.value })
            }
          />

          {/* Custom Label for Date Input */}
          <label htmlFor='mentionYourDate' className='calendar-upload-label'>
            {details.suspension_end_date ? (
              details.suspension_end_date
            ) : (
              <div className='inner_upload_calendar'>
                Select the date when suspension will end
                <img src={calendar} alt='calendar_img' />
              </div>
            )}
          </label>
        </div>

        <div className='suspend_five'>
          <button type='button' className='suspend-cancel'>
            Cancel
          </button>
          <button type='submit' className='suspend-submit'>
            Suspend Customer
          </button>
        </div>
      </form>
    </div>
  );
}
