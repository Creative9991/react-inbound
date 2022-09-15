const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};


/*
By default, Create React App includes a performance relayer that allows you to measure and
analyze the performance of your application using different metrics.

With the reportWebVitals function, you can send any of results to an analytics endpoint 
to measure and track real user performance on your site.

*/

export default reportWebVitals;
