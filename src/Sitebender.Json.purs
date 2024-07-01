module Sitebender.Json where

import Prelude

import Type.Proxy (Proxy(..))

import Data.Argonaut (jsonParser)
import Data.Argonaut.Core (Json)
import Data.Codec.Argonaut (JsonCodec, JsonDecodeError, decode, object, record, recordProp, int, printJsonDecodeError)
import Data.Either (Either(..))

type AddOpRow r = (leftAddend :: Int, rightAddend :: Int | r)

decodeAddOp :: Json -> Either JsonDecodeError (Record (AddOpRow ()))
decodeAddOp = decode jsonAddOpCodec

jsonAddOpCodec :: JsonCodec (Record (AddOpRow ()))
jsonAddOpCodec =
  object
    "AddOp"
    ( recordProp (Proxy :: _ "leftAddend") int
        $ recordProp (Proxy :: _ "rightAddend") int
        $ record
    )

parseAddOp :: String -> Either String (Record (AddOpRow ()))
parseAddOp str = do
  json <- jsonParser str
  case decodeAddOp json of
    Left err -> Left (printJsonDecodeError err)
    Right opt -> Right opt