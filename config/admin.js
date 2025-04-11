module.exports = ({ env }) => ({
  url: '/admin',            // tells Strapi to serve the admin panel at /admin
  serveAdminPanel: true,    // ensure Strapi serves the frontend admin panel

  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
port: 1337,
  url: "https://skillang.com/admin"
});
