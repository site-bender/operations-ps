module Sitebender.Json where

import Data.Argonaut.Decode.Class (class DecodeJson, decodeJson)
import Data.Argonaut.Decode.Error (printJsonDecodeError)
import Data.Argonaut.Decode.Generic (genericDecodeJson)
import Data.Argonaut.Decode.Parser (parseJson)
import Data.Either (Either(..))
import Data.Foldable (foldl)
import Data.Functor (map)
import Data.Generic.Rep (class Generic)
import Data.Int (toNumber)
import Data.Show (class Show)
import Data.Show.Generic (genericShow)
import Prelude ((+), ($), show)

data OpResult = OpInt Int | OpNumber Number

derive instance Generic OpResult _
instance Show OpResult where
  show = genericShow

instance DecodeJson OpResult where
  decodeJson a = genericDecodeJson a

type AddOpRow r = (addends :: (Array Operation) | r)

type FromConstantRow r = (value :: OpResult | r)

newtype AddOperation = AddOperation (Record (AddOpRow ()))

derive instance Generic AddOperation _
instance Show OpResult => Show AddOperation where
  show = genericShow

instance DecodeJson AddOperation where
  decodeJson a = genericDecodeJson a

newtype FromConstantOperation = FromConstantOperation (Record (FromConstantRow ()))

derive instance Generic FromConstantOperation _
instance Show OpResult => Show FromConstantOperation where
  show = genericShow

instance DecodeJson FromConstantOperation where
  decodeJson a = genericDecodeJson a

data Operation
  = AddOp AddOperation
  | FromConstantOp FromConstantOperation

derive instance Generic Operation _
instance Show OpResult => Show Operation where
  show = genericShow

instance DecodeJson Operation where
  decodeJson a = genericDecodeJson a

converting
  :: (Int -> Int -> Int) -- What to do on int
  -> (Number -> Number -> Number) -- What to do on float
  -> OpResult
  -> OpResult
  -> OpResult
converting f g =
  case _, _ of
    OpInt x, OpInt y -> OpInt (f x y)
    x, y -> OpNumber (g (toNumber' x) (toNumber' y))

  where
  toNumber' = case _ of
    OpNumber a -> a
    OpInt a -> toNumber a

get :: FromConstantOperation -> OpResult
get (FromConstantOperation r) = r.value

plus :: OpResult -> OpResult -> OpResult
plus = converting (+) (+)

add :: AddOperation -> OpResult
add (AddOperation r) = foldl plus (OpInt 0) (map makeOperate r.addends)

makeOperate :: Operation -> OpResult
makeOperate (AddOp op) = add op
makeOperate (FromConstantOp op) = get op

testMe :: String -> String
testMe s = case parseJson s of
  (Left err) -> printJsonDecodeError err
  (Right json) -> case decodeJson json of
    (Left err) -> printJsonDecodeError err
    (Right op) -> show $ makeOperate op