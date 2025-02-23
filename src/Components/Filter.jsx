import '../styles/Filter.css';
export default function Filter() {
  return (
    <div className='filter-container'>
      <input type='text' placeholder='Search' className='search-box' />
      <button className='filter-btn'>Filter By</button>
      <select className='dropdown'>
        <option>Date</option>
      </select>
      <select className='dropdown'>
        <option>Status</option>
      </select>
      <button className='reset-btn'>Reset Filter</button>
    </div>
  );
}
