// import React, { useState } from 'react';

// const Search = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = (e) => {
//     setQuery(e.target.value);
//     const filteredShows = shows.filter(show => 
//       show.title.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     onSearch(filteredShows);
//   };

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={query} 
//         onChange={handleSearch} 
//         placeholder="Search podcasts" 
//       />
//       <button>Search</button>
//     </div>
//   );
// };

// export default Search;
