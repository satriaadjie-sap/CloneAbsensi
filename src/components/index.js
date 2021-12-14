import BottomTabNavigator from './BottomTabNavigator'
import ButtonTambahPengumuman from './ButtonTambahPengumuman'
import HeaderInformation from './HeaderInformation'
import HeaderApps from './HeaderApps'
import InformasiPengisian from './InformasiPengisian'
import NotifPengisian from './NotifPengisian'
import ButtonIsiFormulir from './ButtonIsiFormulir'
import TablePengisian from './TablePengisian'
import TablePengisianMahasiswa from './TablePengisianMahasiswa'
import TableLaporanMahasiswa from './TableLaporanMahasiswa'
import TablePengumuman from './TablePengumuman'
import CellAksiFormulir from './CellAksiFormulir'
import CellAksiFormulirMahasiswa from './CellAksiFormulirMahasiswa'
import FormUbahSandi from './FormUbahSandi'
import ButtonSimpanSandi from './ButtonSimpanSandi'
import HeaderFormAbsesni from './HeaderFormAbsesni'
import InformasiDataDiri from './InformasiDataDiri'
import InformasiDataDiriKry from './InformasiDataDiriKry'
import ButtonTutupPengumuman from './ButtonTutupPengumuman'
import { ButtonTutupPengKry, ButtonTutupPengMhs, ButtonTutupPengSat } from './ButtonTutupPengumuman'
import ButtonLogin from './ButtonLogin'
import CellAksiPengumuman from './CellAksiPengumuman'
import {CellAksiPengumumanKaryawan, CellAksiPengumumanSatgas, CellAksiPengumumanMahasiswa, CellAksiTampilPengumumanSatgas, CellAksiUbahPengumumanSatgas} from './CellAksiPengumuman'

import {FormPengisian_1_1, InformasiTinggalBersama,
    FormPengisian_1_2, ButtonSalin,
    FormPengisian_1_3,
    FormPengisian_1_4,
    FormPengisian_1_5,
    FormPengisian_1_6,
    ButtonBatal1,ButtonSelanjutnya1} from './components_abs1'
import { FormPengisian_2_1,
    FormPengisian_2_2,
    FormPengisian_2_3,
    FormPengisian_2_4,
    FormPengisian_2_5,
    FormPengisian_2_6,
    FormPengisian_2_7,
    ButtonBatal2,ButtonSelanjutnya2 } from './components_abs2'
import {FormPengisian_3_1,  ButtonBatal3, ButtonSelanjutnya3} from './components_abs3'
import {FormPengisian_4_1, ButtonBatal4, ButtonSelanjutnya4,
    RowPertanyaan, InformationPenting} from './components_abs4'
import {FormPengisian_5_1, ButtonSelesai, ButtonUnduhFormulir} from './components_abs5'

import {FormPengisian_1_1Kry, InformasiTinggalBersamaKry,
    FormPengisian_1_2Kry, ButtonSalinKry,
    FormPengisian_1_3Kry,
    FormPengisian_1_4Kry,
    FormPengisian_1_5Kry,
    FormPengisian_1_6Kry,
    ButtonBatal1Kry, ButtonSelanjutnya1Kry} from './components_abs1Kry'
import { FormPengisian_2_1Kry,
    FormPengisian_2_2Kry,
    FormPengisian_2_3Kry,
    FormPengisian_2_4Kry,
    FormPengisian_2_5Kry,
    FormPengisian_2_6Kry,
    FormPengisian_2_7Kry,
    ButtonBatal2Kry,ButtonSelanjutnya2Kry } from './components_abs2Kry'
import {FormPengisian_3_1Kry,  ButtonBatal3Kry, ButtonSelanjutnya3Kry} from './components_abs3Kry'
import {FormPengisian_4_1Kry, ButtonBatal4Kry, ButtonSelanjutnya4Kry,
    RowPertanyaanKry, InformationPentingKry} from './components_abs4Kry'
import {FormPengisian_5_1Kry, ButtonSelesaiKry, ButtonUnduhFormulirKry} from './components_abs5Kry'

import {ButtonKembali, Form_1, Form_2, Form_3, Form_4, Form_1_karyawan,
    TemplateInfo, CheckboxPenyakit,TableKesehatan, TemplateRow} from './components_abs_detail'
import {TablePengumumanKry, TablePengumumanMhs, TablePengumumanSatgas} from './TablePengumuman'

export {TablePengisian, TablePengisianMahasiswa, BottomTabNavigator, HeaderInformation, HeaderApps, TableLaporanMahasiswa,
    InformasiPengisian, NotifPengisian, ButtonIsiFormulir, CellAksiFormulir, CellAksiFormulirMahasiswa,
    TablePengumuman, TablePengumumanMhs, TablePengumumanKry, TablePengumumanSatgas, CellAksiPengumuman, FormUbahSandi, ButtonSimpanSandi,

    HeaderFormAbsesni, InformasiDataDiri,  FormPengisian_1_1, InformasiTinggalBersama,
    FormPengisian_1_2, ButtonSalin, FormPengisian_1_3, FormPengisian_1_4, FormPengisian_1_5,
    FormPengisian_1_6, ButtonBatal1, ButtonSelanjutnya1, FormPengisian_2_1, FormPengisian_2_2,
    
    InformasiDataDiriKry, InformasiTinggalBersamaKry,
    FormPengisian_1_1Kry, FormPengisian_1_2Kry, ButtonSalinKry, FormPengisian_1_3Kry, FormPengisian_1_4Kry, FormPengisian_1_5Kry,
    FormPengisian_1_6Kry, ButtonBatal1Kry, ButtonSelanjutnya1Kry, 

    FormPengisian_2_3, FormPengisian_2_4, FormPengisian_2_5, FormPengisian_2_6,
    FormPengisian_2_7,ButtonBatal2, ButtonSelanjutnya2,

    FormPengisian_2_1Kry, FormPengisian_2_2Kry, FormPengisian_2_3Kry, FormPengisian_2_4Kry, FormPengisian_2_5Kry, FormPengisian_2_6Kry,
    FormPengisian_2_7Kry,ButtonBatal2Kry, ButtonSelanjutnya2Kry,
    
    FormPengisian_3_1, ButtonBatal3, ButtonSelanjutnya3, 
    FormPengisian_3_1Kry, ButtonBatal3Kry, ButtonSelanjutnya3Kry,

    FormPengisian_4_1, ButtonBatal4, ButtonSelanjutnya4, RowPertanyaan, 
    FormPengisian_4_1Kry, ButtonBatal4Kry, ButtonSelanjutnya4Kry, RowPertanyaanKry, InformationPentingKry,
    
    FormPengisian_5_1Kry, ButtonSelesaiKry, ButtonUnduhFormulirKry,
    
    FormPengisian_5_1, ButtonSelesai, ButtonUnduhFormulir,
    InformationPenting, ButtonKembali, Form_1, Form_2, Form_3, Form_4, TemplateInfo, CheckboxPenyakit, Form_1_karyawan,
    
    TableKesehatan, TemplateRow, ButtonTutupPengumuman, ButtonLogin, CellAksiPengumumanSatgas, CellAksiPengumumanKaryawan, CellAksiPengumumanMahasiswa, CellAksiTampilPengumumanSatgas, CellAksiUbahPengumumanSatgas
    ,ButtonTambahPengumuman, ButtonTutupPengKry, ButtonTutupPengMhs, ButtonTutupPengSat};
