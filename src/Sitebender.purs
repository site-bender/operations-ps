module Sitebender
  ( Operation(..)
  , Error(..)
  , FromArgumentOpRow
  , FromArgumentOperation(..)
  , FromConstantOperation(..)
  , FromConstantOpRow
  , FromFormFieldOpRow
  , FromFormFieldOperation(..)
  , FromLocalStorageOperation(..)
  , FromSessionStorageOperation(..)
  , FromStorageOpRow
  , createFromArgumentOp
  , createFromConstantOp
  -- , createFromFormFieldOp
  -- , createFromLocalStorageOp
  -- , createFromSessionStorageOp
  -- , getFromFormField
  -- , getFromLocalStorage
  -- , getFromSessionStorage
  , getValue
  , makeOperate
  ) where

import Prelude

import Data.Either (Either(..), note)
-- import Data.Foldable (foldl)
import Data.Generic.Rep (class Generic)
import Data.Maybe (Maybe(..))
import Data.Show.Generic (genericShow)
import Data.String.Common (joinWith)
import Effect (Effect)
import Web.DOM.ParentNode (QuerySelector(..), querySelector)
-- import Web.HTML (window)
import Web.HTML.HTMLDocument (HTMLDocument, toParentNode)
import Web.HTML.HTMLInputElement (HTMLInputElement, fromElement, value)

-- import Web.HTML.Window (document, localStorage, sessionStorage)
-- import Web.Storage.Storage (getItem)

newtype Error = Error (Array String)

derive instance Generic Error _
instance Show Error where
  show = genericShow

type AddOpRow a r = (addends :: (Array (Operation a)) | r)
type DivideOpRow a r = (dividend :: (Operation a), divisor :: (Operation a) | r)
type FromConstantOpRow a r = (operand :: a | r)
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

type MultiplyOpRow a r = (multipliers :: (Array (Operation a)) | r)
type NegateOpRow a r = (operand :: (Operation a) | r)
type SubtractOpRow a r = (minuend :: (Operation a), subtrahend :: (Operation a) | r)

newtype AddOperation a = AddOperation (Record ((AddOpRow a) ()))

derive instance Generic (AddOperation a) _
instance Show a => Show (AddOperation a) where
  show = genericShow

newtype DivideOperation a = DivideOperation (Record ((DivideOpRow a) ()))

derive instance Generic (DivideOperation a) _
instance Show a => Show (DivideOperation a) where
  show = genericShow

newtype FromConstantOperation a = FromConstantOperation (Record ((FromConstantOpRow a) ()))

derive instance Generic (FromConstantOperation a) _
instance Show a => Show (FromConstantOperation a) where
  show = genericShow

newtype FromArgumentOperation a = FromArgumentOperation (Record (FromArgumentOpRow ()))

derive instance Generic (FromArgumentOperation a) _
instance Show (FromArgumentOperation a) where
  show = genericShow

newtype FromLocalStorageOperation a = FromLocalStorageOperation (Record (FromStorageOpRow ()))

derive instance Generic (FromLocalStorageOperation a) _
instance Show (FromLocalStorageOperation a) where
  show = genericShow

newtype FromSessionStorageOperation a = FromSessionStorageOperation (Record (FromStorageOpRow ()))

derive instance Generic (FromSessionStorageOperation a) _
instance Show (FromSessionStorageOperation a) where
  show = genericShow

newtype FromFormFieldOperation a = FromFormFieldOperation (Record (FromFormFieldOpRow ()))

derive instance Generic (FromFormFieldOperation a) _
instance Show (FromFormFieldOperation a) where
  show = genericShow

newtype MultiplyOperation a = MultiplyOperation (Record ((MultiplyOpRow a) ()))

derive instance Generic (MultiplyOperation a) _
instance Show a => Show (MultiplyOperation a) where
  show = genericShow

newtype NegateOperation a = NegateOperation (Record ((NegateOpRow a) ()))

derive instance Generic (NegateOperation a) _
instance Show a => Show (NegateOperation a) where
  show = genericShow

newtype SubtractOperation a = SubtractOperation (Record ((SubtractOpRow a) ()))

derive instance Generic (SubtractOperation a) _
instance Show a => Show (SubtractOperation a) where
  show = genericShow

data Operation a
  = FromArgumentOp (FromArgumentOperation a)
  | FromConstantOp (FromConstantOperation a)

-- | FromFormFieldOp (FromFormFieldOperation a)
-- | FromLocalStorageOp (FromLocalStorageOperation a)
-- | FromSessionStorageOp (FromSessionStorageOperation a)

derive instance Generic (Operation a) _
instance Show a => Show (Operation a) where
  show = genericShow

-- createAddOp :: ∀ a. EuclideanRing a => Ord a => Array (Operation a) -> (Operation a)
-- createAddOp addends = AddOp (AddOperation { addends })

-- createDivideOp :: ∀ a. EuclideanRing a => Ord a => Calculation a -> Calculation a -> (Calculation a)
-- createDivideOp dividend divisor = DivideOp (DivideOperation { dividend, divisor })

createFromArgumentOp :: String -> Operation String
createFromArgumentOp _ = FromArgumentOp (FromArgumentOperation {})

createFromConstantOp :: ∀ a. EuclideanRing a => Ord a => a -> Operation a
createFromConstantOp operand = FromConstantOp (FromConstantOperation { operand })

-- createFromLocalStorageOp :: String -> Operation String
-- createFromLocalStorageOp key = FromLocalStorageOp (FromLocalStorageOperation { key })

-- createFromSessionStorageOp :: String -> Operation String
-- createFromSessionStorageOp key = FromSessionStorageOp (FromSessionStorageOperation { key })

-- createFromFormFieldOp
--   :: { classList :: Maybe (Array String)
--      , form :: Maybe String
--      , id :: Maybe String
--      , name :: Maybe String
--      , selector :: Maybe String
--      , tagName :: Maybe String
--      }
--   -> Operation String
-- createFromFormFieldOp record = FromFormFieldOp (FromFormFieldOperation record)

-- createMultiplyOp :: ∀ a. EuclideanRing a => Ord a => Array (Calculation a) -> (Calculation a)
-- createMultiplyOp multipliers = MultiplyOp (MultiplyOperation { multipliers })

-- createNegateOp :: ∀ a. EuclideanRing a => Ord a => Calculation a -> (Calculation a)
-- createNegateOp operand = NegateOp (NegateOperation { operand })

-- createSubtractOp :: ∀ a. EuclideanRing a => Ord a => Calculation a -> Calculation a -> (Calculation a)
-- createSubtractOp minuend subtrahend = SubtractOp (SubtractOperation { minuend, subtrahend })

-- add :: ∀ a. EuclideanRing a => Ord a => (AddOperation a) -> Maybe a -> Effect (Either Error a)
-- add (AddOperation r) = (\v -> foldl (\x y -> x + (makeOperate y v)) zero r.addends)

-- divide :: ∀ a. EuclideanRing a => Ord a => (DivideOperation a) -> Maybe a -> a
-- divide (DivideOperation r) = (\v -> (makeCalculate r.dividend v) / (makeCalculate r.divisor v))

get :: ∀ a. Ord a => (FromConstantOperation a) -> Maybe a -> Effect (Either Error a)
get (FromConstantOperation r) = (\_ -> pure $ Right r.operand)

getArgValue :: ∀ a. Maybe a -> Effect (Either Error a)
getArgValue (Just v) = pure $ Right v
getArgValue Nothing = pure $ Left (Error [ "Missing argument." ])

getFromArgument :: ∀ a. Ord a => FromArgumentOperation a -> Maybe a -> Effect (Either Error a)
getFromArgument (FromArgumentOperation {}) = getArgValue

-- getFromLocalStorage :: ∀ a. EuclideanRing a => Ord a => FromLocalStorageOperation String -> Maybe a -> Effect (Either Error String)
-- getFromLocalStorage (FromLocalStorageOperation { key }) _ = do
--   w <- window
--   s <- localStorage w
--   i <- getItem key s
--   pure (note (Error [ "Cannot get value for `" <> key <> "` from local storage." ]) i)

-- getFromSessionStorage :: ∀ a. FromSessionStorageOperation String -> Maybe a -> Effect (Either Error String)
-- getFromSessionStorage (FromSessionStorageOperation { key }) _ = do
--   w <- window
--   s <- sessionStorage w
--   i <- getItem key s
--   pure (note (Error [ "Cannot get value for `" <> key <> "` from session storage." ]) i)

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

createQuerySelector :: ∀ a. FromFormFieldOperation a -> Either Error QuerySelector
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

getValue :: (Either Error HTMLInputElement) -> Effect (Either Error String)
getValue (Right el) = Right <$> (value el)
getValue (Left err) = pure (Left err)

-- getFromFormField :: ∀ a. FromFormFieldOperation a -> Maybe a -> Effect (Either Error String)
-- getFromFormField rec _ = do
--   w <- window
--   d <- document w
--   i <- selectFromDocument (createQuerySelector rec) d
--   getValue i

-- multiply :: ∀ a. EuclideanRing a => Ord a => (MultiplyOperation a) -> Maybe a -> a
-- multiply (MultiplyOperation r) = (\v -> foldl (\x y -> x * (makeCalculate y v)) one r.multipliers)

-- negate :: ∀ a. EuclideanRing a => Ord a => (NegateOperation a) -> Maybe a -> a
-- negate (NegateOperation r) = (\v -> Ring.negate (makeCalculate r.operand v))

-- subtract :: ∀ a. EuclideanRing a => Ord a => (SubtractOperation a) -> Maybe a -> a
-- subtract (SubtractOperation r) = (\v -> (makeCalculate r.minuend v) - (makeCalculate r.subtrahend v))

makeOperate :: ∀ a. Ord a => Operation a -> Maybe a -> Effect (Either Error a)
makeOperate (FromArgumentOp op) = getFromArgument op
makeOperate (FromConstantOp op) = get op
-- makeOperate (FromLocalStorageOp op) = getFromLocalStorage op
-- makeOperate (FromSessionStorageOp op) = getFromSessionStorage op
-- makeOperate (FromFormFieldOp op) = getFromFormField op

