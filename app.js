$(function() {
  var tm  = TimeMap.init({
    mapId: "map",               // Id of map div element (required)
    timelineId: "timeline",     // Id of timeline div element (required)
    options: {
      eventIconPath: "images/"
    },
      datasets: [
  {
    title: "NSND",
      id: "events",
      theme: "purple",
      type: "gss",
      options: {
        // note that your spreadsheet must be published for this to work
        key: "0AmCywBYg0v9WdGF1RUVRZTlPR2dQZDJaVGxueWhyYnc",
      // map spreadsheet column names to expected ids
      paramMap: {
        start: "date"
      }
      }
  }
  ],
    bandIntervals: "yr", //year and dec range
    scrollTo: "2011"// center map to 2011
  });
});

