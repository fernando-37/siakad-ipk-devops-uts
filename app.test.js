const { poinMutu, hitungIPS, hitungIPK } = require("./app");

const semester = [
  { nama: "Algoritma", sks: 3, nilai: "A" },
  { nama: "Basis Data", sks: 3, nilai: "B" },
  { nama: "Jaringan Komputer", sks: 3, nilai: "AB" },
  { nama: "Statistika", sks: 2, nilai: "C" },
  { nama: "Pancasila", sks: 2, nilai: "A" },
];

test("poin mutu semester = 43,5", () => {
  expect(poinMutu(semester)).toBe(43.5);
});

test("IPS = 3,35", () => {
  expect(hitungIPS(semester)).toBeCloseTo(3.35, 2);
});

test("IPK baru = 3,27", () => {
  expect(hitungIPK(195, 60, semester)).toBeCloseTo(3.27, 2);
});
