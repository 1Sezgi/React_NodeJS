import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Password() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passnew, setPassnew] = useState('');
    const [passnewtekrar, setPassnewtekrar] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passnew !== passnewtekrar) {
            setError("Şifreler eşleşmiyor, lütfen tekrar deneyiniz!");
            return;
        }


        try {

            const response = await axios.post("http://localhost:3001/password", {
                email,
                password,
                passnew,
                passnewtekrar
            });

            if (response.status === 200) {
                setSuccess('Güncelleme işleminiz başarıyla oluşturuldu. Lütfen giriş yapınız.');
                setEmail('');
                setPassword('');
                setPassnew('');
                setPassnewtekrar('');
                setError('');

                setTimeout(() => {
                    navigate('/');
                }, 2000);

            } else {
                setError('Üzgünüz, şifre güncellemeyle ilgili bir sorun oluştu, lütfen tekrar deneyiniz.');
            }


        } catch (err) {
            setError('Üzgünüz, isteğinizle ilgili bir sorun oluştu, lütfen daha sonra tekrar deneyiniz.');
        }
    }

    return (
        <>

            <div className='container' style={{ marginTop: "200px" }}>
                <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                        <i class="fa-solid fa-right-to-bracket"></i><h2>Şifre Güncelleme</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-4">
                        <form onSubmit={handleSubmit}>
                            <div class="row" name="sifre" id="sifre">


                                <div class="py-2">
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="E-Mail Adresiniz"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div class="py-2">
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder="Mevcut Şifreniz"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        minLength="6"
                                        required />
                                </div>

                                <div class="py-2">
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder="Yeni Şifreniz"
                                        value={passnew}
                                        onChange={(e) => setPassnew(e.target.value)}
                                        minLength="6"
                                        required />
                                </div>
                                <div class="py-2">
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder="Yeni Şifreniz (Tekrar)"
                                        required
                                        value={passnewtekrar}
                                        onChange={(e) => setPassnewtekrar(e.target.value)}
                                        minLength="6" />
                                </div>
                                <div class="invalid-feedback" >Şifreler aynı ve en az 6 karakter olmalıdır, en az bir küçük harf, bir büyük harf, en az bir rakam ve en az bir sembol içermelidir.</div>                                                             
                            </div>
                            <button type="submit" class="w-100 btn btn-lg btn-primary">Şifre Güncelle</button>
                        </form>
                    </div>
                </div>

                {error && <p style={{ color: 'red' }}> {error} </p>}
                {success && <p style={{ color: 'green' }}> {success} </p>}
                <div style={{ marginBottom: "10%" }}></div>
            </div>
        </>
    );
}

export default Password;