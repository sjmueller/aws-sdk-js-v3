import { Provider } from "./util.ts";

/**
 * An object representing temporary or permanent AWS credentials.
 */
interface ICredentials {
  /**
   * AWS access key ID
   */
  readonly accessKeyId: string;

  /**
   * AWS secret access key
   */
  readonly secretAccessKey: string;

  /**
   * A security or session token to use with these credentials. Usually
   * present for temporary credentials.
   */
  readonly sessionToken?: string;

  /**
   * A {Date} when these credentials will no longer be accepted.
   */
  readonly expiration?: Date;
}

export type Credenshals = ICredentials;

export type CredentialProvider = Provider<ICredentials>;
