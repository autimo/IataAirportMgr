// eslint-disable-next-line no-unused-vars
exports.handler = async () => {
  console.log("Starting create operation");
  return {
    statusCode: 200,
    statusMessage: "Create operation successful",
    body: JSON.stringify({
      airportCode: "YVR",
      city: "Vancouver",
      province: "British Columbia",
      country: "Canada",
    }),
  };
};
