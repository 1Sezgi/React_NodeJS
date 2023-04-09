import React, { useState } from 'react';
import Sidebar from './Sidebar.js';
import axios from 'axios';
import style from '../style.css';
import logo from '../img/khaslogo.png';


function BasvuruFormu() {

    const [isim, setIsim] = useState('');
    const [soyisim, setSoyisim] = useState('');
    const [cinsiyet, setCinsiyet] = useState('');
    const [tarih, setTarih] = useState('');
    const [milliyet, setMilliyet] = useState('');
    const [ikinciMilliyet, setIkinciMilliyet] = useState('');
    const [tcNo, setTcNo] = useState('');
    const [disability, setDisability] = useState('');
    const [why, setWhy] = useState('');
    const [ulke, setUlke] = useState('');
    const [il, setIl] = useState('');
    const [ilce, setIlce] = useState('');
    const [mahalle, setMahalle] = useState('');
    const [sokak, setSokak] = useState('');
    const [apartno, setApartno] = useState('');
    const [zip, setZip] = useState('');
    const [universite, setUniversite] = useState('');
    const [fakulte, setFakulte] = useState('');
    const [bolum, setBolum] = useState('');
    const [mezuniyet, setMezuniyet] = useState('');
    const [mezuniyetTarih, setMezuniyetTarih] = useState('');
    const [not, setNot] = useState('');
    const [cv, setCv] = useState('');
    const [niyet, setNiyet] = useState('');
    const [diploma, setDiploma] = useState('');
    const [ingYetkin, setIngYetkin] = useState('');
    const [ikametgah, setIkametgah] = useState('');
    const [pasaport, setPasaport] = useState('');
    const [telefon, setTelefon] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const id = sessionStorage.getItem('id');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post("http://localhost:3001/BasvuruFormuGonder", {
                id, isim, soyisim, cinsiyet, tarih, milliyet, ikinciMilliyet, tcNo, disability,why, ulke, il, ilce, mahalle, sokak, apartno, zip, universite, fakulte, bolum, mezuniyet, mezuniyetTarih, not, cv, niyet, diploma, ingYetkin, ikametgah, pasaport, telefon, email
            });

            if (response.status === 200) {
                setSuccess('Başvurunuz Alındı!');
                setIsim('');
                setSoyisim('');
                setCinsiyet('');
                setTarih('');
                setMilliyet('');
                setIkinciMilliyet('');
                setTcNo('');
                setDisability('');
                setWhy('');
                setUlke('');
                setIl('');
                setIlce('');
                setMahalle('');
                setSokak('');
                setApartno('');
                setZip('');
                setUniversite('');
                setFakulte('');
                setBolum('');
                setMezuniyet('');
                setMezuniyetTarih('');
                setNot('');
                setCv('');
                setNiyet('');
                setDiploma('');
                setIngYetkin('');
                setIkametgah('');
                setPasaport('');
                setTelefon('');
                setEmail('');


                setError('');

            } else {
                setError(response.data.error);
            }


        } catch (err) {
            setError('Veritabanı bağlantısında bir hata oluştu!');
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <Sidebar
                        form_active="active"
                        form_disable="disabled"
                        // gor_to="/portal/BasvuruGoruntule"
                         />
                </div>
                <div className="col-10">
                    <div className='basvuruFormuClass' style={{ maxWidth: "100%" }}>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-12'>
                                    <h2>ERASMUS BASVURU FORMU</h2>
                                </div>
                                <div className='col-12'>
                                    <h4><label className="form-label form-label-left form-label-auto" id="adres" name="adres" for="adres"><b>Kişisel Bilgiler</b></label></h4><hr />
                                </div>
                                <div className='col-lg-4'>
                                    <label for="isim" style={{ minHeight: "13px", ariaHidden: "false" }}>Adınız</label>
                                    <input type="text" className="form-control"
                                        value={isim}
                                        onChange={(e) => setIsim(e.target.value)}
                                        required />
                                </div><br/>
                                <div className='col-lg-4'>
                                    <label for="soyisim" style={{ minHeight: "13px", ariaHidden: "false" }}>Soyadınız</label>
                                    <input type="text" className="form-control"
                                        value={soyisim}
                                        onChange={(e) => setSoyisim(e.target.value)}
                                        minLength="2"
                                        required /><br />
                                </div>
                                <div className='col-lg-4'>
                                    <label className="form-sub-label" for="cins" style={{ minHeight: "13px", ariaHidden: "false" }} />
                                    <select id="cins" name="cins" className="form-select" required
                                        value={cinsiyet}
                                        onChange={(e) => setCinsiyet(e.target.value)}>
                                        <option hidden selected value="">Cinsiyet Seçiniz</option>
                                        <option value="Kadin">Kadın</option>
                                        <option value="Erkek">Erkek</option>
                                        <option value="Diger">Belirtmek İstemiyorum</option>
                                    </select><br />
                                </div>
                                <div className='col-4'>
                                    <label for="tarih" style={{ minHeight: "13px", ariaHidden: "false" }}>Doğum Tarihiniz</label>
                                    <input type="date" className="form-control" id="tarih" name="tarih" required
                                        value={tarih}
                                        onChange={(e) => setTarih(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label className="form-sub-label" for="milliyet" style={{ minHeight: "13px", ariaHidden: "false" }}>Milliyetiniz</label>
                                    <select id="milliyet" name="milliyet" className="form-select" required
                                        value={milliyet}
                                        onChange={(e) => setMilliyet(e.target.value)}>
                                        <option value="">Lütfen Seçiniz</option>
                                        <option value="afghan">Afghan</option>
                                        <option value="albanian">Albanian</option>
                                        <option value="algerian">Algerian</option>
                                        <option value="american">American</option>
                                        <option value="andorran">Andorran</option>
                                        <option value="angolan">Angolan</option>
                                        <option value="antiguans">Antiguans</option>
                                        <option value="argentinean">Argentinean</option>
                                        <option value="armenian">Armenian</option>
                                        <option value="australian">Australian</option>
                                        <option value="austrian">Austrian</option>
                                        <option value="azerbaijani">Azerbaijani</option>
                                        <option value="bahamian">Bahamian</option>
                                        <option value="bahraini">Bahraini</option>
                                        <option value="bangladeshi">Bangladeshi</option>
                                        <option value="barbadian">Barbadian</option>
                                        <option value="barbudans">Barbudans</option>
                                        <option value="batswana">Batswana</option>
                                        <option value="belarusian">Belarusian</option>
                                        <option value="belgian">Belgian</option>
                                        <option value="belizean">Belizean</option>
                                        <option value="beninese">Beninese</option>
                                        <option value="bhutanese">Bhutanese</option>
                                        <option value="bolivian">Bolivian</option>
                                        <option value="bosnian">Bosnian</option>
                                        <option value="brazilian">Brazilian</option>
                                        <option value="british">British</option>
                                        <option value="bruneian">Bruneian</option>
                                        <option value="bulgarian">Bulgarian</option>
                                        <option value="burkinabe">Burkinabe</option>
                                        <option value="burmese">Burmese</option>
                                        <option value="burundian">Burundian</option>
                                        <option value="cambodian">Cambodian</option>
                                        <option value="cameroonian">Cameroonian</option>
                                        <option value="canadian">Canadian</option>
                                        <option value="cape verdean">Cape Verdean</option>
                                        <option value="central african">Central African</option>
                                        <option value="chadian">Chadian</option>
                                        <option value="chilean">Chilean</option>
                                        <option value="chinese">Chinese</option>
                                        <option value="colombian">Colombian</option>
                                        <option value="comoran">Comoran</option>
                                        <option value="congolese">Congolese</option>
                                        <option value="costa rican">Costa Rican</option>
                                        <option value="croatian">Croatian</option>
                                        <option value="cuban">Cuban</option>
                                        <option value="cypriot">Cypriot</option>
                                        <option value="czech">Czech</option>
                                        <option value="danish">Danish</option>
                                        <option value="djibouti">Djibouti</option>
                                        <option value="dominican">Dominican</option>
                                        <option value="dutch">Dutch</option>
                                        <option value="east timorese">East Timorese</option>
                                        <option value="ecuadorean">Ecuadorean</option>
                                        <option value="egyptian">Egyptian</option>
                                        <option value="emirian">Emirian</option>
                                        <option value="equatorial guinean">Equatorial Guinean</option>
                                        <option value="eritrean">Eritrean</option>
                                        <option value="estonian">Estonian</option>
                                        <option value="ethiopian">Ethiopian</option>
                                        <option value="fijian">Fijian</option>
                                        <option value="filipino">Filipino</option>
                                        <option value="finnish">Finnish</option>
                                        <option value="french">French</option>
                                        <option value="gabonese">Gabonese</option>
                                        <option value="gambian">Gambian</option>
                                        <option value="georgian">Georgian</option>
                                        <option value="german">German</option>
                                        <option value="ghanaian">Ghanaian</option>
                                        <option value="greek">Greek</option>
                                        <option value="grenadian">Grenadian</option>
                                        <option value="guatemalan">Guatemalan</option>
                                        <option value="guinea-bissauan">Guinea-Bissauan</option>
                                        <option value="guinean">Guinean</option>
                                        <option value="guyanese">Guyanese</option>
                                        <option value="haitian">Haitian</option>
                                        <option value="herzegovinian">Herzegovinian</option>
                                        <option value="honduran">Honduran</option>
                                        <option value="hungarian">Hungarian</option>
                                        <option value="icelander">Icelander</option>
                                        <option value="indian">Indian</option>
                                        <option value="indonesian">Indonesian</option>
                                        <option value="iranian">Iranian</option>
                                        <option value="iraqi">Iraqi</option>
                                        <option value="irish">Irish</option>
                                        <option value="israeli">Israeli</option>
                                        <option value="italian">Italian</option>
                                        <option value="ivorian">Ivorian</option>
                                        <option value="jamaican">Jamaican</option>
                                        <option value="japanese">Japanese</option>
                                        <option value="jordanian">Jordanian</option>
                                        <option value="kazakhstani">Kazakhstani</option>
                                        <option value="kenyan">Kenyan</option>
                                        <option value="kittian and nevisian">Kittian and Nevisian</option>
                                        <option value="kuwaiti">Kuwaiti</option>
                                        <option value="kyrgyz">Kyrgyz</option>
                                        <option value="laotian">Laotian</option>
                                        <option value="latvian">Latvian</option>
                                        <option value="lebanese">Lebanese</option>
                                        <option value="liberian">Liberian</option>
                                        <option value="libyan">Libyan</option>
                                        <option value="liechtensteiner">Liechtensteiner</option>
                                        <option value="lithuanian">Lithuanian</option>
                                        <option value="luxembourger">Luxembourger</option>
                                        <option value="macedonian">Macedonian</option>
                                        <option value="malagasy">Malagasy</option>
                                        <option value="malawian">Malawian</option>
                                        <option value="malaysian">Malaysian</option>
                                        <option value="maldivan">Maldivan</option>
                                        <option value="malian">Malian</option>
                                        <option value="maltese">Maltese</option>
                                        <option value="marshallese">Marshallese</option>
                                        <option value="mauritanian">Mauritanian</option>
                                        <option value="mauritian">Mauritian</option>
                                        <option value="mexican">Mexican</option>
                                        <option value="micronesian">Micronesian</option>
                                        <option value="moldovan">Moldovan</option>
                                        <option value="monacan">Monacan</option>
                                        <option value="mongolian">Mongolian</option>
                                        <option value="moroccan">Moroccan</option>
                                        <option value="mosotho">Mosotho</option>
                                        <option value="motswana">Motswana</option>
                                        <option value="mozambican">Mozambican</option>
                                        <option value="namibian">Namibian</option>
                                        <option value="nauruan">Nauruan</option>
                                        <option value="nepalese">Nepalese</option>
                                        <option value="new zealander">New Zealander</option>
                                        <option value="ni-vanuatu">Ni-Vanuatu</option>
                                        <option value="nicaraguan">Nicaraguan</option>
                                        <option value="nigerien">Nigerien</option>
                                        <option value="north korean">North Korean</option>
                                        <option value="northern irish">Northern Irish</option>
                                        <option value="norwegian">Norwegian</option>
                                        <option value="omani">Omani</option>
                                        <option value="pakistani">Pakistani</option>
                                        <option value="palauan">Palauan</option>
                                        <option value="panamanian">Panamanian</option>
                                        <option value="papua new guinean">Papua New Guinean</option>
                                        <option value="paraguayan">Paraguayan</option>
                                        <option value="peruvian">Peruvian</option>
                                        <option value="polish">Polish</option>
                                        <option value="portuguese">Portuguese</option>
                                        <option value="qatari">Qatari</option>
                                        <option value="romanian">Romanian</option>
                                        <option value="russian">Russian</option>
                                        <option value="rwandan">Rwandan</option>
                                        <option value="saint lucian">Saint Lucian</option>
                                        <option value="salvadoran">Salvadoran</option>
                                        <option value="samoan">Samoan</option>
                                        <option value="san marinese">San Marinese</option>
                                        <option value="sao tomean">Sao Tomean</option>
                                        <option value="saudi">Saudi</option>
                                        <option value="scottish">Scottish</option>
                                        <option value="senegalese">Senegalese</option>
                                        <option value="serbian">Serbian</option>
                                        <option value="seychellois">Seychellois</option>
                                        <option value="sierra leonean">Sierra Leonean</option>
                                        <option value="singaporean">Singaporean</option>
                                        <option value="slovakian">Slovakian</option>
                                        <option value="slovenian">Slovenian</option>
                                        <option value="solomon islander">Solomon Islander</option>
                                        <option value="somali">Somali</option>
                                        <option value="south african">South African</option>
                                        <option value="south korean">South Korean</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="sri lankan">Sri Lankan</option>
                                        <option value="sudanese">Sudanese</option>
                                        <option value="surinamer">Surinamer</option>
                                        <option value="swazi">Swazi</option>
                                        <option value="swedish">Swedish</option>
                                        <option value="swiss">Swiss</option>
                                        <option value="syrian">Syrian</option>
                                        <option value="taiwanese">Taiwanese</option>
                                        <option value="tajik">Tajik</option>
                                        <option value="tanzanian">Tanzanian</option>
                                        <option value="thai">Thai</option>
                                        <option value="togolese">Togolese</option>
                                        <option value="tongan">Tongan</option>
                                        <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                        <option value="tunisian">Tunisian</option>
                                        <option value="turkish">Turkish</option>
                                        <option value="tuvaluan">Tuvaluan</option>
                                        <option value="ugandan">Ugandan</option>
                                        <option value="ukrainian">Ukrainian</option>
                                        <option value="uruguayan">Uruguayan</option>
                                        <option value="uzbekistani">Uzbekistani</option>
                                        <option value="venezuelan">Venezuelan</option>
                                        <option value="vietnamese">Vietnamese</option>
                                        <option value="welsh">Welsh</option>
                                        <option value="yemenite">Yemenite</option>
                                        <option value="zambian">Zambian</option>
                                        <option value="zimbabwean">Zimbabwean</option>
                                        <option value="other">Diğer</option>
                                    </select><br />
                                </div>
                                <div className='col-4'>
                                    <label className="form-sub-label" for="ikincimilliyet" style={{ minHeight: "13px", ariaHidden: "false" }}>Varsa İkinci Milliyetiniz</label>
                                    <select id="ikincimilliyet" name="ikincimilliyet" className="form-select"
                                        value={ikinciMilliyet}
                                        onChange={(e) => setIkinciMilliyet(e.target.value)}>
                                        <option value="">Lütfen Seçiniz</option>
                                        <option value="Yok">Yok</option>
                                        <option value="afghan">Afghan</option>
                                        <option value="albanian">Albanian</option>
                                        <option value="algerian">Algerian</option>
                                        <option value="american">American</option>
                                        <option value="andorran">Andorran</option>
                                        <option value="angolan">Angolan</option>
                                        <option value="antiguans">Antiguans</option>
                                        <option value="argentinean">Argentinean</option>
                                        <option value="armenian">Armenian</option>
                                        <option value="australian">Australian</option>
                                        <option value="austrian">Austrian</option>
                                        <option value="azerbaijani">Azerbaijani</option>
                                        <option value="bahamian">Bahamian</option>
                                        <option value="bahraini">Bahraini</option>
                                        <option value="bangladeshi">Bangladeshi</option>
                                        <option value="barbadian">Barbadian</option>
                                        <option value="barbudans">Barbudans</option>
                                        <option value="batswana">Batswana</option>
                                        <option value="belarusian">Belarusian</option>
                                        <option value="belgian">Belgian</option>
                                        <option value="belizean">Belizean</option>
                                        <option value="beninese">Beninese</option>
                                        <option value="bhutanese">Bhutanese</option>
                                        <option value="bolivian">Bolivian</option>
                                        <option value="bosnian">Bosnian</option>
                                        <option value="brazilian">Brazilian</option>
                                        <option value="british">British</option>
                                        <option value="bruneian">Bruneian</option>
                                        <option value="bulgarian">Bulgarian</option>
                                        <option value="burkinabe">Burkinabe</option>
                                        <option value="burmese">Burmese</option>
                                        <option value="burundian">Burundian</option>
                                        <option value="cambodian">Cambodian</option>
                                        <option value="cameroonian">Cameroonian</option>
                                        <option value="canadian">Canadian</option>
                                        <option value="cape verdean">Cape Verdean</option>
                                        <option value="central african">Central African</option>
                                        <option value="chadian">Chadian</option>
                                        <option value="chilean">Chilean</option>
                                        <option value="chinese">Chinese</option>
                                        <option value="colombian">Colombian</option>
                                        <option value="comoran">Comoran</option>
                                        <option value="congolese">Congolese</option>
                                        <option value="costa rican">Costa Rican</option>
                                        <option value="croatian">Croatian</option>
                                        <option value="cuban">Cuban</option>
                                        <option value="cypriot">Cypriot</option>
                                        <option value="czech">Czech</option>
                                        <option value="danish">Danish</option>
                                        <option value="djibouti">Djibouti</option>
                                        <option value="dominican">Dominican</option>
                                        <option value="dutch">Dutch</option>
                                        <option value="east timorese">East Timorese</option>
                                        <option value="ecuadorean">Ecuadorean</option>
                                        <option value="egyptian">Egyptian</option>
                                        <option value="emirian">Emirian</option>
                                        <option value="equatorial guinean">Equatorial Guinean</option>
                                        <option value="eritrean">Eritrean</option>
                                        <option value="estonian">Estonian</option>
                                        <option value="ethiopian">Ethiopian</option>
                                        <option value="fijian">Fijian</option>
                                        <option value="filipino">Filipino</option>
                                        <option value="finnish">Finnish</option>
                                        <option value="french">French</option>
                                        <option value="gabonese">Gabonese</option>
                                        <option value="gambian">Gambian</option>
                                        <option value="georgian">Georgian</option>
                                        <option value="german">German</option>
                                        <option value="ghanaian">Ghanaian</option>
                                        <option value="greek">Greek</option>
                                        <option value="grenadian">Grenadian</option>
                                        <option value="guatemalan">Guatemalan</option>
                                        <option value="guinea-bissauan">Guinea-Bissauan</option>
                                        <option value="guinean">Guinean</option>
                                        <option value="guyanese">Guyanese</option>
                                        <option value="haitian">Haitian</option>
                                        <option value="herzegovinian">Herzegovinian</option>
                                        <option value="honduran">Honduran</option>
                                        <option value="hungarian">Hungarian</option>
                                        <option value="icelander">Icelander</option>
                                        <option value="indian">Indian</option>
                                        <option value="indonesian">Indonesian</option>
                                        <option value="iranian">Iranian</option>
                                        <option value="iraqi">Iraqi</option>
                                        <option value="irish">Irish</option>
                                        <option value="israeli">Israeli</option>
                                        <option value="italian">Italian</option>
                                        <option value="ivorian">Ivorian</option>
                                        <option value="jamaican">Jamaican</option>
                                        <option value="japanese">Japanese</option>
                                        <option value="jordanian">Jordanian</option>
                                        <option value="kazakhstani">Kazakhstani</option>
                                        <option value="kenyan">Kenyan</option>
                                        <option value="kittian and nevisian">Kittian and Nevisian</option>
                                        <option value="kuwaiti">Kuwaiti</option>
                                        <option value="kyrgyz">Kyrgyz</option>
                                        <option value="laotian">Laotian</option>
                                        <option value="latvian">Latvian</option>
                                        <option value="lebanese">Lebanese</option>
                                        <option value="liberian">Liberian</option>
                                        <option value="libyan">Libyan</option>
                                        <option value="liechtensteiner">Liechtensteiner</option>
                                        <option value="lithuanian">Lithuanian</option>
                                        <option value="luxembourger">Luxembourger</option>
                                        <option value="macedonian">Macedonian</option>
                                        <option value="malagasy">Malagasy</option>
                                        <option value="malawian">Malawian</option>
                                        <option value="malaysian">Malaysian</option>
                                        <option value="maldivan">Maldivan</option>
                                        <option value="malian">Malian</option>
                                        <option value="maltese">Maltese</option>
                                        <option value="marshallese">Marshallese</option>
                                        <option value="mauritanian">Mauritanian</option>
                                        <option value="mauritian">Mauritian</option>
                                        <option value="mexican">Mexican</option>
                                        <option value="micronesian">Micronesian</option>
                                        <option value="moldovan">Moldovan</option>
                                        <option value="monacan">Monacan</option>
                                        <option value="mongolian">Mongolian</option>
                                        <option value="moroccan">Moroccan</option>
                                        <option value="mosotho">Mosotho</option>
                                        <option value="motswana">Motswana</option>
                                        <option value="mozambican">Mozambican</option>
                                        <option value="namibian">Namibian</option>
                                        <option value="nauruan">Nauruan</option>
                                        <option value="nepalese">Nepalese</option>
                                        <option value="new zealander">New Zealander</option>
                                        <option value="ni-vanuatu">Ni-Vanuatu</option>
                                        <option value="nicaraguan">Nicaraguan</option>
                                        <option value="nigerien">Nigerien</option>
                                        <option value="north korean">North Korean</option>
                                        <option value="northern irish">Northern Irish</option>
                                        <option value="norwegian">Norwegian</option>
                                        <option value="omani">Omani</option>
                                        <option value="pakistani">Pakistani</option>
                                        <option value="palauan">Palauan</option>
                                        <option value="panamanian">Panamanian</option>
                                        <option value="papua new guinean">Papua New Guinean</option>
                                        <option value="paraguayan">Paraguayan</option>
                                        <option value="peruvian">Peruvian</option>
                                        <option value="polish">Polish</option>
                                        <option value="portuguese">Portuguese</option>
                                        <option value="qatari">Qatari</option>
                                        <option value="romanian">Romanian</option>
                                        <option value="russian">Russian</option>
                                        <option value="rwandan">Rwandan</option>
                                        <option value="saint lucian">Saint Lucian</option>
                                        <option value="salvadoran">Salvadoran</option>
                                        <option value="samoan">Samoan</option>
                                        <option value="san marinese">San Marinese</option>
                                        <option value="sao tomean">Sao Tomean</option>
                                        <option value="saudi">Saudi</option>
                                        <option value="scottish">Scottish</option>
                                        <option value="senegalese">Senegalese</option>
                                        <option value="serbian">Serbian</option>
                                        <option value="seychellois">Seychellois</option>
                                        <option value="sierra leonean">Sierra Leonean</option>
                                        <option value="singaporean">Singaporean</option>
                                        <option value="slovakian">Slovakian</option>
                                        <option value="slovenian">Slovenian</option>
                                        <option value="solomon islander">Solomon Islander</option>
                                        <option value="somali">Somali</option>
                                        <option value="south african">South African</option>
                                        <option value="south korean">South Korean</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="sri lankan">Sri Lankan</option>
                                        <option value="sudanese">Sudanese</option>
                                        <option value="surinamer">Surinamer</option>
                                        <option value="swazi">Swazi</option>
                                        <option value="swedish">Swedish</option>
                                        <option value="swiss">Swiss</option>
                                        <option value="syrian">Syrian</option>
                                        <option value="taiwanese">Taiwanese</option>
                                        <option value="tajik">Tajik</option>
                                        <option value="tanzanian">Tanzanian</option>
                                        <option value="thai">Thai</option>
                                        <option value="togolese">Togolese</option>
                                        <option value="tongan">Tongan</option>
                                        <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                        <option value="tunisian">Tunisian</option>
                                        <option value="turkish">Turkish</option>
                                        <option value="tuvaluan">Tuvaluan</option>
                                        <option value="ugandan">Ugandan</option>
                                        <option value="ukrainian">Ukrainian</option>
                                        <option value="uruguayan">Uruguayan</option>
                                        <option value="uzbekistani">Uzbekistani</option>
                                        <option value="venezuelan">Venezuelan</option>
                                        <option value="vietnamese">Vietnamese</option>
                                        <option value="welsh">Welsh</option>
                                        <option value="yemenite">Yemenite</option>
                                        <option value="zambian">Zambian</option>
                                        <option value="zimbabwean">Zimbabwean</option>
                                        <option value="other">Diğer</option>
                                    </select><br />
                                </div>
                                <div className='col-4'>
                                    <label for="tcNo" style={{ minHeight: "13px", ariaHidden: "false" }}>Vatandaşlık Numaranız</label>
                                    <input type="number" className="form-control" name="tcNo" id="tcNo" required
                                        value={tcNo}
                                        onChange={(e) => setTcNo(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="engellilik" >Engel Durumu</label>
                                    <select className="form-select"
                                        name="disability"
                                        id="disability"
                                        value={disability} 
                                        onChange={(e) => setDisability(e.target.value)}
                                        required>
                                        <option value="">Lütfen Seçiniz</option>
                                        <option value="Evet">Evet</option>
                                        <option value="Hayir">Hayır</option>
                                    </select><br />
                                </div>
                                <div className='col-4'>
                                    <textarea type="text" rows="4" cols="50" class="form-control text-muted:(Optional)"
                                        placeholder="Varsa kısaca açıklayınız"
                                        id="why"
                                        name="why"
                                        value={why} 
                                        onChange={(e) => setWhy(e.target.value)}
                                    /><br />
                                </div>
                                <div className='col-12'>
                                    <h4><label className="form-label form-label-left form-label-auto" id="adres" name="adres" for="adres"><b>Adres Bilgileri</b></label></h4><hr />
                                </div>
                                <div className='col-4'>
                                    <label for="ulke" >Yaşadığınız Ülke</label>
                                    <select name="ulke" className="form-select" id="ulke" required
                                        value={ulke}
                                        onChange={(e) => setUlke(e.target.value)}>
                                        <option value="">Lütfen Seçiniz</option>
                                        <option value="TR">Türkiye</option>
                                        <option value="VI">ABD Virgin Adaları</option>
                                        <option value="AF">Afganistan</option>
                                        <option value="AX">Aland Adaları</option>
                                        <option value="DE">Almanya</option>
                                        <option value="US">Amerika Birleşik Devletleri</option>
                                        <option value="UM">Amerika Birleşik Devletleri Küçük Dış Adaları</option>
                                        <option value="AS">Amerikan Samoası</option>
                                        <option value="AD">Andora</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarktika</option>
                                        <option value="AG">Antigua ve Barbuda</option>
                                        <option value="AR">Arjantin</option>
                                        <option value="AL">Arnavutluk</option>
                                        <option value="AW">Aruba</option>
                                        <option value="QU">Avrupa Birliği</option>
                                        <option value="AU">Avustralya</option>
                                        <option value="AT">Avusturya</option>
                                        <option value="AZ">Azerbaycan</option>
                                        <option value="BS">Bahamalar</option>
                                        <option value="BH">Bahreyn</option>
                                        <option value="BD">Bangladeş</option>
                                        <option value="BB">Barbados</option>
                                        <option value="EH">Batı Sahara</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BE">Belçika</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BY">Beyaz Rusya</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="ZZ">Bilinmeyen veya Geçersiz Bölge</option>
                                        <option value="AE">Birleşik Arap Emirlikleri</option>
                                        <option value="GB">Birleşik Krallık</option>
                                        <option value="BO">Bolivya</option>
                                        <option value="BA">Bosna Hersek</option>
                                        <option value="BW">Botsvana</option>
                                        <option value="BV">Bouvet Adası</option>
                                        <option value="BR">Brezilya</option>
                                        <option value="BN">Brunei</option>
                                        <option value="BG">Bulgaristan</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="GI">Cebelitarık</option>
                                        <option value="DZ">Cezayir</option>
                                        <option value="CX">Christmas Adası</option>
                                        <option value="DJ">Cibuti</option>
                                        <option value="CC">Cocos Adaları</option>
                                        <option value="CK">Cook Adaları</option>
                                        <option value="TD">Çad</option>
                                        <option value="CZ">Çek Cumhuriyeti</option>
                                        <option value="CN">Çin</option>
                                        <option value="DK">Danimarka</option>
                                        <option value="DM">Dominik</option>
                                        <option value="DO">Dominik Cumhuriyeti</option>
                                        <option value="TL">Doğu Timor</option>
                                        <option value="EC">Ekvator</option>
                                        <option value="GQ">Ekvator Ginesi</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="ID">Endonezya</option>
                                        <option value="ER">Eritre</option>
                                        <option value="AM">Ermenistan</option>
                                        <option value="EE">Estonya</option>
                                        <option value="ET">Etiyopya</option>
                                        <option value="FK">Falkland Adaları (Malvinalar)</option>
                                        <option value="FO">Faroe Adaları</option>
                                        <option value="MA">Fas</option>
                                        <option value="FJ">Fiji</option>
                                        <option value="CI">Fildişi Sahilleri</option>
                                        <option value="PH">Filipinler</option>
                                        <option value="PS">Filistin Bölgesi</option>
                                        <option value="FI">Finlandiya</option>
                                        <option value="FR">Fransa</option>
                                        <option value="GF">Fransız Guyanası</option>
                                        <option value="TF">Fransız Güney Bölgeleri</option>
                                        <option value="PF">Fransız Polinezyası</option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GH">Gana</option>
                                        <option value="GN">Gine</option>
                                        <option value="GW">Gine-Bissau</option>
                                        <option value="GD">Granada</option>
                                        <option value="GL">Grönland</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GY">Guyana</option>
                                        <option value="ZA">Güney Afrika</option>
                                        <option value="GS">Güney Georgia ve Güney Sandwich Adaları</option>
                                        <option value="KR">Güney Kore</option>
                                        <option value="CY">Güney Kıbrıs Rum Kesimi</option>
                                        <option value="GE">Gürcistan</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HM">Heard Adası ve McDonald Adaları</option>
                                        <option value="IN">Hindistan</option>
                                        <option value="IO">Hint Okyanusu İngiliz Bölgesi</option>
                                        <option value="NL">Hollanda</option>
                                        <option value="AN">Hollanda Antilleri</option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">Hong Kong SAR - Çin</option>
                                        <option value="HR">Hırvatistan</option>
                                        <option value="IQ">Irak</option>
                                        <option value="VG">İngiliz Virgin Adaları</option>
                                        <option value="IR">İran</option>
                                        <option value="IE">İrlanda</option>
                                        <option value="ES">İspanya</option>
                                        <option value="IL">İsrail</option>
                                        <option value="SE">İsveç</option>
                                        <option value="CH">İsviçre</option>
                                        <option value="IT">İtalya</option>
                                        <option value="IS">İzlanda</option>
                                        <option value="JM">Jamaika</option>
                                        <option value="JP">Japonya</option>
                                        <option value="JE">Jersey</option>
                                        <option value="KH">Kamboçya</option>
                                        <option value="CM">Kamerun</option>
                                        <option value="CA">Kanada</option>
                                        <option value="ME">Karadağ</option>
                                        <option value="QA">Katar</option>
                                        <option value="KY">Kayman Adaları</option>
                                        <option value="KZ">Kazakistan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="CO">Kolombiya</option>
                                        <option value="KM">Komorlar</option>
                                        <option value="CG">Kongo</option>
                                        <option value="CD">Kongo Demokratik Cumhuriyeti</option>
                                        <option value="CR">Kosta Rika</option>
                                        <option value="KW">Kuveyt</option>
                                        <option value="KP">Kuzey Kore</option>
                                        <option value="MP">Kuzey Mariana Adaları</option>
                                        <option value="CU">Küba</option>
                                        <option value="KG">Kırgızistan</option>
                                        <option value="LA">Laos</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LV">Letonya</option>
                                        <option value="LR">Liberya</option>
                                        <option value="LY">Libya</option>
                                        <option value="LI">Liechtenstein</option>
                                        <option value="LT">Litvanya</option>
                                        <option value="LB">Lübnan</option>
                                        <option value="LU">Lüksemburg</option>
                                        <option value="HU">Macaristan</option>
                                        <option value="MG">Madagaskar</option>
                                        <option value="MO">Makao S.A.R. Çin</option>
                                        <option value="MK">Makedonya</option>
                                        <option value="MW">Malavi</option>
                                        <option value="MV">Maldivler</option>
                                        <option value="MY">Malezya</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="IM">Man Adası</option>
                                        <option value="MH">Marshall Adaları</option>
                                        <option value="MQ">Martinik</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Meksika</option>
                                        <option value="FM">Mikronezya Federal Eyaletleri</option>
                                        <option value="MD">Moldovya Cumhuriyeti</option>
                                        <option value="MC">Monako</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MR">Moritanya</option>
                                        <option value="MZ">Mozambik</option>
                                        <option value="MN">Moğolistan</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="EG">Mısır</option>
                                        <option value="NA">Namibya</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NE">Nijer</option>
                                        <option value="NG">Nijerya</option>
                                        <option value="NI">Nikaragua</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">Norfolk Adası</option>
                                        <option value="NO">Norveç</option>
                                        <option value="CF">Orta Afrika Cumhuriyeti</option>
                                        <option value="UZ">Özbekistan</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">Papua Yeni Gine</option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PN">Pitcairn</option>
                                        <option value="PL">Polonya</option>
                                        <option value="PT">Portekiz</option>
                                        <option value="PR">Porto Riko</option>
                                        <option value="RE">Reunion</option>
                                        <option value="RO">Romanya</option>
                                        <option value="RW">Ruanda</option>
                                        <option value="RU">Rusya Federasyonu</option>
                                        <option value="SH">Saint Helena</option>
                                        <option value="KN">Saint Kitts ve Nevis</option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="PM">Saint Pierre ve Miquelon</option>
                                        <option value="VC">Saint Vincent ve Grenadinler</option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">Sao Tome ve Principe</option>
                                        <option value="SN">Senegal</option>
                                        <option value="SC">Seyşeller</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapur</option>
                                        <option value="SK">Slovakya</option>
                                        <option value="SI">Slovenya</option>
                                        <option value="SB">Solomon Adaları</option>
                                        <option value="SO">Somali</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Surinam</option>
                                        <option value="SY">Suriye</option>
                                        <option value="SA">Suudi Arabistan</option>
                                        <option value="SJ">Svalbard ve Jan Mayen</option>
                                        <option value="SZ">Svaziland</option>
                                        <option value="RS">Sırbistan</option>
                                        <option value="CS">Sırbistan-Karadağ</option>
                                        <option value="CL">Şili</option>
                                        <option value="TJ">Tacikistan</option>
                                        <option value="TZ">Tanzanya</option>
                                        <option value="TH">Tayland</option>
                                        <option value="TW">Tayvan</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">Trinidad ve Tobago</option>
                                        <option value="TN">Tunus</option>
                                        <option value="TC">Turks ve Caicos Adaları</option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="TM">Türkmenistan</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukrayna</option>
                                        <option value="OM">Umman</option>
                                        <option value="UY">Uruguay</option>
                                        <option value="QO">Uzak Okyanusya</option>
                                        <option value="JO">Ürdün</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VA">Vatikan</option>
                                        <option value="VE">Venezuela</option>
                                        <option value="VN">Vietnam</option>
                                        <option value="WF">Wallis ve Futuna</option>
                                        <option value="YE">Yemen</option>
                                        <option value="NC">Yeni Kaledonya</option>
                                        <option value="NZ">Yeni Zelanda</option>
                                        <option value="GR">Yunanistan</option>
                                        <option value="ZM">Zambiya</option>
                                        <option value="ZW">Zimbabve</option>
                                    </select>
                                </div>
                                <div className='col-4'>
                                    <label for="il" >Il</label>
                                    <input type="text" className="form-control" id="il" name="il" required
                                        value={il}
                                        onChange={(e) => setIl(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="ilce" >Ilce</label>
                                    <input type="text" className="form-control" id="ilce" name="ilce" required
                                        value={ilce}
                                        onChange={(e) => setIlce(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="mahalle" >Mahalle</label>
                                    <input type="text" className="form-control" id="mahalle" name="mahalle" required
                                        value={mahalle}
                                        onChange={(e) => setMahalle(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="sokak" >Sokak</label>
                                    <input type="sokak" className="form-control" id="sokak" name="sokak" required
                                        value={sokak}
                                        onChange={(e) => setSokak(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="AptNo" >Apartman No</label>
                                    <input type="number" className="form-control" id="apartno" name="apartno" required
                                        value={apartno}
                                        onChange={(e) => setApartno(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="zip" >Posta Kodu</label>
                                    <input type="number" className="form-control" id="zip" name="zip" required
                                        value={zip}
                                        onChange={(e) => setZip(e.target.value)} /><br />
                                </div>
                                <div className='col-12'>
                                    <h4><label className="form-label form-label-left form-label-auto" id="adres" name="adres" for="adres"><b>Eğitim Bilgileri</b></label></h4><hr />
                                </div>
                                <div className='col-4'>
                                    <label for="universite" >Üniversite</label>
                                    <input type="text" className="form-control" id="universite" name="universite" required
                                        value={universite}
                                        onChange={(e) => setUniversite(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="fakulte" >Fakülte</label>
                                    <input type="text" className="form-control" id="fakulte" name="fakulte" required
                                        value={fakulte}
                                        onChange={(e) => setFakulte(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="bolum" >Bölüm</label>
                                    <input type="text" className="form-control" id="bolum" name="bolum" required
                                        value={bolum}
                                        onChange={(e) => setBolum(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="nationality" >Mezuniyet Durumunuz</label>
                                    <select name="nationality" className="form-select" id="mezuniyet"
                                        value={mezuniyet}
                                        onChange={(e) => setMezuniyet(e.target.value)}
                                        required>
                                        <option value="">Lütfen Seçiniz</option>
                                        <option value="mezun">Mezun</option>
                                        <option value="devamEdiyor">Öğrenci</option>
                                    </select><br />
                                </div>
                                <div className='col-4'>
                                    <label for="date" >Mezuniyet Tarihiniz</label>
                                    <input type="date" className="form-control" id="MezuniyetTarih" name="MezuniyetTarih" required
                                        value={mezuniyetTarih}
                                        onChange={(e) => setMezuniyetTarih(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="not" >Not Ortalamanız</label>
                                    <input type="number" className="form-control" id="not" name="not" required
                                        value={not}
                                        onChange={(e) => setNot(e.target.value)} /><br />
                                </div>
                                <div className='col-12'>
                                    <h4><label className="form-label form-label-left form-label-auto" id="adres" name="adres" for="adres"><b>Doküman Bilgileri</b></label></h4><hr />
                                </div>
                                <div className='col-4'>
                                    <label for="cv" >Cv</label>
                                    <input type="file" className="form-control" id="cv" name="cv" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={cv}
                                        onChange={(e) => setCv(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="date" >Niyet Mektubu</label>
                                    <input type="file" className="form-control" id="niyet" name="niyet" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={niyet}
                                        onChange={(e) => setNiyet(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="diploma" >Diploma</label>
                                    <input type="file" className="form-control" id="diploma" name="diploma" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={diploma}
                                        onChange={(e) => setDiploma(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="ingYetkin" >İngilizce Yetkinlik Belgesi</label>
                                    <input type="file" className="form-control" id="ingYetkin" name="ingYetkin" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={ingYetkin}
                                        onChange={(e) => setIngYetkin(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="ikametgah" >İkametgah</label>
                                    <input type="file" className="form-control" id="ikametgah" name="ikametgah" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={ikametgah}
                                        onChange={(e) => setIkametgah(e.target.value)} /><br />
                                </div>
                                <div className='col-4'>
                                    <label for="pasaport" >Pasaport</label>
                                    <input type="file" className="form-control" id="pasaport" name="pasaport" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={pasaport}
                                        onChange={(e) => setPasaport(e.target.value)} /><br />
                                </div>
                                <div className='col-lg-6'>
                                    <label for="number">Telefon</label>
                                    <input type="number" className="form-control"
                                        value={telefon}
                                        onChange={(e) => setTelefon(e.target.value)}
                                        required /><br />
                                </div>
                                <div className='col-lg-6'>
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required /><br />
                                </div>

                                <button type="submit" className="btn btn-outline-success ms-3">Basvuru Gonder</button>

                                {error && <p style={{ color: 'red' }}> {error} </p>}
                                {success && <p style={{ color: 'green' }}> {success} </p>}


                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );

}

export default BasvuruFormu;