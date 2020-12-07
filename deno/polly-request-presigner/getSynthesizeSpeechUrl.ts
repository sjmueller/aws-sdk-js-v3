import { Polly, PollyClient, SynthesizeSpeechCommand, SynthesizeSpeechInput } from "../client-polly/mod.ts";

import { getSignedUrl } from "./getSignedUrls.ts";

export interface PresignedPollyOptions {
  /**
   * Seconds until the presigned URL expires. Defaults to 3600
   */
  expiresIn?: number;
}

/**
 * Generate a signed URL.
 */
export interface PresignedPollyInput {
  /**
   * A pre-configured instance of the AWS.Polly service object to use for requests. The object may bound parameters used by the presigner.
   */
  client: PollyClient;

  /**
   * The input to the synthesizedSpeechCommand
   */
  params: SynthesizeSpeechInput;

  /**
   * Optional configuration of getPresignedUrl
   */
  options?: PresignedPollyOptions;
}

export const getSynthesizeSpeechUrl = async (input: PresignedPollyInput): Promise<String> => {
  const command = new SynthesizeSpeechCommand(input.params);
  const options = input.options || {};
  return await getSignedUrl(input.client, command, options);
};
