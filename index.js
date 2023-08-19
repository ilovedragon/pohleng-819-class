module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Your function executed successfully!",
          access_local_key: process.env.access_local_key,
          access_key: process.env.pohleng-parameter
        },
        null,
        2
      ),
    };
  };