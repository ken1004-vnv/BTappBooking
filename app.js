const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true })); // Để xử lý dữ liệu từ form gửi đến

app.set('view engine', 'ejs');
app.use(express.static('public'));

let reservations = [
  { id: 1, customerName: 'VanNgoc', date: '2024-11-24', time: '10:00', status: 'Pending' },
  { id: 2, customerName: 'TanThanh', date: '2024-11-25', time: '14:30', status: 'Confirmed' },
  { id: 3, customerName: 'XuanTung', date: '2024-11-26', time: '18:45', status: 'Cancelled' }
];

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/reservations', (req, res) => {
  res.render('reservation', { reservations });
});

app.get('/new-reservation', (req, res) => {
  res.render('new-reservation');
});

// Xử lý form đặt chỗ mới
app.post('/new-reservation', (req, res) => {
  const { customerName, reservationDate, reservationTime } = req.body;

  if (customerName && reservationDate && reservationTime) {
    reservations.push({
      id: reservations.length + 1,
      customerName,
      date: reservationDate,
      time: reservationTime,
      status: 'Pending'
    });

    res.redirect('/reservations');
  } else {
    res.send('Vui lòng nhập đầy đủ thông tin!');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
