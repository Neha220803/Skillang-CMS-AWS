module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // ✅ Add this part
proxy: true,
  url: env('PUBLIC_URL', 'https://skillang.com'), // optional but good
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  // ✅ Allow the domain
  allowedHosts: ['skillang.com', 'www.skillang.com'],
});

