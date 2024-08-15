import { SocialMediaWhereInput } from "./SocialMediaWhereInput";
import { SocialMediaOrderByInput } from "./SocialMediaOrderByInput";

export type SocialMediaFindManyArgs = {
  where?: SocialMediaWhereInput;
  orderBy?: Array<SocialMediaOrderByInput>;
  skip?: number;
  take?: number;
};
