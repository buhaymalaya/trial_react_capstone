// export const searchAPI = async (searchTerm, location, searchResultsContainer) => {
//      // Waiting for request to be granted, api key still invalid
//     try {
//         const response = await fetch('https://api.211.org/search/v1/api/ServiceAtLocation?idServiceAtLocation=searchTerm,%20location', 
//         {
//                 'method': 'GET',
//                  headers: {
//                 'Cache-Control': 'no-cache',
//                 'Api-Key': ')i;MR%%3Lt_k,Ku',
//             }
//         });
//         const data = await response.json();
//         displaySearchResults(data, searchResultsContainer);
//     } catch (error) {
//         console.error('Error searching:', error);
//         alert('An error occurred while searching. Please try again.');
//     }
// }

// const displaySearchResults = (data, searchResultsContainer) => {
//     searchResultsContainer.innerHTML = ''; // Clear previous results

//     if (data && data.results && data.results.length > 0) {
//         data.results.forEach(result => {
//             const resultDiv = document.createElement('div');
//             resultDiv.innerHTML = `
//                 <p><strong>Title:</strong> ${result.title}</p>
//                 <p><strong>Description:</strong> ${result.description}</p>
//                 <p><strong>Location:</strong> ${result.location}</p>
//             `;
//             searchResultsContainer.appendChild(resultDiv);
//         });
//     } else {
//         searchResultsContainer.innerHTML = '<p>No results found.</p>';
//     }
// }


// TO ADD 
// change text sizes to make reading easier for user
// add translation api for non english users
// inform user that info will be lost if not completed and submitted 