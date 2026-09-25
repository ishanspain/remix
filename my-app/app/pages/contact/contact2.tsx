import { useFetcher } from "react-router";

export default function contact2() {
  let fetcher = useFetcher();
  let busy = fetcher.state !== "idle";

  return (
    <div>
      {/*   <fetcher.Form method="post" action="/contact">
      <input type="text" name="title" />
      <button type="submit">
        {busy ? "Saving..." : "Save"}
      </button>

      
    </fetcher.Form> */}
      <button
        onClick={() => {
          fetcher.submit(
            { title: "plus one" },
            { action: "/contact", method: "post" },
          );
        }}
      >
        like me
      </button>

      <pre>return value: - {JSON.stringify(fetcher.data)}</pre>
    </div>
  );
}
