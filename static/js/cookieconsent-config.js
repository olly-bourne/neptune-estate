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
          description: 'I use Google Analytics to understand how people use this site. It only runs if you accept. Read the <a href="/privacy-and-cookie-policy/">privacy and cookie policy</a>.',
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
            },
            {
              title: 'More information',
              description: 'For questions about this policy or your data, see the <a href="/privacy-and-cookie-policy/">privacy and cookie policy</a>.'
        }
          ]
        }
      }
    }
  }
});