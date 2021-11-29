// eslint-disable-next-line no-unused-vars
exports.handler = async () => {
  console.log("Starting delete operation");
  return {
    statusCode: 200,
    statusMessage: "Delete operation successful. ",
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
