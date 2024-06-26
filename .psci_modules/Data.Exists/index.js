import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";

// | The `runExists` function is used to eliminate a value of type `Exists f`. The rank 2 type ensures
// | that the existentially-quantified type does not escape its scope. Since the function is required
// | to work for _any_ type `a`, it will work for the existentially-quantified type.
// |
// | For example, we can write a function to obtain the head of a stream by using `runExists` as follows:
// |
// | ```purescript
// | head :: forall a. Stream a -> a
// | head = runExists head'
// |   where
// |   head' :: forall s. StreamF a s -> a
// |   head' (StreamF s f) = snd (f s)
// | ```
var runExists = Unsafe_Coerce.unsafeCoerce;

// | The `mkExists` function is used to introduce a value of type `Exists f`, by providing a value of
// | type `f a`, for some type `a` which will be hidden in the existentially-quantified type.
// |
// | For example, to create a value of type `Stream Number`, we might use `mkExists` as follows:
// |
// | ```purescript
// | nats :: Stream Number
// | nats = mkExists $ StreamF 0 (\n -> Tuple (n + 1) n)
// | ```
var mkExists = Unsafe_Coerce.unsafeCoerce;
export {
    mkExists,
    runExists
};
