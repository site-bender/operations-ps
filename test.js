import { calculate, int, just, nothing } from "./output/Sitebender";

const toAddOp = (addends) => ({
  tag: "AddOp",
  values: [
    {
      tag: "AddOperation",
      values: [
        {
          addends,
        },
      ],
    },
  ],
});

const toDivideOp = (dividend, divisor) => ({
  tag: "DivideOp",
  values: [
    {
      tag: "DivideOperation",
      values: [
        {
          dividend,
          divisor,
        },
      ],
    },
  ],
});

const toMultiplyOp = (multipliers) => ({
  tag: "MultiplyOp",
  values: [
    {
      tag: "MultiplyOperation",
      values: [
        {
          multipliers,
        },
      ],
    },
  ],
});

const toNegateOp = (operand) => ({
  tag: "NegateOp",
  values: [
    {
      tag: "NegateOperation",
      values: [
        {
          operand,
        },
      ],
    },
  ],
});

const toSubtractOp = (minuend, subtrahend) => ({
  tag: "SubtractOp",
  values: [
    {
      tag: "SubtractOperation",
      values: [
        {
          minuend,
          subtrahend,
        },
      ],
    },
  ],
});

const toConstantOp = (value) => ({
  tag: "FromConstantOp",
  values: [
    {
      tag: "FromConstantOperation",
      values: [
        {
          tag: "OpInt",
          value: {
            tag: "OpInt",
            values: [value],
          },
        },
      ],
    },
  ],
});

const toArgumentOp = () => ({
  tag: "FromArgumentOp",
  values: [
    {
      tag: "FromArgumentOperation",
      values: [{}],
    },
  ],
});

const toFormFieldOp = (selector) => ({
  tag: "FromFormFieldOp",
  values: [
    {
      tag: "FromFormFieldOperation",
      values: [
        {
          classList: selector.classList || null,
          form: selector.form || null,
          id: selector.id || null,
          name: selector.name || null,
          selector: selector.selector || null,
          tagName: selector.tagName || null,
        },
      ],
    },
  ],
});

const toLocalStorageOp = (key) => ({
  tag: "FromLocalStorageOp",
  values: [
    {
      tag: "FromLocalStorageOperation",
      values: [{ key }],
    },
  ],
});

const toSessionStorageOp = (key) => ({
  tag: "FromSessionStorageOp",
  values: [
    {
      tag: "FromSessionStorageOperation",
      values: [{ key }],
    },
  ],
});

sessionStorage.setItem("v", "33");
localStorage.setItem("w", "42");

const json = toAddOp([
  toAddOp([
    toFormFieldOp({ name: "x" }), // 9
    toFormFieldOp({ name: "y" }), // 5
    toFormFieldOp({ name: "z" }), // 11
  ]), // 25
  toAddOp([
    toSessionStorageOp("v"), // 33
    toLocalStorageOp("w"), // 42
    toNegateOp(toConstantOp(6)), // -6
    toArgumentOp(), // 2
  ]), // 71
]); // 96

const json2 = toAddOp([
  toMultiplyOp([toConstantOp(3), toConstantOp(5), toConstantOp(7)]),
  toDivideOp(toSubtractOp(toConstantOp(21), toConstantOp(7)), toArgumentOp()),
]);

const doIt = (j, v) => calculate(JSON.stringify(j))(v)();

// console.log("Yeah, baby!", doIt(json, just(int(3))));

console.log("toLocalStorageOp", JSON.stringify(json, null, 2));

console.log("Oh noes!", doIt(json, just(int(2))));
