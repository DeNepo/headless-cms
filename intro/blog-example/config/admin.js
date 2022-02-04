module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '102ad197ff7b569b29a7c8b74160a152'),
  },
});
