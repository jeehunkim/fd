import {
  Category,
  CategorySub,
  CategorySubCode,
  RecordType,
} from './uploadVideo';

export interface VideoList {
  id: string;
  email: string;
  title: string;
  subTitle: string;
  description: string;
  ownerName: string;
  ownerNickName: string;
  ownerChannelName: string;
  ownerProfileIconUrl: string;
  thumbnailUrl: string;
  viewCount: number;
  reportCount: number;
  likesCount: number;
  duration: string;
  category: Category;
  categorySub: CategorySub;
  categorySubCode: CategorySubCode;
  recordType: RecordType;
  contentUrlList: string[];
  poseIndicatorList: string[];
  nodeId: string;
  createdAt: string;
}
