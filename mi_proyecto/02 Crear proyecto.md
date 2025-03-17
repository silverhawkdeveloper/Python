# Crear el proyecto Django
En la consola:
1. django-admin startproject mi_proyecto 

Esto creará el fichero manage.py y la carpeta mi_proyecto donde estarán los ficheros del proyecto.

Cambiamos las configuraciones que vienen por defecto en el fichero mi_proyecto/settings.py
2. LANGUAGE_CODE = 'es-es'
   STATIC_ROOT = BASE_DIR / 'static' <--- esto al final del fichero

Para crear una BD en sqlite en nuestro proyecto, hacemos lo siguiente:
3. python manage.py migrate

Podemos en este punto lanzar nuestro server y ver nuestro proyecto funcionando.
4. python manage.py runserver

Por defecto usa el puerto 8000, pero podemos cambiarlo añadiendo el puerto en el que queremos que se ejecute el servidor:
5. python manage.py runserver 8080
