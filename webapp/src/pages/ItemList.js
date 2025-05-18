import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

// Example item data
const items = [
  { id: 1, name: 'Fancy Lamp', price: '$25', image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80', offer: 10 }, // lamp
  { id: 2, name: 'Stylish Vase', price: '$18', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80', offer: 15 }, // vase
  { id: 3, name: 'Modern Clock', price: '$30', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', offer: 5 }, // clock
  { id: 4, name: 'Decorative Mirror', price: '$40', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80', offer: 20 }, // mirror
  { id: 5, name: 'Wall Art', price: '$22', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', offer: 12 }, // wall art
  { id: 6, name: 'Table Plant', price: '$15', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80', offer: 8 }, // plant
  { id: 7, name: 'Candle Holder', price: '$12', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80', offer: 18 }, // candle holder
  { id: 8, name: 'Fancy Rug', price: '$55', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=400&q=80', offer: 25 }, // rug
  { id: 9, name: 'Designer Chair', price: '$120', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', offer: 30 }, // chair
];

const ItemList = ({ darkMode }) => {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: darkMode ? '#5eead4' : '#fff',
        minHeight: '100vh',
        transition: 'background-color 0.3s',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Featured Items
      </Typography>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ height: 240, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 2 }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 8 }}
                  onError={e => { e.target.src = 'https://via.placeholder.com/100?text=No+Image'; }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, width: '100%', textAlign: 'center', p: 1 }}>
                <Typography variant="h6" sx={{ fontSize: 16 }}>{item.name}</Typography>
                <Typography color="text.secondary" sx={{ fontWeight: 'bold', fontSize: 15 }}>{item.price}</Typography>
                <Typography variant="body2" color="success.main" sx={{ mt: 0.5, fontSize: 13 }}>
                  {item.offer}% OFF
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemList;
