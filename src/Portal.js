import React from 'react';
import { Router, Route, Routes, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Sidebar from './component/Sidebar';


function Portal() {
    return (
        <>

            <div className="row" id='back'>
                <div className="col-2">
                    <Sidebar
                        // gor_to="BasvuruGoruntule"
                        // form_to="BasvuruFormu" 
                        />
                </div>
                <div className="col-10 text-center mt-5">
                    <b><p style={{ fontSize: "1.5rem" }}>2023-2024 ERASMUS ÖĞRENCİ HAREKETLİLİĞİ İLK ÇAĞRI </p></b>
                    <h5><b>Duyuru :</b>Başvurular 1 Haziran 2023 17:00'a kadar devam edecektir.</h5>
                </div>
            </div>

        </>
    );
}

export default Portal;