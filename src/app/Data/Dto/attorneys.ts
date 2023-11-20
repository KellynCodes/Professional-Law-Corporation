export const Attorneys: AttorneyDto[] = [
  {
    id: 1,
    name: 'James R. Thompson, JD',
    imageUrl: '../../../assets/img/attorneys/attorney-1.jpeg',
    title: 'Criminal Defense',
    about:
      'A seasoned criminal defense attorney, James has successfully represented clients in high-profile cases. His expertise in trial advocacy and thorough understanding of criminal law make him a reliable choice for those facing legal challenges.',
  },
  {
    id: 2,
    name: 'Dr. Michael J. Sanchez',
    imageUrl: '../../../assets/img/attorneys/attorney-2.jpeg',
    title: 'Property law',

    about:
      'Dr. Sanchez, a former research scientist, combines his scientific background with legal expertise to navigate intellectual property law. As a registered patent attorney, he assists clients in protecting their innovations through patents and trademarks.',
  },
  {
    id: 3,
    name: 'Daniel A. Nguyen',
    imageUrl: '../../../assets/img/attorneys/attorney-3.jpeg',
    title: 'Employment Law Advocate',
    about:
      'With a focus on employment law, Daniel advocates for workers rights and fair employment practices. His background labor law and commitment to social justice make him a trusted ally for employees facing workplace challenges.',
  },
  {
    id: 4,
    name: 'Emily L. Bennett',
    imageUrl: '../../../assets/img/attorneys/attorney-4.jpeg',
    title: 'Real Estate Counsel',

    about:
      'Emily specializes in real estate law, offering comprehensive legal services to individuals and businesses involved in property transactions. Her attention to detail and negotiation skills ensure smooth and successful real estate transactions.',
  },
  {
    id: 5,
    name: 'Olivia K. Harper, Attorney at Law',
    imageUrl: '../../../assets/img/attorneys/attorney-5.jpeg',
    title: 'Business litigation',

    about:
      'Olivia brings extensive experience in business litigation, having handled complex disputes for corporate clients. Her strategic mindset, coupled with a commitment to client success, has earned her a reputation for excellence in the business legal arena.',
  },
  {
    id: 6,
    name: 'Alice M. Rodriguez, Esq.',
    imageUrl: '../../../assets/img/attorneys/attorney-6.jpeg',
    title: 'Family law',

    about:
      'With over 15 years of experience in family law, Alice is known for her compassionate approach to sensitive legal matters. She specializes in divorce and child custody cases, offering strategic advice and dedicated advocacy.',
  },
];

export interface AttorneyDto {
  id: number;
  name: string;
  imageUrl: string;
  title: string;
  about: string;
}
