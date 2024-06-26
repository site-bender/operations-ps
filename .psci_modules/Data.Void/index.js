
// | An uninhabited data type. In other words, one can never create
// | a runtime value of type `Void` because no such value exists.
// |
// | `Void` is useful to eliminate the possibility of a value being created.
// | For example, a value of type `Either Void Boolean` can never have
// | a Left value created in PureScript.
// |
// | This should not be confused with the keyword `void` that commonly appears in
// | C-family languages, such as Java:
// | ```
// | public class Foo {
// |   void doSomething() { System.out.println("hello world!"); }
// | }
// | ```
// |
// | In PureScript, one often uses `Unit` to achieve similar effects as
// | the `void` of C-family languages above.
var Void = function (x) {
    return x;
};

// | Eliminator for the `Void` type.
// | Useful for stating that some code branch is impossible because you've
// | "acquired" a value of type `Void` (which you can't).
// |
// | ```purescript
// | rightOnly :: forall t . Either Void t -> t
// | rightOnly (Left v) = absurd v
// | rightOnly (Right t) = t
// | ```
var absurd = function (a) {
    var spin = function ($copy_v) {
        var $tco_result;
        function $tco_loop(v) {
            $copy_v = v;
            return;
        };
        while (!false) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return spin(a);
};
export {
    absurd
};
