// eslint-disable-next-line no-unused-vars
exports.handler = async () => {
  console.log("Starting update operation");
  return {
    statusCode: 200,
    statusMessage:
      "Update operation successful. Added elevation and coordinates",
    body: JSON.stringify({
      airportCode: "YVR",
      elevation: "13ft",
      coordinates: "49.194722, -123.183889",
      city: "Vancouver",
      province: "British Columbia",
      country: "Canada",
    }),
  };
};
