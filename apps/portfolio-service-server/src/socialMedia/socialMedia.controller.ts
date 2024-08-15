import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SocialMediaService } from "./socialMedia.service";
import { SocialMediaControllerBase } from "./base/socialMedia.controller.base";

@swagger.ApiTags("socialMedias")
@common.Controller("socialMedias")
export class SocialMediaController extends SocialMediaControllerBase {
  constructor(protected readonly service: SocialMediaService) {
    super(service);
  }
}
