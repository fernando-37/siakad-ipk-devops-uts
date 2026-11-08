const BOBOT = { A: 4, AB: 3.5, B: 3, BC: 2.5, C: 2, D: 1, E: 0 };

function poinMutu(matkul) {
  return matkul.reduce((t, m) => t + m.sks * BOBOT[m.nilai], 0);
}

function totalSks(matkul) {
  return matkul.reduce((t, m) => t + m.sks, 0);
}

function hitungIPS(matkul) {
  return poinMutu(matkul) / totalSks(matkul);
}

function hitungIPK(poinLama, sksLama, matkulBaru) {
  return (poinLama + poinMutu(matkulBaru)) / (sksLama + totalSks(matkulBaru));
}

module.exports = { BOBOT, poinMutu, totalSks, hitungIPS, hitungIPK };
