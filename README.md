# 🚀 Candidatos API

![Node.js](https://img.shields.io/badge/Node.js-24.x-green?style=flat-square&logo=node.js)
![Express](https://img.shields.io/badge/Express-5.x-lightgrey?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-green?style=flat-square&logo=mongodb)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat-square&logo=docker)

API robusta diseñada para la gestión y administración de candidatos en departamentos de Recursos Humanos. El sistema incluye autenticación, seguridad avanzada y configuración lista para contenedores.

---

## 🛠️ Stack Tecnológico

* **Backend:** Node.js + Express 5
* **Base de Datos:** MongoDB (vía Mongoose)
* **Seguridad:** Helmet, CORS, Express Rate Limit
* **Autenticación:** Passport.js (Local & HTTP)
* **Infraestructura:** Docker & Docker Compose
* **Deployment:** Fly.io

---

## ⚙️ Configuración Inicial

### 1. Requisitos
* Docker y Docker Compose
* Node.js (opcional, para desarrollo local)

### 2. Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto. Puedes basarte en el archivo de ejemplo:

```bash
cp .env.example .env
