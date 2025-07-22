module.exports = async function (context, req) {
  const forwarded = req.headers["x-forwarded-for"] || req.headers["x-client-ip"] || req.ip || "unknown";
  context.res = {
    status: 200,
    body: `Request source IP: ${forwarded}`
  };
};
