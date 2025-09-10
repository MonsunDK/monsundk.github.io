Consent Manager Installation Instructions

1. Extract the contents of this zip file
2. Place the files in your website directory
3. Add the following code to your HTML page, inside the <head> tag:

<link rel="stylesheet" id="silktide-consent-manager-css" href="path-to-css/silktide-consent-manager.css">
<script src="path-to-js/silktide-consent-manager.js"></script>
<script>
silktideCookieBannerManager.updateCookieBannerConfig({
  background: {
    showBackground: false
  },
  cookieIcon: {
    position: "bottomRight"
  },
  cookieTypes: [
    {
      id: "analytics",
      name: "Analytics",
      description: "<p>Disse cookies hjælper os med at forstå, hvordan siden bliver brugt. De er ikke nødvendige for, at hjemmesiden fungerer, og du kan trygt vælge dem fra, hvis du ønsker det.</p>",
      required: false,
      onAccept: function() {
        gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
        dataLayer.push({
          'event': 'consent_accepted_analytics',
        });
      },
      onReject: function() {
        gtag('consent', 'update', {
          analytics_storage: 'denied',
        });
      }
    }
  ],
  text: {
    banner: {
      description: "<p>Ved at klikke OK accepterer du vores cookies til webstatistik, eller hvis du foretrækker, kan du vælge at afvise dem. Vi bruger en cookie til at huske dit svar. <a href=\"https://your-website.com/cookie-policy\" target=\"_blank\">Cookie Policy.</a></p>",
      acceptAllButtonText: "OK",
      acceptAllButtonAccessibleLabel: "Accept all cookies",
      rejectNonEssentialButtonText: "Nej tak",
      rejectNonEssentialButtonAccessibleLabel: "Reject non-essential",
      preferencesButtonText: "Præferencer",
      preferencesButtonAccessibleLabel: "Toggle preferences"
    },
    preferences: {
      title: " Tilpas dine cookie-præferencer",
      description: "<p>Vi respekterer dit privatliv. Du kan vælge ikke at tillade visse typer cookies. Dine cookie-præferencer gælder for hele vores hjemmeside.</p>",
      creditLinkText: "sliktide",
      creditLinkAccessibleLabel: "sliktide"
    }
  }
});
</script>
