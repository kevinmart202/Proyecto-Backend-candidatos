const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

// Importación de rutas y configuración
const candidateRoutes = require("./routes/candidate");
const jobRoutes = require("./routes/job");
const connectDB = require("./config/db"); 
const passport = require("./middlewares/auth");

// Middlewares personalizados
const requestTimerMiddleware = require("./middlewares/requestTimer");
const errorHandlerMiddleware = require("./middlewares/errorHandler");

// Ejecutar conexión a base de datos
connectDB(); 

const app = express();

// --- Configuración de Red (Vital para Rate Limit) ---
app.set("trust proxy", 1); 

// --- Middlewares Globales de Seguridad y Logs ---
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(requestTimerMiddleware);


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 20, 
  message: {
    status: 429,
    message: "Demasiadas peticiones, por favor intenta más tarde.",
  },
  standardHeaders: true, 
  legacyHeaders: false,
});

app.use(passport.initialize());


app.use(
  "/api/v1/jobs",
  limiter,
  passport.authenticate("general", { session: false }),
  jobRoutes
);

app.use(
  "/api/v1/candidates",
  passport.authenticate("general", { session: false }),
  candidateRoutes
);


app.use(errorHandlerMiddleware);

module.exports = app;