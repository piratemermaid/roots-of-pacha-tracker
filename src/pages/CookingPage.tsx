import { Card, CardContent, Grid, Typography } from '@mui/material';

import PageLayout from '../components/PageLayout';
import COOKING from '../data/cooking';

export default function CookingPage() {
  return (
    <PageLayout title="Cooking">
      <Typography>CookingPage TODO</Typography>

      <Grid container spacing={2}>
        {COOKING.map((meal) => {
          const formattedIngredients = meal.ingredients.map(
            ({ name, quantity }) => `${name} (${quantity})`
          );

          return (
            <Grid item key={meal.name} xs={3}>
              <Card sx={{ p: 1 }}>
                <Typography variant="h6" color="secondary">
                  {meal.name}
                </Typography>
                <CardContent sx={{ textAlign: 'left' }}>
                  <Typography variant="body2">
                    Ingredients: {formattedIngredients.join(', ')}
                  </Typography>
                  <Typography variant="body2">Buff: {meal.buff}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </PageLayout>
  );
}
