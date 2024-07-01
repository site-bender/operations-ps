// | This module defines types for working with lenses.
// |
// | All optics have their normal name (e.g. `Lens`)
// | and one whose name is prefixed with either "A"
// | or "An" (e.g. `ALens`). Prefixed versions avoid the
// | issue of "impredicativity". To understand that concept
// | more and why prefixed names are sometimes necessary,
// | see the `./docs` folder.
import * as Data_Lens_Internal_Exchange from "../Data.Lens.Internal.Exchange/index.js";
import * as Data_Lens_Internal_Forget from "../Data.Lens.Internal.Forget/index.js";
import * as Data_Lens_Internal_Grating from "../Data.Lens.Internal.Grating/index.js";
import * as Data_Lens_Internal_Indexed from "../Data.Lens.Internal.Indexed/index.js";
import * as Data_Lens_Internal_Market from "../Data.Lens.Internal.Market/index.js";
import * as Data_Lens_Internal_Re from "../Data.Lens.Internal.Re/index.js";
import * as Data_Lens_Internal_Shop from "../Data.Lens.Internal.Shop/index.js";
import * as Data_Lens_Internal_Stall from "../Data.Lens.Internal.Stall/index.js";
import * as Data_Lens_Internal_Tagged from "../Data.Lens.Internal.Tagged/index.js";
import * as Data_Lens_Internal_Wander from "../Data.Lens.Internal.Wander/index.js";

export {
    Exchange
} from "../Data.Lens.Internal.Exchange/index.js";
export {
    Forget
} from "../Data.Lens.Internal.Forget/index.js";
export {
    Indexed
} from "../Data.Lens.Internal.Indexed/index.js";
export {
    Market
} from "../Data.Lens.Internal.Market/index.js";
export {
    Re
} from "../Data.Lens.Internal.Re/index.js";
export {
    Shop
} from "../Data.Lens.Internal.Shop/index.js";
export {
    Stall
} from "../Data.Lens.Internal.Stall/index.js";
export {
    Tagged
} from "../Data.Lens.Internal.Tagged/index.js";
export {
    wander
} from "../Data.Lens.Internal.Wander/index.js";
