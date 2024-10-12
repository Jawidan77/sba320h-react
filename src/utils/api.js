export const fetchMenuItems = async (id) => {
    console.log(import.meta.env.VITE_API_KEY);
    
    const url = `https://api.spoonacular.com/recipes/search?apiKey=${import.meta.env.VITE_API_KEY}&query=chicken`; // Dynamic id
    
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'VITE_APP_x-api-key': import.meta.env.VITE_APP_RAPIDAPI_KEY,  // Use environment variable
            
    //     }
    // };

    try {
        const response = await fetch(url);
        console.log(response);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        console.log(result.results)
        return result.results; // Adjust based on API structure
    } catch (error) {
        console.error("Error fetching menu items:", error);
    }
};
