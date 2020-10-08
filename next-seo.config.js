const title = 'Github Trends';
const description =
  'A progressive web app that will list the most starred Github repos that were created in the last 30 days.';

const SEO = {
  title,
  description,
  canonical: 'https://github-trends.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://github-trends.vercel.app/?pg=1',
    title,
    description,
    images: [
      {
        url:
          'https://github-trends.vercel.app/static/images/Most-Popular-GitHub-Repos-social-media.jpg',
        alt: title,
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    handle: '@LarbiSahli',
    site: '@LarbiSahli',
    cardType: 'summary_large_image'
  },
  facebook: {
    appId: 357174838817752
  }
};

export default SEO;
