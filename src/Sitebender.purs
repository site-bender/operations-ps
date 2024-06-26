module Sitebender
  ( Operation(..)
  , Error(..)
  , AddOpRow
  , DivideOpRow
  , MultiplyOpRow
  , NegateOpRow
  , SubtractOpRow
  , AddOperation(..)
  , DivideOperation(..)
  , MultiplyOperation(..)
  , NegateOperation(..)
  , SubtractOperation(..)
  , FromArgumentOpRow
  , FromArgumentOperation(..)
  , FromConstantOperation(..)
  , FromConstantOpRow
  , FromFormFieldOpRow
  , FromFormFieldOperation(..)
  , FromLocalStorageOperation(..)
  , FromSessionStorageOperation(..)
  , FromStorageOpRow
  , createAddOp
  , createDivideOp
  , createFromArgumentOp
  , createFromConstantOp
  , createFromFormFieldOp
  , createFromLocalStorageOp
  , createFromSessionStorageOp
  , createMultiplyOp
  , createNegateOp
  , createSubtractOp
  , getFromFormField
  , getFromLocalStorage
  , getFromSessionStorage
  , getValue
  , makeOperate
  , OpResult(..)
  ) where

import Prelude (Unit, bind, pure, ($), (*), (+), (-), (<>), (==), (>>=))
import Data.Array as A
import Data.Array.NonEmpty (NonEmptyArray, head, last)
import Data.Either (Either(..), note)
import Data.Generic.Rep (class Generic)
import Data.Int (toNumber)
import Data.Int as I
import Data.Maybe (Maybe(..))
import Data.Number as N
import Data.Ring as Ring
import Data.Show (class Show)
import Data.Show.Generic (genericShow)
import Data.String.Common (joinWith)
import Effect (Effect)
import Web.DOM.ParentNode (QuerySelector(..), querySelector)
import Web.HTML (window)
import Web.HTML.HTMLDocument (HTMLDocument, toParentNode)
import Web.HTML.HTMLInputElement (HTMLInputElement, fromElement, value)
import Web.HTML.Window (document, localStorage, sessionStorage)
import Web.Storage.Storage (getItem)

newtype Error = Error (Array String)

derive instance Generic Error _
instance Show Error where
  show = genericShow

concat :: Error -> Error -> Error
concat (Error xs) (Error ys) = Error (A.concat [ xs, ys ])

data OpResult = OpInt Int | OpNumber Number

derive instance Generic OpResult _
instance Show OpResult where
  show = genericShow

type AddOpRow r = (leftAddend :: Operation, rightAddend :: Operation | r)
type DivideOpRow r = (dividend :: Operation, divisor :: Operation | r)
type FromConstantOpRow r = (operand :: OpResult | r)
type FromArgumentOpRow r = (| r)
type FromStorageOpRow r = (key :: String | r)
type FromFormFieldOpRow r =
  ( classList :: Maybe (Array String)
  , form :: Maybe String
  , id :: Maybe String
  , name :: Maybe String
  , selector :: Maybe String
  , tagName :: Maybe String
  | r
  )

type MultiplyOpRow r = (multiplicand :: Operation, multiplier :: Operation | r)
type NegateOpRow r = (operand :: Operation | r)
type SubtractOpRow r = (minuend :: Operation, subtrahend :: Operation | r)

newtype AddOperation = AddOperation (Record (AddOpRow ()))

derive instance Generic AddOperation _
instance Show OpResult => Show AddOperation where
  show = genericShow

newtype DivideOperation = DivideOperation (Record (DivideOpRow ()))

derive instance Generic DivideOperation _
instance Show OpResult => Show DivideOperation where
  show = genericShow

newtype FromConstantOperation = FromConstantOperation (Record (FromConstantOpRow ()))

derive instance Generic FromConstantOperation _
instance Show OpResult => Show FromConstantOperation where
  show = genericShow

newtype FromArgumentOperation = FromArgumentOperation (Record (FromArgumentOpRow ()))

derive instance Generic FromArgumentOperation _
instance Show FromArgumentOperation where
  show = genericShow

newtype FromLocalStorageOperation = FromLocalStorageOperation (Record (FromStorageOpRow ()))

derive instance Generic FromLocalStorageOperation _
instance Show FromLocalStorageOperation where
  show = genericShow

newtype FromSessionStorageOperation = FromSessionStorageOperation (Record (FromStorageOpRow ()))

derive instance Generic FromSessionStorageOperation _
instance Show FromSessionStorageOperation where
  show = genericShow

newtype FromFormFieldOperation = FromFormFieldOperation (Record (FromFormFieldOpRow ()))

derive instance Generic FromFormFieldOperation _
instance Show FromFormFieldOperation where
  show = genericShow

newtype MultiplyOperation = MultiplyOperation (Record (MultiplyOpRow ()))

derive instance Generic MultiplyOperation _
instance Show OpResult => Show MultiplyOperation where
  show = genericShow

newtype NegateOperation = NegateOperation (Record (NegateOpRow ()))

derive instance Generic NegateOperation _
instance Show OpResult => Show NegateOperation where
  show = genericShow

newtype SubtractOperation = SubtractOperation (Record (SubtractOpRow ()))

derive instance Generic SubtractOperation _
instance Show OpResult => Show SubtractOperation where
  show = genericShow

data Operation
  = AddOp AddOperation
  | DivideOp DivideOperation
  | FromArgumentOp FromArgumentOperation
  | FromConstantOp FromConstantOperation
  | FromFormFieldOp FromFormFieldOperation
  | FromLocalStorageOp FromLocalStorageOperation
  | FromSessionStorageOp FromSessionStorageOperation
  | MultiplyOp MultiplyOperation
  | NegateOp NegateOperation
  | SubtractOp SubtractOperation

derive instance Generic Operation _
instance Show OpResult => Show Operation where
  show = genericShow

fromString :: Maybe String -> Maybe OpResult
fromString Nothing = Nothing
fromString (Just s) = case I.fromString s of
  (Just i) -> Just (OpInt i)
  Nothing -> case N.fromString s of
    (Just n) -> Just (OpNumber n)
    Nothing -> Nothing

createAddOp :: Operation -> Operation -> Operation
createAddOp leftAddend rightAddend = AddOp (AddOperation { leftAddend, rightAddend })

createDivideOp :: Operation -> Operation -> Operation
createDivideOp dividend divisor = DivideOp (DivideOperation { dividend, divisor })

createFromArgumentOp :: Unit -> Operation
createFromArgumentOp _ = FromArgumentOp (FromArgumentOperation {})

createFromConstantOp :: OpResult -> Operation
createFromConstantOp operand = FromConstantOp (FromConstantOperation { operand })

createFromLocalStorageOp :: String -> Operation
createFromLocalStorageOp key = FromLocalStorageOp (FromLocalStorageOperation { key })

createFromSessionStorageOp :: String -> Operation
createFromSessionStorageOp key = FromSessionStorageOp (FromSessionStorageOperation { key })

createFromFormFieldOp
  :: { classList :: Maybe (Array String)
     , form :: Maybe String
     , id :: Maybe String
     , name :: Maybe String
     , selector :: Maybe String
     , tagName :: Maybe String
     }
  -> Operation
createFromFormFieldOp record = FromFormFieldOp (FromFormFieldOperation record)

createMultiplyOp :: Operation -> Operation -> Operation
createMultiplyOp multiplicand multiplier = MultiplyOp (MultiplyOperation { multiplicand, multiplier })

createNegateOp :: Operation -> Operation
createNegateOp operand = NegateOp (NegateOperation { operand })

createSubtractOp :: Operation -> Operation -> Operation
createSubtractOp minuend subtrahend = SubtractOp (SubtractOperation { minuend, subtrahend })

sum :: OpResult -> OpResult -> OpResult
sum (OpInt x) (OpInt y) = OpInt $ if y == 0 then 0 else x + y
sum (OpInt x) (OpNumber y) = OpNumber $ if y == 0.0 then 0.0 else (toNumber x) + y
sum (OpNumber x) (OpInt y) = OpNumber $ if y == 0 then 0.0 else x + (toNumber y)
sum (OpNumber x) (OpNumber y) = OpNumber $ if y == 0.0 then 0.0 else x + y

doTheAddition :: Either Error OpResult -> Either Error OpResult -> Either Error OpResult
doTheAddition (Left e1) (Left e2) = Left (concat e1 e2)
doTheAddition (Left e1) _ = Left e1
doTheAddition _ (Left e2) = Left e2
doTheAddition (Right x) (Right y) = Right (sum x y)

add :: AddOperation -> Maybe OpResult -> Effect (Either Error OpResult)
add (AddOperation r) =
  \v -> do
    a1 <- makeOperate r.leftAddend v
    a2 <- makeOperate r.rightAddend v
    pure $ doTheAddition a1 a2

div :: OpResult -> OpResult -> OpResult
div (OpInt x) (OpInt y) = OpInt $ if y == 0 then 0 else x - y
div (OpInt x) (OpNumber y) = OpNumber $ if y == 0.0 then 0.0 else (toNumber x) - y
div (OpNumber x) (OpInt y) = OpNumber $ if y == 0 then 0.0 else x - (toNumber y)
div (OpNumber x) (OpNumber y) = OpNumber $ if y == 0.0 then 0.0 else x - y

doTheDivision :: Either Error OpResult -> Either Error OpResult -> Either Error OpResult
doTheDivision (Left e1) (Left e2) = Left (concat e1 e2)
doTheDivision (Left e1) _ = Left e1
doTheDivision _ (Left e2) = Left e2
doTheDivision (Right x) (Right y) = Right (div x y)

divide :: DivideOperation -> Maybe OpResult -> Effect (Either Error OpResult)
divide (DivideOperation r) =
  ( \v -> do
      dd <- makeOperate r.dividend v
      dr <- makeOperate r.divisor v
      pure $ doTheDivision dd dr
  )

get :: FromConstantOperation -> Maybe OpResult -> Effect (Either Error OpResult)
get (FromConstantOperation r) = (\_ -> pure $ Right r.operand)

getArgValue :: Maybe OpResult -> Effect (Either Error OpResult)
getArgValue (Just v) = pure $ Right v
getArgValue Nothing = pure $ Left (Error [ "Missing argument." ])

getFromArgument :: FromArgumentOperation -> Maybe OpResult -> Effect (Either Error OpResult)
getFromArgument (FromArgumentOperation {}) = getArgValue

getFromLocalStorage :: FromLocalStorageOperation -> Maybe OpResult -> Effect (Either Error OpResult)
getFromLocalStorage (FromLocalStorageOperation { key }) _ = do
  w <- window
  s <- localStorage w
  i <- getItem key s
  pure (note (Error [ "Cannot get value for `" <> key <> "` from local storage." ]) (fromString i))

getFromSessionStorage :: FromSessionStorageOperation -> Maybe OpResult -> Effect (Either Error OpResult)
getFromSessionStorage (FromSessionStorageOperation { key }) _ = do
  w <- window
  s <- sessionStorage w
  i <- getItem key s
  pure (note (Error [ "Cannot get value for `" <> key <> "` from session storage." ]) (fromString i))

createClassListSelector :: Maybe (Array String) -> String
createClassListSelector Nothing = ""
createClassListSelector (Just []) = ""
createClassListSelector (Just arr) = "." <> joinWith "." arr

createFormSelector :: Maybe String -> String
createFormSelector (Just s) = "#" <> s <> " "
createFormSelector Nothing = ""

createIdSelector :: Maybe String -> String
createIdSelector (Just s) = "#" <> s
createIdSelector Nothing = ""

createNameSelector :: Maybe String -> String
createNameSelector (Just s) = "[name=" <> s <> "]"
createNameSelector Nothing = ""

createTagNameSelector :: Maybe String -> String
createTagNameSelector (Just s) = s
createTagNameSelector Nothing = ""

createQuerySelector :: FromFormFieldOperation -> Either Error QuerySelector
createQuerySelector
  ( FromFormFieldOperation
      { classList: Nothing
      , form: Nothing
      , id: Nothing
      , name: Nothing
      , selector: Nothing
      , tagName: Nothing
      }
  ) = Left (Error [ "Cannot find element without a selector." ])
createQuerySelector (FromFormFieldOperation { selector: (Just s) }) = Right (QuerySelector s)
createQuerySelector (FromFormFieldOperation rec) = Right
  ( QuerySelector
      ( createFormSelector rec.form <> createTagNameSelector rec.tagName
          <> createIdSelector rec.id
          <> createClassListSelector rec.classList
          <>
            createNameSelector rec.name
      )
  )

showQS :: QuerySelector -> String
showQS (QuerySelector s) = s

selectFromDocument :: (Either Error QuerySelector) -> HTMLDocument -> Effect (Either Error HTMLInputElement)
selectFromDocument (Right sel) doc = do
  let el = querySelector sel (toParentNode doc)
  m <- el
  pure (note (Error [ "Cannot find element using selector `" <> showQS sel <> "`." ]) (m >>= fromElement))
selectFromDocument (Left err) _ = pure (Left err)

getValue :: (Either Error HTMLInputElement) -> Effect (Either Error OpResult)
getValue (Right el) = do
  v <- value el
  case fromString (Just v) of
    (Just n) -> pure (Right n)
    Nothing -> pure (Left (Error [ "Cannot retrieve value from form input." ]))
getValue (Left err) = pure (Left err)

getFromFormField :: FromFormFieldOperation -> Maybe OpResult -> Effect (Either Error OpResult)
getFromFormField rec _ = do
  w <- window
  d <- document w
  i <- selectFromDocument (createQuerySelector rec) d
  getValue i

mult :: OpResult -> OpResult -> OpResult
mult (OpInt x) (OpInt y) = OpInt $ if y == 0 then 0 else x * y
mult (OpInt x) (OpNumber y) = OpNumber $ if y == 0.0 then 0.0 else (toNumber x) * y
mult (OpNumber x) (OpInt y) = OpNumber $ if y == 0 then 0.0 else x * (toNumber y)
mult (OpNumber x) (OpNumber y) = OpNumber $ if y == 0.0 then 0.0 else x * y

doTheMultiplication :: Either Error OpResult -> Either Error OpResult -> Either Error OpResult
doTheMultiplication (Left e1) (Left e2) = Left (concat e1 e2)
doTheMultiplication (Left e1) _ = Left e1
doTheMultiplication _ (Left e2) = Left e2
doTheMultiplication (Right x) (Right y) = Right (mult x y)

multiply :: MultiplyOperation -> Maybe OpResult -> Effect (Either Error OpResult)
multiply (MultiplyOperation r) =
  \v -> do
    a1 <- makeOperate r.multiplicand v
    a2 <- makeOperate r.multiplier v
    pure $ doTheMultiplication a1 a2

neg :: OpResult -> OpResult
neg (OpInt o) = OpInt $ Ring.negate o
neg (OpNumber o) = OpNumber $ Ring.negate o

doTheNegation :: Either Error OpResult -> Either Error OpResult
doTheNegation (Left e) = Left e
doTheNegation (Right x) = Right (neg x)

negate :: NegateOperation -> Maybe OpResult -> Effect (Either Error OpResult)
negate (NegateOperation r) =
  ( \v -> do
      o <- makeOperate r.operand v
      pure $ doTheNegation o
  )

sub :: OpResult -> OpResult -> OpResult
sub (OpInt x) (OpInt y) = OpInt $ x - y
sub (OpInt x) (OpNumber y) = OpNumber $ (toNumber x) - y
sub (OpNumber x) (OpInt y) = OpNumber $ x - (toNumber y)
sub (OpNumber x) (OpNumber y) = OpNumber $ x - y

doTheSubtraction :: Either Error OpResult -> Either Error OpResult -> Either Error OpResult
doTheSubtraction (Left e1) (Left e2) = Left (concat e1 e2)
doTheSubtraction (Left e1) _ = Left e1
doTheSubtraction _ (Left e2) = Left e2
doTheSubtraction (Right x) (Right y) = Right (sub x y)

subtract :: SubtractOperation -> Maybe OpResult -> Effect (Either Error OpResult)
subtract (SubtractOperation r) =
  ( \v -> do
      m <- makeOperate r.minuend v
      s <- makeOperate r.subtrahend v
      pure $ doTheSubtraction m s
  )

makeOperate :: Operation -> Maybe OpResult -> Effect (Either Error OpResult)
makeOperate (AddOp op) = add op
makeOperate (DivideOp op) = divide op
makeOperate (FromArgumentOp op) = getFromArgument op
makeOperate (FromConstantOp op) = get op
makeOperate (FromLocalStorageOp op) = getFromLocalStorage op
makeOperate (FromSessionStorageOp op) = getFromSessionStorage op
makeOperate (FromFormFieldOp op) = getFromFormField op
makeOperate (MultiplyOp op) = multiply op
makeOperate (NegateOp op) = negate op
makeOperate (SubtractOp op) = subtract op

