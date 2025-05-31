const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Import bcrypt untuk hashing password
const app = express();
const port = 5000; // Gunakan port yang berbeda agar tidak bentrok dengan React

app.get('/', (req, res) => {
  res.send('SnapDish API is running');
});

// Enable CORS
app.use(cors());

// Middleware untuk meng-handle JSON
app.use(express.json());

// Membuat koneksi ke MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ganti dengan username MySQL kamu
  password: '', // Ganti dengan password MySQL kamu
  database: 'snapdish' // Nama database yang kamu buat di phpMyAdmin
});

// Koneksi ke database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Route untuk login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Query untuk mengecek email dan password di database
  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length > 0) {
      const user = results[0];
      // Verifikasi password dengan bcrypt.compare
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ error: 'Password comparison error' });
        }

        if (isMatch) {
          return res.json({ 
            message: 'Login berhasil', 
            name: user.name });
        } else {
          return res.json({ message: 'Email atau password salah' });
        }
      });
    } else {
      return res.json({ message: 'Email atau password salah' });
    }
  });
});

// Route untuk signup (registrasi pengguna baru)
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Cek apakah email sudah terdaftar
  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    // Hash password sebelum menyimpannya
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ message: 'Error hashing password' });
      }

      // Menyimpan pengguna baru ke database
      connection.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword],
        (err, results) => {
          if (err) {
            return res.status(500).json({ message: 'Error inserting into database' });
          }

          return res.status(201).json({ message: 'User successfully registered' });
        }
      );
    });
  });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
