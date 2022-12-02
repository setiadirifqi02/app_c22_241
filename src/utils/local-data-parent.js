const parents = [
  {
    id: 'parent-01',
    momName: 'Yuyun Yuliana',
    momPhoneNumber: '087318818147',
    momJob: 'Ibu Rumah Tangga',
    dadName: 'Anung Nugraha',
    dadPhoneNumber: '087319816719',
    dadJob: 'Karyawan Swasta',
    phoneNumber: '021-43933045',
    address: 'Jl Letjen Haryono MT Ruko Mataram Plasa B-5, Semarang,Jawa Tengah',
  },
  {
    id: 'parent-02',
    momName: 'Diana Lestari',
    momPhoneNumber: '087318671812',
    momJob: 'Guru',
    dadName: 'Sultan Wibowo',
    dadPhoneNumber: '087315001600',
    dadJob: 'Karyawan BUMN',
    phoneNumber: '0-21-3589098',
    address: 'Jl Kp Sawah 44, Jakarta Utara, Dki Jakarta,',
  },
  {
    id: 'parent-03',
    momName: 'Umi Dayati',
    momPhoneNumber: '087317871006',
    momJob: 'Akuntan',
    dadName: 'Joko Sasongko',
    dadPhoneNumber: '087376499898',
    phoneNumber: ' 021-7340264',
    dadJob: 'Jaksa',
    address: ' Jl Benda Jaya II Bl Y/12-13 RT 005/12 Duren Sawit, jakarta Selata, Dki Jakarta',
  },
  {
    id: 'parent-04',
    momName: 'Riana',
    momPhoneNumber: '087865877685',
    momJob: 'Dosen',
    dadName: 'Leon Tsuki',
    dadPhoneNumber: '087812439076',
    dadJob: 'Arsitek',
    phoneNumber: ' 021-5669662',
    address: ' Jl Letjen South Parman Hotel Ciputra, Dki Jakarta',
  },
  {
    id: 'parent-05',
    momName: 'Nur Hafizah',
    momPhoneNumber: '087865677689',
    momJob: 'Ibu Rumah Tangga',
    dadName: 'Agung Setiono',
    dadPhoneNumber: '087862437776',
    dadJob: 'Tentara',
    phoneNumber: '021-8620465',
    address: 'Jl Bintaro Permai 9, Dki Jakarta',
  },
];

function getAllParents() {
  return parents;
}

function getParent(id) {
  const foundedParent = parents.find((parent) => parent.id === id);
  return foundedParent;
}

export { getAllParents, getParent };