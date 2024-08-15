import { Module } from "@nestjs/common";
import { SocialMediaModuleBase } from "./base/socialMedia.module.base";
import { SocialMediaService } from "./socialMedia.service";
import { SocialMediaController } from "./socialMedia.controller";
import { SocialMediaResolver } from "./socialMedia.resolver";

@Module({
  imports: [SocialMediaModuleBase],
  controllers: [SocialMediaController],
  providers: [SocialMediaService, SocialMediaResolver],
  exports: [SocialMediaService],
})
export class SocialMediaModule {}
