const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/dashboard', (req, res) => res.render('dashboard'));

app.get('/carriers', (req, res) => res.render('carriers'));
app.get('/track-package', (req, res) => res.render('track_package'));
app.get('/my-packages', (req, res) => res.render('my_packages'));

app.get('/carrier-delivery-history', (req, res) => res.render('carrier_delivery_history'));
app.get('/carrier-ongoing-deliveries', (req, res) => res.render('carrier_ongoing_delivery'));
app.get('/carrier-profile', (req, res) => res.render('carrier_profile'));
app.get('/customers', (req, res) => res.render('customers'));
app.get('/service-centers', (req, res) => res.render('service-centers'));

//landing pages:
app.get('/', (req, res) => res.render('index'));
app.get('/about-us', (req, res) => res.render('about-us'));
app.get('/become-a-carrier', (req, res) => res.render('become-a-carrier'));
app.get('/become-a-service-center', (req, res) => res.render('become-a-service-center'));
app.get('/get-started', (req, res) => res.render('get_started'));
app.get('/send-with-trood', (req, res) => res.render('send-with-trood'));





app.listen(3000, () => console.log('Server running on http://localhost:3000'));