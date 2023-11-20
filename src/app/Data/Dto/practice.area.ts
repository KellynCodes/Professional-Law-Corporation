export interface PracticeAreaDto {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const PracticeAreas: PracticeAreaDto[] = [
  {
    id: 1,
    title: 'Personal Injury Law',
    image: '../../../assets/img/practice-area/personal-injury-law.jpeg',
    description:
      'Personal injury law deals with cases where individuals have been physically or emotionally harmed due to the negligence or intentional actions of others. It includes accidents, medical malpractice, product liability, and more.',
  },
  {
    id: 2,
    title: 'Employment Law',
    image: '../../../assets/img/practice-area/employment-law.jpeg',
    description:
      'Employment law focuses on the legal relationship between employers and  employees. It covers issues such as wrongful termination, discrimination, harassment, wage and hour disputes, and workplace safety.',
  },
  {
    id: 3,
    title: 'Business Litigation',
    image: '../../../assets/img/practice-area/business-litigation.jpeg',
    description:
      'Business litigation involves legal disputes related to commercial and business matters. This can include contract disputes, partnership disagreements, intellectual property disputes, and other legal issues that may arise in a business context.',
  },
  {
    id: 4,
    title: 'Real Estate Law',
    image: '../../../assets/img/practice-area/real-estate-law.jpeg',
    description:
      '  Real estate law deals with legal matters related to property, including buying and selling, leasing, zoning, land use, and property disputes. It ensures that transactions are legally sound and that property rights are protected.',
  },
  {
    id: 5,
    title: 'Estate Planning',
    image: '../../../assets/img/practice-area/estate-planning.jpeg',
    description:
      "Estate planning involves the creation of legal documents to manage and distribute one's assets and affairs after death. This may include wills, trusts, powers of attorney, and healthcare directives to ensure the smooth transfer of assets and care decisions.",
  },
  {
    id: 6,
    title: 'Criminal Defense',
    image: '../../../assets/img/practice-area/criminal-defense.jpeg',
    description:
      '  Criminal defense attorneys represent individuals facing criminal charges. They defend clients in court, ensuring their rights are protected and building a strong defense strategy. This practice area covers a range of offenses, from misdemeanors to felonies, and includes legal advocacy during investigations, trials, and plea negotiations.',
  },
];
