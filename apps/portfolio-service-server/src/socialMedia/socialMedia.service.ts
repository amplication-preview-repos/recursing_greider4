import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SocialMediaServiceBase } from "./base/socialMedia.service.base";

@Injectable()
export class SocialMediaService extends SocialMediaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
