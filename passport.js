window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: '2EMwHUNVzJTJZEErVwtJqQAUcR7Lu7f5',
    redirectUri: 'https://internally-eager-phoenix.ngrok-free.app',
    logoutRedirectUri: 'https://internally-eager-phoenix.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });
2
