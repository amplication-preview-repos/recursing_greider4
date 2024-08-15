/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SocialMedia } from "./SocialMedia";
import { SocialMediaCountArgs } from "./SocialMediaCountArgs";
import { SocialMediaFindManyArgs } from "./SocialMediaFindManyArgs";
import { SocialMediaFindUniqueArgs } from "./SocialMediaFindUniqueArgs";
import { DeleteSocialMediaArgs } from "./DeleteSocialMediaArgs";
import { SocialMediaService } from "../socialMedia.service";
@graphql.Resolver(() => SocialMedia)
export class SocialMediaResolverBase {
  constructor(protected readonly service: SocialMediaService) {}

  async _socialMediasMeta(
    @graphql.Args() args: SocialMediaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SocialMedia])
  async socialMedias(
    @graphql.Args() args: SocialMediaFindManyArgs
  ): Promise<SocialMedia[]> {
    return this.service.socialMedias(args);
  }

  @graphql.Query(() => SocialMedia, { nullable: true })
  async socialMedia(
    @graphql.Args() args: SocialMediaFindUniqueArgs
  ): Promise<SocialMedia | null> {
    const result = await this.service.socialMedia(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SocialMedia)
  async deleteSocialMedia(
    @graphql.Args() args: DeleteSocialMediaArgs
  ): Promise<SocialMedia | null> {
    try {
      return await this.service.deleteSocialMedia(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}