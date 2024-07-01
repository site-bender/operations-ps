module Main where

import Prelude

import Data.Either (Either(..))
import Data.Maybe (Maybe(..))
import Effect (Effect)
import Effect.Console (log)
import Sitebender (OpResult(..), Operation, createAddOp, createDivideOp, createFromArgumentOp, createFromFormFieldOp, createFromLocalStorageOp, createFromSessionStorageOp, makeOperate)
import Sitebender.Json (AddOpRow, parseAddOp)

input0 :: Operation
input0 = createFromFormFieldOp
  { classList: Nothing
  , form: Nothing
  , id: Nothing
  , name: Just "pi"
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

divideOp :: Operation
divideOp = createDivideOp getAge argOp

jsonAddOp :: Either String (Record (AddOpRow ()))
jsonAddOp = parseAddOp """{"leftAddend":3,"rightAddend":7}"""

main :: Effect Unit
main = do
  count <- makeOperate getCount Nothing
  log $ "Count from local storage: " <> show count

  let missAge = makeOperate (createFromLocalStorageOp "age")
  notAge <- missAge Nothing
  log $ "Age from local storage: " <> show notAge

  age <- makeOperate getAge Nothing
  log $ "Age from session storage: " <> show age

  let missHeight = makeOperate (createFromSessionStorageOp "height")
  notHeight <- missHeight Nothing
  log $ "Height from session storage: " <> show notHeight

  sum <- makeOperate addOp (Just (OpInt 22))
  log $ "Sum of count and age: " <> show sum

  let getInput0 = makeOperate input0
  i0 <- getInput0 Nothing
  log $ "From form input `pi`: " <> show i0

  let getInput1 = makeOperate input1
  i1 <- getInput1 Nothing
  log $ "Bad selectors: " <> show i1

  let getInput2 = makeOperate input2
  i2 <- getInput2 Nothing
  log $ "Bad selector: " <> show i2

  let getInput3 = makeOperate input3
  i3 <- getInput3 Nothing
  log $ "No selector: " <> show i3

  s1 <- makeOperate argOp (Just (OpInt 22))
  log $ "From argument (22): " <> show s1

  quot <- makeOperate divideOp (Just (OpInt 5))
  log $ "Int division age / 5: " <> show quot

  log $ show jsonAddOp