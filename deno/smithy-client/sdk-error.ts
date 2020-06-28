import { SmithyException } from "./exception.ts";
import { MetadataBearer } from "../types/mod.ts";

export type SdkError = Error & SmithyException & MetadataBearer;
