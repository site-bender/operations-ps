import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Halogen_HTML_Core from "../Halogen.HTML.Core/index.js";
import * as Halogen_VDom_Types from "../Halogen.VDom.Types/index.js";
var pure = /* #__PURE__ */ Control_Applicative.pure(Data_Maybe.applicativeMaybe);
var withKeys_ = function (ctor) {
    return function (children) {
        var v = ctor([  ]);
        if (v instanceof Halogen_VDom_Types.Elem) {
            return new Halogen_VDom_Types.Keyed(v.value0, v.value1, v.value2, children);
        };
        return v;
    };
};
var withKeys = function (ctor) {
    return function (props) {
        return function (children) {
            var v = ctor(props)([  ]);
            if (v instanceof Halogen_VDom_Types.Elem) {
                return new Halogen_VDom_Types.Keyed(v.value0, v.value1, v.value2, children);
            };
            return v;
        };
    };
};

// | Creates a Namespaced HTML element that expects indexed properties, with
// | keyed children.
var keyedNS = function ($14) {
    return Halogen_HTML_Core.keyed(pure($14));
};

// | Creates an HTML element that expects indexed properties, with keyed
// | children.
var keyed = /* #__PURE__ */ (function () {
    return Halogen_HTML_Core.keyed(Data_Maybe.Nothing.value);
})();

// | Creates a Namespaced HTML element that expects indexed properties.
var elementNS = function ($15) {
    return Halogen_HTML_Core.element(pure($15));
};

// | Creates an HTML element that expects indexed properties.
var element = /* #__PURE__ */ (function () {
    return Halogen_HTML_Core.element(Data_Maybe.Nothing.value);
})();
var em = /* #__PURE__ */ element("em");
var em_ = /* #__PURE__ */ em([  ]);
var embed = /* #__PURE__ */ element("embed");
var embed_ = /* #__PURE__ */ embed([  ]);
var fieldset = /* #__PURE__ */ element("fieldset");
var fieldset_ = /* #__PURE__ */ fieldset([  ]);
var figcaption = /* #__PURE__ */ element("figcaption");
var figcaption_ = /* #__PURE__ */ figcaption([  ]);
var figure = /* #__PURE__ */ element("figure");
var figure_ = /* #__PURE__ */ figure([  ]);
var footer = /* #__PURE__ */ element("footer");
var footer_ = /* #__PURE__ */ footer([  ]);
var form = /* #__PURE__ */ element("form");
var form_ = /* #__PURE__ */ form([  ]);
var h1 = /* #__PURE__ */ element("h1");
var h1_ = /* #__PURE__ */ h1([  ]);
var h2 = /* #__PURE__ */ element("h2");
var h2_ = /* #__PURE__ */ h2([  ]);
var h3 = /* #__PURE__ */ element("h3");
var h3_ = /* #__PURE__ */ h3([  ]);
var h4 = /* #__PURE__ */ element("h4");
var h4_ = /* #__PURE__ */ h4([  ]);
var h5 = /* #__PURE__ */ element("h5");
var h5_ = /* #__PURE__ */ h5([  ]);
var h6 = /* #__PURE__ */ element("h6");
var h6_ = /* #__PURE__ */ h6([  ]);
var head = /* #__PURE__ */ element("head");
var head_ = /* #__PURE__ */ head([  ]);
var header = /* #__PURE__ */ element("header");
var header_ = /* #__PURE__ */ header([  ]);
var hr = function (props) {
    return element("hr")(props)([  ]);
};
var hr_ = /* #__PURE__ */ hr([  ]);
var html = /* #__PURE__ */ element("html");
var html_ = /* #__PURE__ */ html([  ]);
var i = /* #__PURE__ */ element("i");
var i_ = /* #__PURE__ */ i([  ]);
var iframe = function (props) {
    return element("iframe")(props)([  ]);
};
var img = function (props) {
    return element("img")(props)([  ]);
};
var input = function (props) {
    return element("input")(props)([  ]);
};
var ins = /* #__PURE__ */ element("ins");
var ins_ = /* #__PURE__ */ ins([  ]);
var kbd = /* #__PURE__ */ element("kbd");
var kbd_ = /* #__PURE__ */ kbd([  ]);
var label = /* #__PURE__ */ element("label");
var label_ = /* #__PURE__ */ label([  ]);
var legend = /* #__PURE__ */ element("legend");
var legend_ = /* #__PURE__ */ legend([  ]);
var li = /* #__PURE__ */ element("li");
var li_ = /* #__PURE__ */ li([  ]);
var link = function (props) {
    return element("link")(props)([  ]);
};
var main = /* #__PURE__ */ element("main");
var main_ = /* #__PURE__ */ main([  ]);
var map = /* #__PURE__ */ element("map");
var map_ = /* #__PURE__ */ map([  ]);
var mark = /* #__PURE__ */ element("mark");
var mark_ = /* #__PURE__ */ mark([  ]);
var menu = /* #__PURE__ */ element("menu");
var menu_ = /* #__PURE__ */ menu([  ]);
var menuitem = /* #__PURE__ */ element("menuitem");
var menuitem_ = /* #__PURE__ */ menuitem([  ]);
var meta = function (props) {
    return element("meta")(props)([  ]);
};
var meter = /* #__PURE__ */ element("meter");
var meter_ = /* #__PURE__ */ meter([  ]);
var nav = /* #__PURE__ */ element("nav");
var nav_ = /* #__PURE__ */ nav([  ]);
var noscript = /* #__PURE__ */ element("noscript");
var noscript_ = /* #__PURE__ */ noscript([  ]);
var object = /* #__PURE__ */ element("object");
var object_ = /* #__PURE__ */ object([  ]);
var ol = /* #__PURE__ */ element("ol");
var ol_ = /* #__PURE__ */ ol([  ]);
var optgroup = /* #__PURE__ */ element("optgroup");
var optgroup_ = /* #__PURE__ */ optgroup([  ]);
var option = /* #__PURE__ */ element("option");
var option_ = /* #__PURE__ */ option([  ]);
var output = /* #__PURE__ */ element("output");
var output_ = /* #__PURE__ */ output([  ]);
var p = /* #__PURE__ */ element("p");
var p_ = /* #__PURE__ */ p([  ]);
var param = function (props) {
    return element("param")(props)([  ]);
};
var pre = /* #__PURE__ */ element("pre");
var pre_ = /* #__PURE__ */ pre([  ]);
var progress = /* #__PURE__ */ element("progress");
var progress_ = /* #__PURE__ */ progress([  ]);
var q = /* #__PURE__ */ element("q");
var q_ = /* #__PURE__ */ q([  ]);
var rp = /* #__PURE__ */ element("rp");
var rp_ = /* #__PURE__ */ rp([  ]);
var rt = /* #__PURE__ */ element("rt");
var rt_ = /* #__PURE__ */ rt([  ]);
var ruby = /* #__PURE__ */ element("ruby");
var ruby_ = /* #__PURE__ */ ruby([  ]);
var samp = /* #__PURE__ */ element("samp");
var samp_ = /* #__PURE__ */ samp([  ]);
var script = /* #__PURE__ */ element("script");
var script_ = /* #__PURE__ */ script([  ]);
var section = /* #__PURE__ */ element("section");
var section_ = /* #__PURE__ */ section([  ]);
var select = /* #__PURE__ */ element("select");
var select_ = /* #__PURE__ */ select([  ]);
var small = /* #__PURE__ */ element("small");
var small_ = /* #__PURE__ */ small([  ]);
var source = function (props) {
    return element("source")(props)([  ]);
};
var span = /* #__PURE__ */ element("span");
var span_ = /* #__PURE__ */ span([  ]);
var strong = /* #__PURE__ */ element("strong");
var strong_ = /* #__PURE__ */ strong([  ]);
var style = /* #__PURE__ */ element("style");
var style_ = /* #__PURE__ */ style([  ]);
var sub = /* #__PURE__ */ element("sub");
var sub_ = /* #__PURE__ */ sub([  ]);
var summary = /* #__PURE__ */ element("summary");
var summary_ = /* #__PURE__ */ summary([  ]);
var sup = /* #__PURE__ */ element("sup");
var sup_ = /* #__PURE__ */ sup([  ]);
var table = /* #__PURE__ */ element("table");
var table_ = /* #__PURE__ */ table([  ]);
var tbody = /* #__PURE__ */ element("tbody");
var tbody_ = /* #__PURE__ */ tbody([  ]);
var td = /* #__PURE__ */ element("td");
var td_ = /* #__PURE__ */ td([  ]);
var textarea = function (es) {
    return element("textarea")(es)([  ]);
};
var tfoot = /* #__PURE__ */ element("tfoot");
var tfoot_ = /* #__PURE__ */ tfoot([  ]);
var th = /* #__PURE__ */ element("th");
var th_ = /* #__PURE__ */ th([  ]);
var thead = /* #__PURE__ */ element("thead");
var thead_ = /* #__PURE__ */ thead([  ]);
var time = /* #__PURE__ */ element("time");
var time_ = /* #__PURE__ */ time([  ]);
var title = /* #__PURE__ */ element("title");
var title_ = /* #__PURE__ */ title([  ]);
var tr = /* #__PURE__ */ element("tr");
var tr_ = /* #__PURE__ */ tr([  ]);
var track = function (props) {
    return element("track")(props)([  ]);
};
var u = /* #__PURE__ */ element("u");
var u_ = /* #__PURE__ */ u([  ]);
var ul = /* #__PURE__ */ element("ul");
var ul_ = /* #__PURE__ */ ul([  ]);
var $$var = /* #__PURE__ */ element("var");
var var_ = /* #__PURE__ */ $$var([  ]);
var video = /* #__PURE__ */ element("video");
var video_ = /* #__PURE__ */ video([  ]);
var wbr = function (props) {
    return element("wbr")(props)([  ]);
};
var dt = /* #__PURE__ */ element("dt");
var dt_ = /* #__PURE__ */ dt([  ]);
var dl = /* #__PURE__ */ element("dl");
var dl_ = /* #__PURE__ */ dl([  ]);
var div = /* #__PURE__ */ element("div");
var div_ = /* #__PURE__ */ div([  ]);
var dialog = /* #__PURE__ */ element("dialog");
var dialog_ = /* #__PURE__ */ dialog([  ]);
var dfn = /* #__PURE__ */ element("dfn");
var dfn_ = /* #__PURE__ */ dfn([  ]);
var details = /* #__PURE__ */ element("details");
var details_ = /* #__PURE__ */ details([  ]);
var del = /* #__PURE__ */ element("del");
var del_ = /* #__PURE__ */ del([  ]);
var dd = /* #__PURE__ */ element("dd");
var dd_ = /* #__PURE__ */ dd([  ]);
var datalist = /* #__PURE__ */ element("datalist");
var datalist_ = /* #__PURE__ */ datalist([  ]);
var command = function (props) {
    return element("command")(props)([  ]);
};
var colgroup = /* #__PURE__ */ element("colgroup");
var colgroup_ = /* #__PURE__ */ colgroup([  ]);
var col = function (props) {
    return element("col")(props)([  ]);
};
var code = /* #__PURE__ */ element("code");
var code_ = /* #__PURE__ */ code([  ]);
var cite = /* #__PURE__ */ element("cite");
var cite_ = /* #__PURE__ */ cite([  ]);
var caption = /* #__PURE__ */ element("caption");
var caption_ = /* #__PURE__ */ caption([  ]);
var canvas = function (props) {
    return element("canvas")(props)([  ]);
};
var button = /* #__PURE__ */ element("button");
var button_ = /* #__PURE__ */ button([  ]);
var br = function (props) {
    return element("br")(props)([  ]);
};
var br_ = /* #__PURE__ */ br([  ]);
var body = /* #__PURE__ */ element("body");
var body_ = /* #__PURE__ */ body([  ]);
var blockquote = /* #__PURE__ */ element("blockquote");
var blockquote_ = /* #__PURE__ */ blockquote([  ]);
var bdo = /* #__PURE__ */ element("bdo");
var bdo_ = /* #__PURE__ */ bdo([  ]);
var bdi = /* #__PURE__ */ element("bdi");
var bdi_ = /* #__PURE__ */ bdi([  ]);
var base = function (props) {
    return element("base")(props)([  ]);
};
var b = /* #__PURE__ */ element("b");
var b_ = /* #__PURE__ */ b([  ]);
var audio = /* #__PURE__ */ element("audio");
var audio_ = /* #__PURE__ */ audio([  ]);
var aside = /* #__PURE__ */ element("aside");
var aside_ = /* #__PURE__ */ aside([  ]);
var article = /* #__PURE__ */ element("article");
var article_ = /* #__PURE__ */ article([  ]);
var area = function (props) {
    return element("area")(props)([  ]);
};
var address = /* #__PURE__ */ element("address");
var address_ = /* #__PURE__ */ address([  ]);
var abbr = /* #__PURE__ */ element("abbr");
var abbr_ = /* #__PURE__ */ abbr([  ]);
var a = /* #__PURE__ */ element("a");
var a_ = /* #__PURE__ */ a([  ]);
export {
    element,
    elementNS,
    keyed,
    keyedNS,
    withKeys,
    withKeys_,
    a,
    a_,
    abbr,
    abbr_,
    address,
    address_,
    area,
    article,
    article_,
    aside,
    aside_,
    audio,
    audio_,
    b,
    b_,
    base,
    bdi,
    bdi_,
    bdo,
    bdo_,
    blockquote,
    blockquote_,
    body,
    body_,
    br,
    br_,
    button,
    button_,
    canvas,
    caption,
    caption_,
    cite,
    cite_,
    code,
    code_,
    col,
    colgroup,
    colgroup_,
    command,
    datalist,
    datalist_,
    dd,
    dd_,
    del,
    del_,
    details,
    details_,
    dfn,
    dfn_,
    dialog,
    dialog_,
    div,
    div_,
    dl,
    dl_,
    dt,
    dt_,
    em,
    em_,
    embed,
    embed_,
    fieldset,
    fieldset_,
    figcaption,
    figcaption_,
    figure,
    figure_,
    footer,
    footer_,
    form,
    form_,
    h1,
    h1_,
    h2,
    h2_,
    h3,
    h3_,
    h4,
    h4_,
    h5,
    h5_,
    h6,
    h6_,
    head,
    head_,
    header,
    header_,
    hr,
    hr_,
    html,
    html_,
    i,
    i_,
    iframe,
    img,
    input,
    ins,
    ins_,
    kbd,
    kbd_,
    label,
    label_,
    legend,
    legend_,
    li,
    li_,
    link,
    main,
    main_,
    map,
    map_,
    mark,
    mark_,
    menu,
    menu_,
    menuitem,
    menuitem_,
    meta,
    meter,
    meter_,
    nav,
    nav_,
    noscript,
    noscript_,
    object,
    object_,
    ol,
    ol_,
    optgroup,
    optgroup_,
    option,
    option_,
    output,
    output_,
    p,
    p_,
    param,
    pre,
    pre_,
    progress,
    progress_,
    q,
    q_,
    rp,
    rp_,
    rt,
    rt_,
    ruby,
    ruby_,
    samp,
    samp_,
    script,
    script_,
    section,
    section_,
    select,
    select_,
    small,
    small_,
    source,
    span,
    span_,
    strong,
    strong_,
    style,
    style_,
    sub,
    sub_,
    summary,
    summary_,
    sup,
    sup_,
    table,
    table_,
    tbody,
    tbody_,
    td,
    td_,
    textarea,
    tfoot,
    tfoot_,
    th,
    th_,
    thead,
    thead_,
    time,
    time_,
    title,
    title_,
    tr,
    tr_,
    track,
    u,
    u_,
    ul,
    ul_,
    $$var as var,
    var_,
    video,
    video_,
    wbr
};
