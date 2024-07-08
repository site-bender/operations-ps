module Sitebender where

import Data.Argonaut.Core (Json, fromNumber, fromArray, fromString)
import Data.Argonaut.Decode.Class (class DecodeJson, decodeJson)
import Data.Argonaut.Decode.Error (printJsonDecodeError)
import Data.Argonaut.Decode.Generic (genericDecodeJson)
import Data.Argonaut.Decode.Parser (parseJson)
import Data.Argonaut.Encode.Class (class EncodeJson)
import Data.Argonaut.Encode.Generic (genericEncodeJson)
import Data.Either (Either(..), note)
import Data.Foldable (foldl)
import Data.Functor (map)
import Data.Generic.Rep (class Generic)
import Data.Int as I
import Data.Maybe (Maybe(..))
import Data.Number as N
import Data.Show (class Show)
import Data.Show.Generic (genericShow)
import Data.String.Common (joinWith)
import Data.Validation.Semigroup (V(..))
import Effect (Effect)
import Prelude (bind, pure, ($), (*), (+), (-), (/), (<>), (>>=))
import Web.DOM.ParentNode (QuerySelector(..), querySelector)
import Web.HTML (window)
import Web.HTML.HTMLDocument (HTMLDocument, toParentNode)
import Web.HTML.HTMLInputElement (HTMLInputElement, fromElement, value)
import Web.HTML.Window (document, localStorage, sessionStorage)
import Web.Storage.Storage (getItem)

type Errors = Array String

data OpResult = OpInt Int | OpNumber Number

derive instance Generic OpResult _
instance Show OpResult where
  show = genericShow

instance DecodeJson OpResult where
  decodeJson a = genericDecodeJson a

instance EncodeJson OpResult where
  encodeJson a = genericEncodeJson a

type AddOpRow r = (addends :: (Array Operation) | r)
type DivideOpRow r = (dividend :: Operation, divisor :: Operation | r)
type FromConstantOpRow r = (value :: OpResult | r)

type FromArgumentOpRow :: forall k. k -> k
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

type MultiplyOpRow r = (multipliers :: (Array Operation) | r)
type NegateOpRow r = (operand :: Operation | r)
type SubtractOpRow r = (minuend :: Operation, subtrahend :: Operation | r)

newtype AddOperation = AddOperation (Record (AddOpRow ()))

derive instance Generic AddOperation _
instance Show OpResult => Show AddOperation where
  show = genericShow

instance DecodeJson AddOperation where
  decodeJson a = genericDecodeJson a

instance EncodeJson AddOperation where
  encodeJson a = genericEncodeJson a

newtype DivideOperation = DivideOperation (Record (DivideOpRow ()))

derive instance Generic DivideOperation _
instance Show OpResult => Show DivideOperation where
  show = genericShow

instance DecodeJson DivideOperation where
  decodeJson a = genericDecodeJson a

instance EncodeJson DivideOperation where
  encodeJson a = genericEncodeJson a

newtype FromConstantOperation = FromConstantOperation (Record (FromConstantOpRow ()))

derive instance Generic FromConstantOperation _
instance Show OpResult => Show FromConstantOperation where
  show = genericShow

instance DecodeJson FromConstantOperation where
  decodeJson a = genericDecodeJson a

instance EncodeJson FromConstantOperation where
  encodeJson a = genericEncodeJson a

newtype FromArgumentOperation = FromArgumentOperation (Record (FromArgumentOpRow ()))

derive instance Generic FromArgumentOperation _
instance Show FromArgumentOperation where
  show = genericShow

instance DecodeJson FromArgumentOperation where
  decodeJson a = genericDecodeJson a

instance EncodeJson FromArgumentOperation where
  encodeJson a = genericEncodeJson a

newtype FromLocalStorageOperation = FromLocalStorageOperation (Record (FromStorageOpRow ()))

derive instance Generic FromLocalStorageOperation _
instance Show FromLocalStorageOperation where
  show = genericShow

instance DecodeJson FromLocalStorageOperation where
  decodeJson a = genericDecodeJson a

instance EncodeJson FromLocalStorageOperation where
  encodeJson a = genericEncodeJson a

newtype FromSessionStorageOperation = FromSessionStorageOperation (Record (FromStorageOpRow ()))

derive instance Generic FromSessionStorageOperation _
instance Show FromSessionStorageOperation where
  show = genericShow

instance DecodeJson FromSessionStorageOperation where
  decodeJson a = genericDecodeJson a

instance EncodeJson FromSessionStorageOperation where
  encodeJson a = genericEncodeJson a

newtype FromFormFieldOperation = FromFormFieldOperation (Record (FromFormFieldOpRow ()))

derive instance Generic FromFormFieldOperation _
instance Show FromFormFieldOperation where
  show = genericShow

instance DecodeJson FromFormFieldOperation where
  decodeJson a = genericDecodeJson a

instance EncodeJson FromFormFieldOperation where
  encodeJson a = genericEncodeJson a

newtype MultiplyOperation = MultiplyOperation (Record (MultiplyOpRow ()))

derive instance Generic MultiplyOperation _
instance Show OpResult => Show MultiplyOperation where
  show = genericShow

instance DecodeJson MultiplyOperation where
  decodeJson a = genericDecodeJson a

instance EncodeJson MultiplyOperation where
  encodeJson a = genericEncodeJson a

newtype NegateOperation = NegateOperation (Record (NegateOpRow ()))

derive instance Generic NegateOperation _
instance Show OpResult => Show NegateOperation where
  show = genericShow

instance DecodeJson NegateOperation where
  decodeJson a = genericDecodeJson a

instance EncodeJson NegateOperation where
  encodeJson a = genericEncodeJson a

newtype SubtractOperation = SubtractOperation (Record (SubtractOpRow ()))

derive instance Generic SubtractOperation _
instance Show OpResult => Show SubtractOperation where
  show = genericShow

instance DecodeJson SubtractOperation where
  decodeJson a = genericDecodeJson a

instance EncodeJson SubtractOperation where
  encodeJson a = genericEncodeJson a

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

instance DecodeJson Operation where
  decodeJson a = genericDecodeJson a

instance EncodeJson Operation where
  encodeJson a = genericEncodeJson a

toBinaryOp
  :: (Int -> Int -> Int) -- What to do on int
  -> (Number -> Number -> Number) -- What to do on float
  -> OpResult
  -> OpResult
  -> OpResult
toBinaryOp f g =
  case _, _ of
    OpInt x, OpInt y -> OpInt (f x y)
    x, y -> OpNumber (g (toNumber' x) (toNumber' y))

  where
  toNumber' = case _ of
    OpNumber a -> a
    OpInt a -> I.toNumber a

toOpResult :: Maybe String -> Maybe OpResult
toOpResult Nothing = Nothing
toOpResult (Just s) = case I.fromString s of
  (Just i) -> Just (OpInt i)
  Nothing -> case N.fromString s of
    (Just n) -> Just (OpNumber n)
    Nothing -> Nothing

get :: FromConstantOperation -> Maybe OpResult -> Effect (V Errors OpResult)
get (FromConstantOperation r) =
  (\_ -> pure $ V (Right r.value))

getArgValue :: Maybe OpResult -> Effect (V Errors OpResult)
getArgValue (Just v) = pure $ V (Right v)
getArgValue Nothing = pure $ V (Left [ "Missing argument." ])

getFromArgument :: FromArgumentOperation -> Maybe OpResult -> Effect (V Errors OpResult)
getFromArgument (FromArgumentOperation {}) = getArgValue

applyOp :: (OpResult → OpResult → OpResult) -> Effect (V Errors OpResult) -> Effect (V Errors OpResult) -> Effect (V Errors OpResult)
applyOp f e1 e2 = do
  i <- e1
  n <- e2
  case i of
    (V (Left err1)) -> case n of
      (V (Left err2)) -> pure $ V (Left err2)
      (V (Right _)) -> pure $ V (Left err1)
    (V (Right x)) -> case n of
      (V (Left err3)) -> pure $ V (Left err3)
      (V (Right y)) -> pure $ V (Right (f x y))

flipOp :: Maybe OpResult -> Operation -> Effect (V Errors OpResult)
flipOp v op = makeOperate op v

add :: AddOperation -> Maybe OpResult -> Effect (V Errors OpResult)
add (AddOperation r) = (\v -> foldl (applyOp $ toBinaryOp (+) (+)) (pure (V (Right (OpInt 0)))) (map (flipOp v) r.addends))

multiply :: MultiplyOperation -> Maybe OpResult -> Effect (V Errors OpResult)
multiply (MultiplyOperation r) = (\v -> foldl (applyOp $ toBinaryOp (*) (*)) (pure (V (Right (OpInt 1)))) (map (flipOp v) r.multipliers))

divide :: DivideOperation -> Maybe OpResult -> Effect (V Errors OpResult)
divide (DivideOperation r) =
  ( \v -> do
      dvd <- makeOperate r.dividend v
      dvr <- makeOperate r.divisor v
      let div = toBinaryOp (/) (/)
      case dvd of
        (V (Left err1)) -> case dvr of
          (V (Left err2)) -> pure $ V (Left err2)
          (V (Right _)) -> pure $ V (Left err1)
        (V (Right dv)) -> case dvr of
          (V (Left err3)) -> pure $ V (Left err3)
          (V (Right dr)) -> pure $ V (Right (div dv dr))
  )

getFromLocalStorage :: FromLocalStorageOperation -> Maybe OpResult -> Effect (V Errors OpResult)
getFromLocalStorage (FromLocalStorageOperation { key }) _ = do
  w <- window
  s <- localStorage w
  i <- getItem key s
  pure $ V (note [ "Cannot get value for `" <> key <> "` from local storage." ] (toOpResult i))

getFromSessionStorage :: FromSessionStorageOperation -> Maybe OpResult -> Effect (V Errors OpResult)
getFromSessionStorage (FromSessionStorageOperation { key }) _ = do
  w <- window
  s <- sessionStorage w
  i <- getItem key s
  pure $ V (note [ "Cannot get value for `" <> key <> "` from session storage." ] (toOpResult i))

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

createQuerySelector :: FromFormFieldOperation -> V Errors QuerySelector
createQuerySelector
  ( FromFormFieldOperation
      { classList: Nothing
      , form: Nothing
      , id: Nothing
      , name: Nothing
      , selector: Nothing
      , tagName: Nothing
      }
  ) = V (Left [ "Cannot find element without a selector." ])
createQuerySelector (FromFormFieldOperation { selector: (Just s) }) = V (Right (QuerySelector s))
createQuerySelector (FromFormFieldOperation rec) = V
  ( Right
      ( QuerySelector
          ( createFormSelector rec.form <> createTagNameSelector rec.tagName
              <> createIdSelector rec.id
              <> createClassListSelector rec.classList
              <>
                createNameSelector rec.name
          )
      )
  )

showQS :: QuerySelector -> String
showQS (QuerySelector s) = s

selectFromDocument :: (V (Array String) QuerySelector) -> HTMLDocument -> Effect (V Errors HTMLInputElement)
selectFromDocument (V (Right sel)) doc = do
  m <- querySelector sel (toParentNode doc)
  pure $ V $ note ([ "Cannot find element using selector `" <> showQS sel <> "`." ]) (m >>= fromElement)
selectFromDocument (V (Left err)) _ = pure $ (V (Left err))

getValue :: V Errors HTMLInputElement -> Effect (V Errors OpResult)
getValue vel = case vel of
  (V (Left err)) -> pure $ V (Left err)
  (V (Right el)) -> do
    v <- value el
    case toOpResult (Just v) of
      (Just n) -> pure $ V (Right n)
      Nothing -> pure $ V (Left [ "Cannot retrieve value from form input." ])

getFromFormField :: FromFormFieldOperation -> Maybe OpResult -> Effect (V Errors OpResult)
getFromFormField rec _ = do
  w <- window
  d <- document w
  i <- selectFromDocument (createQuerySelector rec) d
  getValue i

subtract :: SubtractOperation -> Maybe OpResult -> Effect (V Errors OpResult)
subtract (SubtractOperation r) =
  ( \v -> do
      min <- makeOperate r.minuend v
      sbt <- makeOperate r.subtrahend v
      let diff = toBinaryOp (-) (-)
      case min of
        (V (Left err1)) -> case sbt of
          (V (Left err2)) -> pure $ V (Left err2)
          (V (Right _)) -> pure $ V (Left err1)
        (V (Right m)) -> case sbt of
          (V (Left err3)) -> pure $ V (Left err3)
          (V (Right s)) -> pure $ V (Right (diff m s))
  )

negate :: NegateOperation -> Maybe OpResult -> Effect (V Errors OpResult)
negate (NegateOperation r) =
  ( \v -> do
      opd <- makeOperate r.operand v
      let neg = toBinaryOp (-) (-)
      case opd of
        (V (Left err)) -> pure $ V (Left err)
        (V (Right n)) -> pure $ V (Right (neg (OpInt 0) n))
  )

makeOperate :: Operation -> Maybe OpResult -> Effect (V Errors OpResult)
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

calculate :: String -> Maybe OpResult -> Effect Json
calculate s v = case parseJson s of
  (Left err) -> pure $ fromArray [ fromString $ printJsonDecodeError err ]
  (Right json) -> case decodeJson json of
    (Left err) -> pure $ fromArray [ fromString $ printJsonDecodeError err ]
    (Right op) -> case makeOperate op v of
      v1 -> do
        val <- v1
        case val of
          (V (Left err)) -> pure $ fromArray $ map fromString err
          (V (Right (OpNumber n))) -> pure $ fromNumber n
          (V (Right (OpInt i))) -> pure $ fromNumber $ I.toNumber i

just :: ∀ a. a -> Maybe a
just x = Just x

nothing :: ∀ a. a -> Maybe a
nothing _ = Nothing

int :: Int -> OpResult
int i = OpInt i

num :: Number -> OpResult
num n = OpNumber n

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
