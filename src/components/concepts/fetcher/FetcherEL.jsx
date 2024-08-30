import Card from "./Card";
import useCustomFetcher from "./useCustomFetcher";
import Code from "../../code/Code";

const code = `
// Custom fetcher hook
import { useEffect } from "react";
import { useState } from "react";

function useCustomFetcher(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  function reset() {
    setIsError(false);
    setError("");
    setIsLoading(true);
  }

  async function fetchData() {
    try {
      reset();
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (err) {
      setIsError(true);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, data, isError, error };
}

export default useCustomFetcher;

// COmpoennt using the custom fetcher
import useCustomFetcher from "./useCustomFetcher";
function FetcherEL() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const { isLoading, data, isError, error } = useCustomFetcher(url);

  console.log(data);

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        {error}
      </div>
    );
  if (data)
    return (
      <div className="flex flex-wrap gap-3 border-stone-200 border-2 p-3">
        {data.slice(0, 6)?.map((entry, i) => (
          <Card key={entry.id} index={i} entry={entry}></Card>
        ))}
      </div>
    );
}

export default FetcherEL;

`;

function FetcherEL() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const { isLoading, data, isError, error } = useCustomFetcher(url);

  return (
    <main className="space-y-12">
      <section>
        <h1>3. Custom fetcher</h1>
        <p>
          The useCustomFetcher hook is a custom React hook designed to simplify
          the process of fetching data from a given URL and managing related
          states such as loading, error, and the fetched data itself.
        </p>
      </section>

      <section>
        <h2>Example</h2>
        <div className="border-stone-200 border-2">
          {isLoading ? (
            <div className="w-full h-44 flex items-center justify-center">
              Loading...
            </div>
          ) : (
            <></>
          )}
          {isError ? (
            <div className="w-full h-screen flex items-center justify-center">
              {error}
            </div>
          ) : (
            <></>
          )}

          <div>
            <div className="flex flex-wrap gap-3  p-3">
              {data?.slice(0, 6)?.map((entry, i) => (
                <Card key={entry.id} index={i} entry={entry}></Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Code code={code}></Code>
    </main>
  );
}

export default FetcherEL;
