export const getLines = () => fetch('https://data.itsfactory.fi/journeys/api/1/lines').then(res => res.json());
