module.exports = {
  hostname: 'marketer.frotel.com',
  site_url: '',
  frotel_panel: true,
  base_url: process.env.BASE_API ? process.env.BASE_API : 'https://marketer.frotel.com/marketer/api/v1',
  login_url: process.env.BASE_API ? process.env.BASE_API : 'https://localhost:8080/login',
  shop_url: 'https://froblog.ir/sws',
  parsitak_url: 'https://parsitak.frotel.com/api/v1',
  acc_url: "https://accounts.frotel.com/api/",
  marketplace_url: 'https://marketplace.frotel.com/api/v1',
  social_url: 'https://social.frotel.com/api/v1',
  callcenter_url: 'https://callcenter.frotel.com/api/v1',
  seller_url: 'https://seller.frotel.com/ws/v2',
  drive: {
    url: 'https://drive.frotel.com/api/v1',
    systemId: 123,
    systemName: 'بازاریابی'
  },
};