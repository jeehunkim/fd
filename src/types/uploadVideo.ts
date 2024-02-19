export enum Category {
  SPORTS = 'SPORTS',
  PROMOTION = 'PROMOTION',
  ENTERTAINMENTS = 'ENTERTAINMENTS',
}

export enum CategorySub {
  'GOLF',
  'BASEBALL',
  'BASKETBALL',
  'TAEKWONDO',
  'FOOTBALL',
  'VOLLEYBALL',
  'SSIREUM',
  'JUDO',
  'FIGURESKATING',
  'HIGHJUMP',
  'BUSINESS',
  'NAB',
  'MWC',
  'BALLET',
  'DANCE',
}

export const objCategorySub = {
  SPORTS: [
    'GOLF',
    'BASEBALL',
    'BASKETBALL',
    'TAEKWONDO',
    'FOOTBALL',
    'VOLLEYBALL',
    'SSIREUM',
    'JUDO',
    'FIGURESKATING',
    'HIGHJUMP',
  ],
  PROMOTION: ['BUSINESS', 'NAB', 'MWC'],
  ENTERTAINMENTS: ['BALLET', 'DANCE'],
};

export const checkCategorySubCode = [
  { GOLF: 'GOLF' },
  { BASEBALL: 'BASEBALL' },
  { BASKETBALL: 'BASKETBALL' },
  { TAEKWONDO: 'TAEKWONDO' },
  { FOOTBALL: 'FOOTBALL' },
  { VOLLEYBALL: 'VOLLEYBALL' },
  { SSIREUM: 'SSIREUM' },
  { JUDO: 'JUDO' },
  { FIGURESKATING: 'FIGURESKATING' },
  { HIGHJUMP: 'HIGHJUMP' },
  { BUSINESS: 'BUSINESS' },
  { NAB: 'NAB' },
  { MWC: 'MWC' },
  { BALLET: 'BALLET' },
  { DANCE: 'DANCE' },
];

export enum CategorySubCode {
  'E_BAL',
  'E_DAN',
  'P_BIZ',
  'P_NAB',
  'S_GLF',
  'S_BSB',
  'S_BKB',
  'S_TKW',
  'S_FBL',
  'S_VOL',
  'S_KTW',
  'S_JUD',
  'S_FSK',
  'S_ATH',
}

export enum RecordType {
  SHORTS = 'SHORTS',
  ASSISTS = 'ASSISTS',
  CASTS = 'CASTS',
}

export interface uploadVideo {
  email: string;
  title: string;
  subTitle: string;
  description: string;
  ownerName: string;
  ownerNickName: string;
  ownerChannelName: string;
  ownerProfileIconUrl: string;
  thumbnailUrl: string;
  duration: string;
  category: Category;
  categorySub: CategorySub;
  categorySubCode: CategorySubCode;
  recordType: RecordType;
  contentUrlList: string;
  poseIndicatorList: string[];
  nodeId: string;
}
