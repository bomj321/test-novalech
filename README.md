# test-Nolatech

# Características

npm install
BACKEND: npm run dev

# ENV

MONGO_URL=xxxx
JWT_SECRET=xxx

FRONTEND: npm run start

# ENV

Confugrar el archivo environments dentro de la carpeta libs

# Consideraciones

EL frontend está incompleto, Solo coloqué el login 2 visuales diferentes para un usuario tipo ADMIN y uno que no lo es.

# Endpoints

# AUTH

POST http://localhost:8081/api/auth/register
POST http://localhost:8081/api/auth/login

# USER

GET http://localhost:8081/api/employees/

# EVAlUATION

POST http://localhost:8081/api/evaluations/
GET http://localhost:8081/api/evaluations/
GET http://localhost:8081/api/evaluations/:id
GET http://localhost:8081/api/evaluations/employee/:id
PATCH http://localhost:8081/api/evaluations/:id
DELETE http://localhost:8081/api/evaluations/:id

# FEEDBACK

POST http://localhost:8081/api/feedback

# REPORT

POST http://localhost:8081/api/reports/employee/:id
