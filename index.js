module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Your function executed successfully!",
          access_local_key: process.env.access_local_key,
          access_key: process.env.ACCESS_KEY
          poh_access_key: process.env.POH_ACCESS_KEY
        },
        null,
        2
      ),
    };
  };