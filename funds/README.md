# Variacion mensual

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 21.1.1.

## Desarrollo

El proyecto hace uso de un endpoint de la API de [Fintualist](https://fintual.cl/api-docs/index.html). En el proceso de crear la aplicación para visualizar datos se realizó lo siguiente:

- Crear un servicio para obtener los datos de la API (https://fintual.cl/api/real_assets/{id}/days) de los 4 fondos disponibles.
- Se optó por cargar todos los datos entre el año 2019 y 2025 para solo hacer una llamada a la API y filtrarlos utilizando los inputs en base a ese valor inicial.
- Mapear los datos a un modelo similar al de la respuesta, solo con los campos necesarios
- Mapear el modelo a una interfaz para trabajar mejor con los precios diarios
- Agrupar los datos por año y fecha; normalizarlos (había un fondo que empezaba su registro a medidados del 2019-04) y calcular la variacion de cada mes.
- Se creó un servicio para unir la llamada a la API, con el mapeo de datos y la calculación de la variación mensual.
- Se utilizó ng2-charts para la creación de gráficos ya que tiene mejor compatibilidad nativa con angular.
