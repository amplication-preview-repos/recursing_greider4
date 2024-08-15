import * as graphql from "@nestjs/graphql";
import { SocialMediaResolverBase } from "./base/socialMedia.resolver.base";
import { SocialMedia } from "./base/SocialMedia";
import { SocialMediaService } from "./socialMedia.service";

@graphql.Resolver(() => SocialMedia)
export class SocialMediaResolver extends SocialMediaResolverBase {
  constructor(protected readonly service: SocialMediaService) {
    super(service);
  }
}
