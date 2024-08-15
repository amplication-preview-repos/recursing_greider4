/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SocialMedia as PrismaSocialMedia } from "@prisma/client";

export class SocialMediaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SocialMediaCountArgs, "select">
  ): Promise<number> {
    return this.prisma.socialMedia.count(args);
  }

  async socialMedias(
    args: Prisma.SocialMediaFindManyArgs
  ): Promise<PrismaSocialMedia[]> {
    return this.prisma.socialMedia.findMany(args);
  }
  async socialMedia(
    args: Prisma.SocialMediaFindUniqueArgs
  ): Promise<PrismaSocialMedia | null> {
    return this.prisma.socialMedia.findUnique(args);
  }
  async createSocialMedia(
    args: Prisma.SocialMediaCreateArgs
  ): Promise<PrismaSocialMedia> {
    return this.prisma.socialMedia.create(args);
  }
  async updateSocialMedia(
    args: Prisma.SocialMediaUpdateArgs
  ): Promise<PrismaSocialMedia> {
    return this.prisma.socialMedia.update(args);
  }
  async deleteSocialMedia(
    args: Prisma.SocialMediaDeleteArgs
  ): Promise<PrismaSocialMedia> {
    return this.prisma.socialMedia.delete(args);
  }
}