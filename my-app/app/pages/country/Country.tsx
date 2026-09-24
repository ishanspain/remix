import { useEffect, useState } from "react";
import { publicApi, type CountryDetails } from "~/apis/testApi";

export default function Country() {
  const [countries, setCountries] = useState<Record<string, CountryDetails>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCountry() {
      try {
        const response = await publicApi(controller.signal);
        setCountries(response.data);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchCountry();

    return () => controller.abort();
  }, []);

  return (
    <div>
      <h1>This is country API</h1>

      {loading && <p>Loading countries...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && (
        <ul>
          {Object.entries(countries).map(([code, details]) => (
            <li key={code}>
              <strong>{details.country}</strong> ({code}) - {details.region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
