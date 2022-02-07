module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '62a2f3699c41cb5c407c69560c039437'),
  },
});
