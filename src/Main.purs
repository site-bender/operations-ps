module Main where

import Prelude

import Data.Argonaut.Core (Json, stringify)
import Data.Argonaut.Decode.Class (decodeJson)
import Data.Argonaut.Decode.Error (JsonDecodeError, printJsonDecodeError)
import Data.Argonaut.Decode.Parser (parseJson)
import Data.Argonaut.Encode.Class (encodeJson)
import Data.Either (Either(..))
import Data.Maybe (Maybe(..))
import Effect (Effect)
import Effect.Console (log)
import Sitebender (FromSessionStorageOperation, createFromLocalStorageOp, createFromFormFieldOp)

-- import Sitebender (calculate, getFromArgument)

json :: String
json = """{"tag":"FromSessionStorageOp","values":[{"tag":"FromSessionStorageOperation","values":[]}]}"""

lso :: Json
lso = encodeJson $ createFromLocalStorageOp "w"

ffo :: Json
ffo = encodeJson $ createFromFormFieldOp
  { classList: Nothing
  , form: Nothing
  , id: Nothing
  , name: Just "x"
  , selector: Nothing
  , tagName: Nothing
  }

main :: Effect Unit
main = do
  log "Hi there!"
  log $ case parseJson json of
    (Left err) -> printJsonDecodeError err
    (Right j) -> case (decodeJson j :: Either JsonDecodeError FromSessionStorageOperation) of
      (Left err2) -> printJsonDecodeError err2
      (Right js) -> show js
  log $ show $ (decodeJson lso :: Either JsonDecodeError FromSessionStorageOperation)
  log $ show $ (decodeJson ffo :: Either JsonDecodeError FromSessionStorageOperation)
  log $ stringify lso
  log $ stringify ffo

