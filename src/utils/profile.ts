export const projects = [
  { url: 'https://peaceful-croissant-86b888.netlify.app', title: 'Lifepicr' },
  { url: 'https://sarathealthcare.co.uk', title: 'Sarat Healthcare' },
  { url: 'https://www.waazrealty.com', title: 'Waaz Realty' },
  { url: 'https://www.amobileadership.org', title: 'Amobi Education Foundation' },
  { url: 'https://www.eccorp.co', title: 'Eccorp' },
  { url: 'https://www.ectc.ltd', title: 'ECTC' },
  // { url: 'https://goldaesthetics.uk', title: 'Gold Aesthetics' },
  { url: 'https://omotola-ui-app.vercel.app', title: 'C.C.C. Omotola Cathedral Member Portal' },
];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajaloleru-samson' },
  { label: 'GitHub', href: 'https://github.com/samajaloleru' },
  { label: 'WhatsApp', href: 'https://wa.link/irvdk7' },
];

export const EMAIL = 'samsonajaloleru@gmail.com';

export const domain = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '');

export const pad = (n: number) => String(n).padStart(3, '0');
