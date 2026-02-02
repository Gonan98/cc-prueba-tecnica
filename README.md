# Prueba Técnica

1. Aplicación web para la visualización de variacion de fondos mensuales.
2. Scripts de consultas a una base de datos.

El proyecto está compuesto por:
- **Frontend:** Aplicación web desarrollada con Angular
- **Script:** Scripts SQL de consultas a una base de datos PostgreSQL.

## Tecnologías utilizadas

### Frontend
- Angular 21
- TypeScript
- ng2-charts (Para la visualización de datos)

### Base de datos
- PostgreSQL


## Requisitos previos

Antes de ejecutar el proyecto, asegurarse de tener instalado:

- Node.js 20+
- Angular CLI 21+
- PostgreSQL

## Instalación y configuración

### Angular
```
cd funds
npm install
ng serve --open
```

### PostgreSQL
- Puerto: 5432
- Base de datos: postgres
- Utilizar un sistema de gestion de base de datos como DBeaver para establecer conexion con la DB y ejecutar los scripts.

```
1. Ejecutar creation.sql
2. Ejecutar query.sql
```

## Explicación:

La solucion consiste en 2 ejercicios por separado.

1. En el Proyecto hecho con angular para la visualizacion de variaciones mensuales de fondos, se utilizó la API de [Fintualist](https://fintual.cl/api-docs/index.html), se implementaron servicios para obtener datos de la API, agrupar los datos por año-mes, normalizar los datos, calcular la variacion mensual y se integró con ng2-charts para la visualizacion de un grafico de lineas.

2. Scripts de creacion y consultas. Se tiene un script para crear 2 tablas en donde se ejecutarán las consultas solicitadas. Se utilizó la base de datos PostgreSQL.