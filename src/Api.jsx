import React from 'react';

export function ExploreApi({
  api = 'https://api.publicapis.org/entries'
}) {

  const [apiResult, setApiResult] = React.useState(null);
  const [apiError, setApiError] = React.useState(false);

  React.useEffect(() => {
    console.log("ExploreApi useEffect Start");
    setApiError(false);
    fetch(api).then(result => {
      return result.json();
    }).then(result => {
      setApiResult(result)
    }).catch((error) => {
      setApiError(error);
    });
  }, [api]);

  if (apiResult === null) {
    return <h1>Loading...</h1>
  }

  if (apiError !== false) {
    return <>
      <h1>Error!</h1>
      <p>There was a problem getting information from the api:</p>
      <p>{JSON.stringify(apiError)}</p>
    </>
  }

  return <>
    {apiResult.count}
    <h1>Count: {apiResult.count}</h1>
    {apiResult.entries.map(entry => <div>
      <h2>API: {entry.API}</h2>
      <p>{entry.Description}</p>
      <a href={entry.Link}>Link</a>
    </div> )}
    {JSON.stringify(apiResult)}
  </>;
}

export function RedirectableApi() {
  const [api, setApi] = React.useState("https://api.publicapis.org/entries")
  return <>
    <input 
      type="text" 
      value={api} 
      onChange={(e) => setApi(e.target.value)}
    />
    <ExploreApi api={api} />
  </>
}