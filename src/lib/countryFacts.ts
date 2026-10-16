export interface CountryFact {
  code: string;
  name: string;
  names: Record<string, string>;
  capital: string[];
  region: string;
  area: number;
  population: number;
  flag: string;
}

export type CountrySort = "name" | "area" | "population";
export const countryName = (country: CountryFact, language: string) => country.names[language] ?? country.name;
const normalize = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().trim();

export function filterCountries(countries: CountryFact[], search: string, region: string, sort: CountrySort, language: string) {
  const query = normalize(search);
  return countries.filter(country => (region === "all" || country.region === region) &&
    normalize([country.code, country.name, ...Object.values(country.names), ...country.capital].join(" ")).includes(query))
    .sort((a, b) => sort === "name" ? countryName(a, language).localeCompare(countryName(b, language), language) :
      b[sort] - a[sort] || countryName(a, language).localeCompare(countryName(b, language), language));
}