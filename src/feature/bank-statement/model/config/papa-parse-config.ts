import { ITransaction } from "@/entities/transactions/model/types"
import { ParseLocalConfig, RECORD_SEP, UNIT_SEP } from "papaparse"

export const PapaParseConfig: ParseLocalConfig<
  Omit<ITransaction, "type">,
  File
> = {
  delimiter: "", // auto-detect
  quoteChar: '"',
  escapeChar: '"',
  header: true, // Uses first row as keys for objects
  transformHeader: undefined,
  dynamicTyping: true, // Automatically converts strings to numbers/booleans
  preview: 0,
  encoding: "",
  worker: false,
  comments: false,
  step: undefined,
  error: undefined,
  skipEmptyLines: true, // Skips rows that are empty
  chunk: undefined,
  chunkSize: undefined,
  fastMode: undefined,
  beforeFirstChunk: undefined,
  transform: undefined,
  delimitersToGuess: [",", "\t", "|", ";", RECORD_SEP, UNIT_SEP],
  skipFirstNLines: 0,
  complete: () => {},
}
