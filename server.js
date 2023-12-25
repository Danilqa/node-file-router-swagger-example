import { initFileRouter } from 'node-file-router';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import express from 'express';

const app = express();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Some Shop API',
      version: '1.0.0',
    },
  },
  apis: ['api/**/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const fileRouter = await initFileRouter({
  baseDir: './api',
});

app.listen(4004, () => {
  console.log('Server is running on http://localhost:4004');
  console.log('Swagger Docs: http://localhost:4004/api-docs');
});

app.use(fileRouter);
