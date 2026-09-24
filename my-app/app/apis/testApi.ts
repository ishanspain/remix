export async function publicApi() {
  try {
    const res = await fetch("https://api.first.org/data/v1/countries");

    const data = await res.json();
    console.log("data from api", data);
  } catch (err) {
    console.log("error in public api fetch", err);
  }
}


