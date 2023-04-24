import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { TiUserOutline } from "react-icons/ti";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('http://localhost:3001/',
                {
                    email,
                    password
                }
            );

            if (response.status === 200) {
                if (response.data.message === "1") {
                    sessionStorage.setItem("id", response.data.id);
                    sessionStorage.setItem("oturum", 1);
                    setSuccess('Giriş Başarili. Yonlendiriliyorsunuz...')
                    setTimeout(() => {
                        navigate('/portal');
                    }, 2000);
                } else {
                    setError('Kullanici adi veya sifre hatali.');
                }
            }
        } catch (err) {
            setError('Kullanici adi ve sifre kontrolünde hata olustu.');
        }


    }

    return (
        <div class="container" style={{ marginTop: "200px" }}>
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <i class="fa-solid fa-right-to-bracket"></i><h2><TiUserOutline /></h2> <h2>Giriş</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-4">
                    <form onSubmit={handleSubmit}>
                        <div class="py-2 ">
                            <input type="email" class="form-control"
                                placeholder="Mail adresiniz"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div class="py-2">
                            <input type="password" class="form-control"
                                placeholder="Şifre"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <button type="submit" class="w-100 btn btn-lg btn-primary">Giriş</button>
                    </form>

                    {error && <p style={{ color: 'red' }}> {error} </p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                    <p>
                        Şifrenizi güncellemek ister misiniz? <Link style={{ color: "black" }} to="/password"><a href=''>Şifremi Güncelle</a></Link>
                    </p>
                    <p>
                        Hesabınız yok mu? <Link to="/kayit">Kayıt Ol!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;