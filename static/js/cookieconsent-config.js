CookieConsent.run({
  categories: {
    necessary: { enabled: true, readOnly: true },
    analytics: {}
  },
  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'Cookies',
          description: 'I use Google Analytics to keep an eye on traffic. It only runs if you accept.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences'
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          sections: [
            {
              title: 'Strictly necessary',
              description: 'Needed for the site to work. Always on.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytics',
              description: 'Google Analytics 4 measures page views and visits. Data is used to improve the site.',
              linkedCategory: 'analytics'
            }
          ]
        }
      }
    }
  }
});