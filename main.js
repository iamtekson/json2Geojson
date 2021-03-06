let features = [];

// console.log(jsonData);
const output = jsonData.branch_data.map((element) => {
  var rdata = {
    type: "Feature",
    properties: {
      Address: element.address,
      Region: element.region,
      Phone: element.phone,
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(element.longitude),
        parseFloat(element.latitude),
      ],
    },
  };
  //   console.log(rdata);
  features.push(rdata);
});

// console.log(features);

const geoJSON = {
  type: "FeatureCollection",
  features: features,
};

console.log(geoJSON);

$(".download-geojson-btn").click(function () {
  requiredData =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(geoJSON));
  $(this).attr("href", requiredData);
});
