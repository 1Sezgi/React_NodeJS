const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "erasmusportal"
});

connection.connect((err) => {
    if (err) {
        console.error('Veritabanina baglanirken hata olustu: ', err);
        return;
    }
    console.log('Veritabanina baglanildi.');
});

app.post('/kayit', (req, res) => {

    const { email, password } = req.body;

    const query = "INSERT INTO users (username,password,AccountOpeningDate) VALUES (?,?,NOW())";
    connection.query(query, [email, password], (err, result) => {


        if (err) {
            console.error("Veritabanina bilgi girereken hata: ", err);
            res.status(500).send({ error: "Kayit olusturulurken bir hata olustu." });
            return;
        }
        res.status(200).send({ message: "Kayit basarili!" });

    })

});



app.post('/', (req, res) => {

    const { email, password } = req.body;

    const query = "SELECT * FROM users WHERE username=? AND password=?";

    connection.query(query, [email, password], (err, result) => {
        if (err) {
            console.error("Bilgilerin kontrolunde hata olustu. ", err);
            res.status(500).send({ error: 'Bilgilerin kontrolunde hata olustu.' });
            return;
        }
        if (result.length > 0) {

            const user_id = result[0].id_num;

            const isLoginQuery = "UPDATE users SET isLogin = 1 WHERE id_num=?";

            connection.query(isLoginQuery, user_id, (err, result) => {
                if (err) {
                    console.error("Login bilgisi guncellenirken hata olustu. ", err);
                    res.status(500).send({ error: 'Login guncellenemedi.' });
                }
            });

            res.status(200).send({ message: '1', id: user_id });
        } else {
            res.status(200).send({ message: '0' });
        }
    })
});

app.post('/signout', (req, res) => {

    const { id } = req.body;

    const query = "UPDATE users SET isLogin = 0 WHERE id_num=?";

    connection.query(query, [id], (err, result) => {
        if (err) {
            console.error("isLogin guncellemesinde hata olustu. ", err);
            res.status(500).send({ error: 'isLogin guncellemesinde hata olustu.' });
            return;
        }

        res.status(200).send({ message: 'Kullanici cikisi guncellendi.' });
    });

});


app.post('/BasvuruFormuGonder', async (req, res) => {

    const {id,soyisim,isim,cinsiyet,tarih,telefon,tcNo,ulke,milliyet,ikinciMilliyet,il,ilce,mahalle,sokak,apartno,zip,why,disability,universite,fakulte,bolum,mezuniyet,mezuniyetTarih,not,cv,niyet,diploma,ingYetkin,ikametgah,pasaport} = req.body;

    const kontrolQuery ="SELECT * FROM usertable WHERE UserID =?";

    try {
        const result = await queryAsync(kontrolQuery, [id]);

        if(result.length > 0){
            res.status(201).send({error: "Aynı hesaptan yalnızca bir (1) kullanıcı başvuru yapabilir!"});
            return;
        } else {
            const query1 = "INSERT INTO usertable (`UserID`,`LastName`,`FirstName`,`Gender`,`BirthDate`,`PhoneNumber`) VALUES (?,?,?,?,?,?)";
            const query2 = "INSERT INTO nationalitytable (`UserID`,`IdNumber`,`Country`,`NationalityName`,`SecondNationalityName`) VALUES (?,?,?,?,?)";
            const query3 = "INSERT INTO addresstable (`UserID`,`City`,`District`,`Neighborhood`,`Street`,`ApartmentNumber`,`PostCode`) VALUES (?,?,?,?,?,?,?)";
            const query4 = "INSERT INTO disabilitytable (`UserID`,`DisabilityStatus`,`DisabilityName`) VALUES (?,?,?)";
            const query5 = "INSERT INTO educationtable (`UserID`,`UnivercityName`,`FacultyName`,`DepartmentName`,`GraduationStatus`,`GraduationDate`,`GradeAverage`) VALUES (?,?,?,?,?,?,?)";
            const query6 = "INSERT INTO userdocumenttable (`UserID`,`Cv`,`LetterOfIntent`,`Diploma`,`EnglishCertificateOfCompetence`,`PlaceOfResidence`,`Passport`,`DocumentUploadDate`) VALUES (?,?,?,?,?,?,?,?)";
            const query7 = "INSERT INTO applicationtable (`UserID`,`ApplicationDate`,`ApplicationStatus`) VALUES (?,?,?)";
            const now = new Date().toISOString().slice(0, 19).replace('T', ' '); // geçerli tarih ve saat

            let numQueriesCompleted = 0;

            await queryAsync(query1, [id,soyisim,isim,cinsiyet,tarih,telefon]);
            await queryAsync(query2, [id,tcNo,ulke,milliyet,ikinciMilliyet]);
            await queryAsync(query3, [id,il,ilce,mahalle,sokak,apartno,zip]);
            await queryAsync(query4, [id,why,disability]);
            await queryAsync(query5, [id,universite,fakulte,bolum,mezuniyet,mezuniyetTarih,not]);
            await queryAsync(query6, [id,cv,niyet,diploma,ingYetkin,ikametgah,pasaport, now]);
            await queryAsync(query7, [id, now, "Başvuru Durumu Devam Ediyor"]);

            res.status(200).send({ message: "Kayit basarili!" });

        }
    } catch (err) {
        console.error("Veritabanina bilgi girerken hata: ", err);
        res.status(500).send({ error: "Kayit olusturulurken bir hata olustu." });
    }
});

// asenkron olarak çalışan fonksiyon
function queryAsync(query, values) {
return new Promise((resolve, reject) => {
connection.query(query, values, (err, result) => {
if (err) {
reject(err);
} else {
resolve(result);
}
});
});
}





app.post("/formGoster", (req, res) => {

    const user_id = req.body.id;
  
    const query1 = "SELECT * FROM usertable WHERE UserID=?";
    const query2 = "SELECT * FROM nationalitytable WHERE UserID=?";
    const query3 = "SELECT * FROM addresstable WHERE UserID=?";
    const query4 = "SELECT * FROM disabilitytable WHERE UserID=?";
    const query5 = "SELECT * FROM educationtable WHERE UserID=?";
    const query6 = "SELECT * FROM userdocumenttable WHERE UserID=?";
    const query7 = "SELECT * FROM users WHERE id_num=?";
  
    Promise.all([
      new Promise((resolve, reject) => {
        connection.query(query1, [user_id], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }),
      new Promise((resolve, reject) => {
        connection.query(query2, [user_id], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }),
      new Promise((resolve, reject) => {
        connection.query(query3, [user_id], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }),
      new Promise((resolve ,reject) => {
        connection.query(query4, [user_id], (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
      }),
      new Promise((resolve,reject) => {
        connection.query(query5, [user_id], (err ,result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
      }),
      new Promise((resolve,reject) => {
        connection.query(query6, [user_id], (err, result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
      }),
      new Promise((resolve,reject) => {
        connection.query(query7, [user_id], (err, result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
      })

    ]).then((results) => {
      const userResult = results[0];
      const nationalityResult = results[1];
      const addressResult = results[2];
      const disabilityResult = results[3];
      const educationResult = results[4];
      const userdocumentResult = results[5];
      const usersResult = results[6];
      if (userResult.length === 0) {
        res.status(404).send({ message: "Basvuru Bulunamadi." });
      } else {
        const responseData = {
          isim: userResult[0].FirstName,
          soyisim: userResult[0].LastName,
          cinsiyet: userResult[0].Gender,
          tarih: userResult[0].BirthDate,
          telefon: userResult[0].PhoneNumber,
          tcNo: nationalityResult[0].IdNumber,
          ulke: nationalityResult[0].Country,
          milliyet: nationalityResult[0].NationalityName,
          ikinciMilliyet: nationalityResult[0].SecondNationalityName,
          il: addressResult[0].City,
          ilce: addressResult[0].District,
          mahalle: addressResult[0].Neighborhood,
          Street: addressResult[0].Street,
          apartNo: addressResult[0].ApartmentNumber,
          zip: addressResult[0].PostCode,
          disability:disabilityResult[0].DisabilityName,
          why : disabilityResult[0].DisabilityStatus,
          universite : educationResult[0].UnivercityName,
          fakulte : educationResult[0].FacultyName,
          bolum : educationResult[0].DepartmentName,
          mezuniyet : educationResult[0].GraduationStatus,
          mezuniyetTarih : educationResult[0].GraduationDate,
          not : educationResult[0].GradeAverage,
          cv : userdocumentResult[0].CV,
          diploma : userdocumentResult[0].Diploma,
          niyet : userdocumentResult[0].LetterOflntent,
          ingYetkin : userdocumentResult[0].EnglishCertificateOfCompetence,
          ikametgah : userdocumentResult[0].PlaceOfResidence,
          pasaport : userdocumentResult[0].Passport,
          email : usersResult[0].username

        };
        res.status(200).send(responseData);
      }
    }).catch((err) => {
      console.error("Veritabanindan bilgi alinirken hata olustu.", err);
      res.status(500).send({ error: "Veritabanindan bilgi alinirken hata olustu." });
    });
  });
/////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/password', (req, res) => {
  const { email, password, passnew, passnewtekrar } = req.body;

  if (passnew !== passnewtekrar) {
    res.status(400).send({ error: "Yeni şifre ve tekrarı eşleşmiyor." });
    return;
  }

  const query = "SELECT * FROM users WHERE username=? AND password=?";

  connection.query(query, [email, password], (err, result) => {
    if (err) {
      console.error("Bilgilerin kontrolunde hata oluştu. ", err);
      res.status(500).send({ error: 'Bilgilerin kontrolünde hata oluştu.' });
      return;
    }

    if (result.length === 0) {
      res.status(401).send({ error: "Mevcut şifreniz yanlış." });
      return;
    }

    const updatePasswordQuery = "UPDATE users SET password = ? WHERE username = ?";
    connection.query(updatePasswordQuery, [passnew, email], (err, result) => {
      if (err) {
        console.error("Veritabanına şifre güncellenirken hata oluştu: ", err);
        res.status(500).send({ error: "Şifre güncellenirken bir hata oluştu." });
        return;
      }

      res.status(200).send({ success: "Şifreniz başarıyla güncellendi." });
    });
  });
});

// const transporter = nodemailer.createTransport({
//   service: 'Hotmail',
//   auth: {
//       user: 'birsezgiersoy@hotmail.com',
//       pass: 'SezgiYekta2017*'
//   }
// });
// app.post('/submit-form', function(req, res){

//   var gonderenEmail = req.body.email;
//   var mesaj = req.body.mesaj;
//   var name = req.body.name;

//   var mailOption = 
//   {
//       from: gonderenEmail,
//       to: 'ofluoglusezgi@gmail.com',
//       subject: "Erasmus Portal'dan Mesaj",
//       text: "Gönderen: " + name + " Mesaj: " + mesaj
//   }

//   transporter.sendMail(mailOption, function(err, info){
//       if(err) {
//           console.error(err);
//           res.status(500).send({ message: "Mesaj Gönderilemedi!" });
//       } else {
//           console.log("Mail gönderildi" + info.messageId);
//           res.status(200).send({ message: "1", id: info.messageId });
//       }
//   });
// });


app.post('/guncelle', (req, res) => {
  const {id,soyisim,isim,cinsiyet,tarih,telefon,tcNo,ulke,milliyet,ikinciMilliyet,il,ilce,mahalle,sokak,apartno,zip,why,disability,universite,fakulte,bolum,mezuniyet,mezuniyetTarih,not,cv,niyet,diploma,ingYetkin,ikametgah,pasaport} = req.body;

  const kontrolQuery ="SELECT * FROM usertable WHERE UserID =?";
  connection.query(kontrolQuery, [id], (err,result) => {
     
          const updateQuery1 = "UPDATE usertable SET LastName=?, FirstName=?, Gender=?, BirthDate=?, PhoneNumber=? WHERE UserID=?";
          const updateQuery2 = "UPDATE nationalitytable SET IdNumber=?, Country=?, NationalityName=?, SecondNationalityName=? WHERE UserID=?";
          const updateQuery3 = "UPDATE addresstable SET City=?, District=?, Neighborhood=?, Street=?, ApartmentNumber=?, PostCode=? WHERE UserID=?";
          const updateQuery4 = "UPDATE disabilitytable SET DisabilityStatus=?, DisabilityName=? WHERE UserID=?";
          const updateQuery5 = "UPDATE educationtable SET UnivercityName=?, FacultyName=?, DepartmentName=?, GraduationStatus=?, GraduationDate=?, GradeAverage=? WHERE UserID=?";
          const updateQuery6 = "UPDATE userdocumenttable SET Cv=?, LetterOfIntent=?, Diploma=?, EnglishCertificateOfCompetence=?, PlaceOfResidence=?, Passport=?, DocumentUploadDate=? WHERE UserID=?";
          const updateQuery7 = "UPDATE applicationtable SET ApplicationDate=?, ApplicationStatus=? WHERE UserID=?";

          const now = moment();
          const formattedDate = now.format('YYYY-MM-DD');

          let numQueriesCompleted = 0;

          connection.query(updateQuery1, [soyisim,isim,cinsiyet,tarih,telefon, id], handleQueryCompletion);
          connection.query(updateQuery2, [tcNo,ulke,milliyet,ikinciMilliyet, id], handleQueryCompletion);
          connection.query(updateQuery3, [il,ilce,mahalle,sokak,apartno,zip, id], handleQueryCompletion);
          connection.query(updateQuery4, [why,disability, id], handleQueryCompletion);
          connection.query(updateQuery5, [universite,fakulte,bolum,mezuniyet,mezuniyetTarih,not, id], handleQueryCompletion);
          connection.query(updateQuery6, [cv,niyet,diploma,ingYetkin,ikametgah,pasaport, formattedDate, id], handleQueryCompletion);
          connection.query(updateQuery7, [formattedDate, "Başvuru Durumu Devam Ediyor", id], handleQueryCompletion);

          function handleQueryCompletion(err, result) {
            numQueriesCompleted++;
          
            if (err) {
              console.error("Veritabaninda bilgi güncellenirken hata: ", err);
              res.status(500).send({ error: "Güncellenirken bir hata olustu." });
              return;
            }
          
            if (numQueriesCompleted === 7) {
              res.status(200).send({ message: "Güncelleme basarili!" });
            }
          }
      
    })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server ${PORT} üzerinde dinleniyor.`);
});
 


