import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { TiUserAddOutline } from "react-icons/ti";

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password != passRepeat) {
            setError("Sifreler eslesmiyor!");
            return;
        }


        try {

            const response = await axios.post('http://localhost:3001/kayit', {
                email,
                password
            });

            if (response.status === 200) {
                setSuccess('Kayit Basarili. Simdi giris yapabilirsiniz.');
                setEmail('');
                setPassword('');
                setPassRepeat('');
                setError('');
                setTimeout( () => {
                    navigate('/');
                }, 1000);  
            } else {
                setError('Kayit olusturulurken bir hata olustu.');
            }


        } catch (err) {
            setError('Kayit olusturulurken bir hata olustu.');
        }


    }

    return (
        <div class="container" style={{ marginTop: "200px" }}>
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <i class="fa-solid fa-user-plus"></i><h2><TiUserAddOutline /></h2><h2>Kayıt Ol</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div className='col-4'>
                    <form onSubmit={handleSubmit}>
                        <div className='py-2'>
                            <input type="email" class="form-control"
                                placeholder="Mail adresiniz"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div class=" py-2">
                            <input type="password" class="form-control"
                                placeholder="Şifre"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                minLength="6"
                                required />
                        </div>
                        <div class=" py-2">
                            <input type="password" class="form-control"
                                placeholder="Şifre Tekrar"
                                value={passRepeat}
                                onChange={(e) => setPassRepeat(e.target.value)}
                                minLength="6"
                                required />
                        </div>
                        <div class="form-check d-flex justify-content-center mb-5">
                            <input class="form-check-input me-1" type="checkbox" value="" id="form2Example3c" required />
                            <label class="form-check-label" for="form2Example3" style={{ backgroundColor: "white", opacity: "0.5", borderRadius: "2px" }}>
                                <a href="#!"><b>Kullanım Şartlarındaki</b>  </a> tüm beyanları kabul ediyorum.
                            </label>
                        </div>
                        <button type="submit" class="w-100 btn btn-lg btn-primary">Kayıt Ol</button>
                    </form>
                    {error && <p style={{ color: 'red' }}> {error} </p>}
                    {success && <p style={{ color: 'green' }}> {success} </p>}
                    <p>
                        Hesabınız var mı? <Link to="/">Giriş Yap</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;