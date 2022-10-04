import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.slug === 'rhb-dana-hazeem') {
    return {
      portfolioName: 'RHB Dana Hazeem',
      portfolioCompany: 'RHB ASSET MANAGEMENT SDN BHD',
      latestNavPrice: 0.5221,
      assetClass: 'Balanced',
      sector: 'General',
      geoAllocation: 'Malaysia Focus',
      isApproved: false,
      isShariahCompliant: true,
      isRspSpecialList: true,
      isEsg: false,
      fundSize: 'MYR 10.33 million',
      launchDate: '18 Feb 2013',
      launchPrice: 'MYR 0.50',
      pricingBasis: 'Forward Pricing',
      isWholesaleFund: false
    };
  }
 
  throw error(404, 'Not found');
}