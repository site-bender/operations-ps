module Main where

import Prelude

import Data.Array.NonEmpty (NonEmptyArray)
import Data.Maybe (Maybe(..), fromJust)
import Effect (Effect)
import Effect.Console (log)
import Sitebender (FromLocalStorageOperation(..), OpResult(..), Operation, createAddOp, createFromArgumentOp, createFromFormFieldOp, createFromLocalStorageOp, createFromSessionStorageOp, makeOperate)

input0 :: Operation
input0 = createFromFormFieldOp
  { classList: Nothing
  , form: Nothing
  , id: Nothing
  , name: Just "name"
  , selector: Nothing
  , tagName: Nothing
  }

input1 :: Operation
input1 = createFromFormFieldOp
  { classList: Just [ "bobs", "yer", "uncle" ]
  , form: Just "formId"
  , id: Just "id"
  , name: Just "name"
  , selector: Nothing
  , tagName: Just "section"
  }

input2 :: Operation
input2 = createFromFormFieldOp
  { classList: Just [ "bobs", "yer", "uncle" ]
  , form: Just "formId"
  , id: Just "id"
  , name: Just "name"
  , selector: Just "my-big-bad-selector"
  , tagName: Just "section"
  }

input3 :: Operation
input3 = createFromFormFieldOp
  { classList: Nothing
  , form: Nothing
  , id: Nothing
  , name: Nothing
  , selector: Nothing
  , tagName: Nothing
  }

argOp :: Operation
argOp = createFromArgumentOp unit

getCount :: Operation
getCount = createFromLocalStorageOp "count"

getAge :: Operation
getAge = createFromSessionStorageOp "age"

addOp :: Operation
addOp = createAddOp getCount getAge

main :: Effect Unit
main = do
  name <- makeOperate getCount Nothing
  log $ show name

  let missAge = makeOperate (createFromLocalStorageOp "age")
  notAge <- missAge Nothing
  log $ show notAge

  age <- makeOperate getAge Nothing
  log $ show age

  let missHeight = makeOperate (createFromSessionStorageOp "height")
  notHeight <- missHeight Nothing
  log $ show notHeight

  sum <- makeOperate addOp Nothing
  log $ "Sum: " <> show sum

  let getInput0 = makeOperate input0
  i0 <- getInput0 Nothing
  log $ show i0

  let getInput1 = makeOperate input1
  i1 <- getInput1 Nothing
  log $ show i1

  let getInput2 = makeOperate input2
  i2 <- getInput2 Nothing
  log $ show i2

  let getInput3 = makeOperate input3
  i3 <- getInput3 Nothing
  log $ show i3

  s1 <- makeOperate argOp (Just (OpInt 22))
  log $ show s1
