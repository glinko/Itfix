module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'npm start',
      startServerReadyPattern: 'ready',
      numberOfRuns: 3,
      settings: {
        formFactor: 'desktop',
        throttlingMethod: 'devtools',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', '< 90'],
        'categories:accessibility': ['error', '< 90'],
        'categories:best-practices': ['error', '< 90'],
        'categories:seo': ['error', '< 90'],
      },
    },
    upload: {
      target: 'filesystem',
      serverUrl: '',
    },
  },
};
