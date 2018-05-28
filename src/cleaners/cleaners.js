export const geocodeCleaner = (data) => {
  const results = data.results[0];
  const location = results.geometry.location
  return location;
}