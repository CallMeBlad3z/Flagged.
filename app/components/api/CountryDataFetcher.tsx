// app/components/api/CountryDataFetcher.tsx

interface CountryData {
  name: string;
  code: string;
  continent: string;
}

const CountryDataFetcher = async (): Promise<CountryData[]> => {
  try {
    const ipAddress = '192.168.0.170';
    const response = await fetch(`http://${ipAddress}:3000/countries`);
    const data = await response.json();

    if (Array.isArray(data)) {
      // Map the API data to include continent
      const countries = data.map((country: any) => ({
        name: country.name,
        code: country.code,
        continent: country.continent, // Ensure the API returns this
      }));
      return countries;
    } else {
      console.error('Unexpected response format:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default CountryDataFetcher;