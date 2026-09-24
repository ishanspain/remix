export type CountryDetails = {
  country: string;
  region: string;
};

export type CountriesResponse = {
  status: string;
  "status-code": number;
  total: number;
  data: Record<string, CountryDetails>;
};

export async function publicApi(signal?: AbortSignal): Promise<CountriesResponse> {
  const response = await fetch("https://api.first.org/data/v1/countries", {
    signal,
  });

  if (!response.ok) {
    throw new Error("Countries request failed: " + response.status);
  }

  return response.json() as Promise<CountriesResponse>;
}
